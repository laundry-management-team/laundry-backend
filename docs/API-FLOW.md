# API Flow & Endpoint Reference

This document describes the real request flow through the laundry backend: who calls what, in what order, and what each endpoint actually returns. It reflects the code as implemented, not the original design docs.

## Roles

| Role | Who | Can do |
|---|---|---|
| `CUSTOMER` | End customer, self-registers | Create own orders, view own orders, cancel own orders |
| `STAFF` | Branch employee, promoted manually (no self-signup) | Accept/progress/cancel orders for their branch, mark payment |
| `ADMIN` | Shop owner/operator | Everything STAFF can do, across all branches |

Every authenticated request carries a JWT access token with `{ sub: userId, role, branchId }`. `STAFF` is scoped to their own `branchId` — the service layer rejects any STAFF action on an order belonging to a different branch (`ForbiddenException`).

---

## 1. Customer sign-up & login flow

Phone number is the primary identifier (Lao mobile format, validated/normalized by `PhoneNumberValidator` — accepts `020XXXXXXXX`, `+85620XXXXXXXX`, `85620XXXXXXXX`, bare `20XXXXXXXX`, all normalize to the same `+85620XXXXXXXX` in the DB). Email is optional.

```
Customer                          Backend
   │                                 │
   │── POST /auth/register ────────▶│  creates User(role=CUSTOMER)
   │◀── 201 {accessToken, ────────  │
   │      refreshToken}             │
   │                                 │
   │  (later) POST /auth/login ────▶│  verifies password
   │◀── 200 {accessToken, ────────  │
   │      refreshToken}             │
   │                                 │
   │  access token expires (15m)    │
   │── POST /auth/refresh ─────────▶│  rotates refresh token
   │◀── 200 {accessToken, ────────  │
   │      refreshToken}             │
```

### `POST /auth/register`
Rate limit: 5/min per IP.

Request:
```json
{
  "phone": "02099887766",
  "email": "somchai@example.com",
  "password": "Passw0rd!"
}
```
`email` is optional — omit it entirely if the customer doesn't have one.

Response `201`:
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

Errors:
- `400` — invalid phone format / password too short (`class-validator` messages)
- `403` — `{ "message": "Phone already registered" }`

### `POST /auth/login`
Rate limit: 5/min per IP.

Request:
```json
{ "phone": "+85620998877666", "password": "Passw0rd!" }
```
Response `200`: same shape as register.
Error `401`: `{ "message": "Invalid credentials" }`

### `POST /auth/refresh`
Request:
```json
{ "refreshToken": "eyJhbGciOiJIUzI1NiIs..." }
```
Response `200`: new `{ accessToken, refreshToken }` pair. The old refresh token is deleted from Redis (single-use, rotating).
Error `401`: `{ "message": "Refresh token expired or already used" }` — also fires if a token is replayed (already consumed).

### `POST /auth/logout`
Request: `{ "refreshToken": "..." }`
Response: `204 No Content`. Deletes the session from Redis.

---

## 2. OTP login (alternative to password)

Used for passwordless login/verification. Same phone-normalization as above.

```
Customer                          Backend                    SMS Gateway
   │── POST /auth/otp/request ─────▶│                              │
   │                                │── send code ───────────────▶│ (or dev-log if unset)
   │◀── 200 {message} ──────────── │                              │
   │                                │                              │
   │── POST /auth/otp/verify ──────▶│  checks Redis-stored code    │
   │◀── 200 {accessToken, ──────── │                               │
   │      refreshToken}            │
```

### `POST /auth/otp/request`
Rate limit: 3/min per IP.
Request: `{ "phone": "02099887766" }`
Response `200` (always, to avoid leaking which numbers are registered):
```json
{ "message": "If that phone number is registered, a code has been sent." }
```
In dev (no `SMS_GATEWAY_URL` configured), the code is written to the server log instead of actually being sent.

### `POST /auth/otp/verify`
Rate limit: 5/min per IP.
Request:
```json
{ "phone": "02099887766", "otp": "663940" }
```
Response `200`: `{ accessToken, refreshToken }`
Error `401`: `{ "message": "Invalid or expired code" }` — also returned after 5 wrong attempts (temporary lock).

---

## 3. Browsing branches & services (public, no auth)

Customer picks a branch and sees what services/prices it offers before placing an order.

### `GET /branches`
Response `200`:
```json
[
  { "id": "b1...", "name": "Vientiane Central", "createdAt": "2026-01-01T00:00:00.000Z" }
]
```

### `GET /branches/:id`
Response `200`: single branch object (same shape), or `404` if not found.

### `GET /branches/:id/services`
Response `200`:
```json
[
  {
    "id": "s1...",
    "branchId": "b1...",
    "name": "Wash & Fold",
    "unit": "PER_KG",
    "price": "15000.00",
    "estMinutes": 180,
    "createdAt": "2026-01-01T00:00:00.000Z"
  }
]
```

---

## 4. Placing and tracking an order (core flow)

```
Customer                Backend                  Redis Pub/Sub          Staff (WebSocket)
   │                        │                            │                     │
   │── POST /orders ───────▶│  computes price server-side │                     │
   │◀── 201 {order} ─────── │  status=WAITING_FOR_STAFF   │                     │
   │                        │                              │                     │
   │                        │◀── PATCH .../status ────────────────────────────  │  staff accepts
   │                        │   status=ORDER_ACCEPTED      │                     │
   │                        │── publish order.status_changed ──▶│                │
   │◀═══ WS event ════════════════════════════════════════│════════════════════▶│  both notified
   │                        │                              │                     │
   │                        │◀── PATCH .../status (PROCESSING, READY, COMPLETED) ─│  repeats per step
   │◀═══ WS event each step ═══════════════════════════════│════════════════════▶│
```

Order lifecycle (enforced by `assertValidTransition`, illegal transitions → `400`):

```
WAITING_FOR_STAFF ──▶ ORDER_ACCEPTED ──▶ PROCESSING ──▶ READY ──▶ COMPLETED
        │                    │
        └──────────▶ CANCELLED ◀──────────┘
```
`PROCESSING`, `READY`, and `COMPLETED` cannot be cancelled — only `WAITING_FOR_STAFF` and `ORDER_ACCEPTED` can.

### `POST /orders` — create an order
Auth: any role. Rate limit: 20/min per IP. Supports `Idempotency-Key` header (optional) — sending the same key + same user twice returns the identical order both times instead of creating a duplicate.

Request (customer creating their own order):
```json
{
  "branchId": "b1...",
  "items": [
    { "serviceId": "s1...", "quantityOrWeight": 3.5 }
  ],
  "note": "Extra softener please"
}
```
If `STAFF`/`ADMIN` create the order on a walk-in customer's behalf, `customerId` is required in the body instead of being inferred from the token.

Response `201`:
```json
{
  "id": "o1...",
  "orderNumber": "LDY-000042",
  "customerId": "u1...",
  "branchId": "b1...",
  "assignedStaffId": null,
  "status": "WAITING_FOR_STAFF",
  "itemCount": 1,
  "note": "Extra softener please",
  "totalAmount": "52500.00",
  "paymentStatus": "UNPAID",
  "markedPaidById": null,
  "paidAt": null,
  "createdAt": "2026-09-13T10:00:00.000Z",
  "updatedAt": "2026-09-13T10:00:00.000Z",
  "items": [
    { "id": "i1...", "orderId": "o1...", "serviceId": "s1...", "quantityOrWeight": "3.50", "subtotal": "52500.00" }
  ]
}
```
Errors: `400` if a service doesn't belong to the given branch, or `customerId` missing for a staff-created order.

### `GET /orders` — list orders
Auth: any role. Scope depends on role — `CUSTOMER` sees only their own orders, `STAFF` sees only their branch's orders, `ADMIN` sees all.
Response `200`: array of order objects (same shape as above, without `items`).

### `GET /orders/:id` — order detail
Response `200`: single order with `items`. `403` if a customer requests someone else's order, or staff request an order from another branch. `404` if not found.

### `GET /orders/:id/history` — status audit trail
Response `200`:
```json
[
  { "id": "e1...", "orderId": "o1...", "status": "WAITING_FOR_STAFF", "changedById": "u1...", "note": null, "createdAt": "2026-09-13T10:00:00.000Z" },
  { "id": "e2...", "orderId": "o1...", "status": "ORDER_ACCEPTED", "changedById": "staff1...", "note": null, "createdAt": "2026-09-13T10:05:00.000Z" }
]
```

### `PATCH /orders/:id/status` — advance the order
Auth: `STAFF` or `ADMIN` only.
Request:
```json
{ "status": "PROCESSING", "note": "started wash cycle" }
```
Response `200`: updated order object. First transition into `ORDER_ACCEPTED` auto-assigns `assignedStaffId` to the acting staff member if not already set.
Errors: `400` illegal transition (e.g. `WAITING_FOR_STAFF → COMPLETED`), `403` wrong branch, `404` not found.
Side effect: publishes to the `order.status_changed` Redis channel → broadcast over WebSocket to the customer and that branch's staff room; also enqueues a push/SMS notification job.

### `PATCH /orders/:id/payment` — mark as paid
Auth: `STAFF` or `ADMIN` only. No request body.
Response `200`: order with `paymentStatus: "PAID"`, `markedPaidById`, `paidAt` set.
Error `400`: `{ "message": "Order is already marked as paid" }`

### `POST /orders/:id/cancel`
Auth: any role, but a `CUSTOMER` can only cancel their own order.
Response `200`: order with `status: "CANCELLED"`. Internally calls the same status-transition logic as `PATCH .../status`, so it's also blocked once the order reaches `PROCESSING`.

---

## 5. Real-time updates (WebSocket)

Namespace: `/realtime`. Connect with the JWT access token:

```js
io('https://api.example.com/realtime', {
  auth: { token: accessToken }
});
```
(also accepts `Authorization: Bearer <token>` header as a fallback)

On connect, the socket is auto-joined to:
- `customer:<userId>` — always, for the connecting user
- `branch:<branchId>:staff` — only if the connecting user is `STAFF`/`ADMIN` with a branch

Event received (both rooms get it, whichever applies):
```json
// event name: "order.status_changed"
{
  "orderId": "o1...",
  "status": "PROCESSING",
  "paymentStatus": "UNPAID",
  "customerId": "u1...",
  "branchId": "b1..."
}
```
No other client → server events are defined; this gateway is broadcast-only from the server.

---

## 6. Current user / role check

### `GET /users/me`
Auth: any role.
Response `200`: `{ "userId": "u1...", "role": "CUSTOMER" }` (decoded straight from the JWT, no DB round-trip).

### `GET /users/staff-only`
Auth: `STAFF` or `ADMIN` only. Demonstrates role gating — `403` for `CUSTOMER`.

---

## 7. Operational endpoints

### `GET /health`
No auth. Checks DB (2s timeout), Redis, disk usage.
Response `200` (all healthy) or `503` (one or more `down`):
```json
{
  "status": "ok",
  "info": { "database": { "status": "up" }, "redis": { "status": "up" }, "disk": { "status": "up" } },
  "error": {},
  "details": { "database": { "status": "up" }, "redis": { "status": "up" }, "disk": { "status": "up" } }
}
```

### `GET /metrics`
No auth. Prometheus scrape endpoint (histograms, `realtime_socket_connections` gauge, default Node process metrics).

### `GET /admin/queues`
Bull Board dashboard for the `notifications` and `cache-warm` BullMQ queues. **Not authenticated — dev-only, do not expose publicly as-is.**

---

## Not yet implemented (known gaps)

- **Forgot/reset password** — no endpoint exists yet. See conversation notes: recommended interim approach is a staff/admin-assisted reset, since no SMS gateway is configured for a self-service flow.
- **`SMS_GATEWAY_URL` / `PUSH_PROVIDER_URL`** — unset in this environment, so OTP codes and push notifications degrade to dev-log output rather than actually reaching a phone.
- e2e/spec tests — intentionally deferred.
- `docker-compose.yml` / `Dockerfile`, `.env.example` — not yet created.
