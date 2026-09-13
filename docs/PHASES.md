# ແຜນຈັດຕັ້ງປະຕິບັດ — Laundry Tracking Backend

> ອີງໃສ່ [ARCHITECTURE.lo.md](./ARCHITECTURE.lo.md) §10 · ອະທິບາຍລາຍລະອຽດແຕ່ລະ Phase ກ່ອນເລີ່ມຂຽນ code

ໂຄງການນີ້ແບ່ງອອກເປັນ **8 Phase (00–07)**. ແຕ່ລະ Phase ຖືກຈັດລຳດັບໃຫ້ຈົບແລ້ວ "ໃຊ້ງານໄດ້ຈິງ" ໜຶ່ງຢ່າງສະເໝີ — ບໍ່ມີ Phase ໃດຄ້າງເປັນພຽງ abstraction ລໍຖ້າ Phase ຕໍ່ໄປຈຶ່ງຈະໃຊ້ໄດ້. ລຳດັບແມ່ນສຳຄັນ: Phase 02 (ໂດເມນຫຼັກ) ຕ້ອງສຳເລັດກ່ອນ ຈຶ່ງຈະຕໍ່ Phase 03 (Realtime) ໄດ້, ເພາະ Realtime ອອກອາການ broadcast ຈາກເຫດການທີ່ Phase 02 ສ້າງໄວ້.

**ໄລຍະເວລາລວມໂດຍປະມານ:** 4–6 ອາທິດ ສຳລັບ Phase 00–06 (MVP ພ້ອມ production), Phase 07 ແມ່ນວຽກຕໍ່ເນື່ອງຫຼັງເປີດໃຊ້ງານຈິງ. ຕົວເລກນີ້ອີງໃສ່ນັກພັດທະນາ 1 ຄົນ, ເຮັດວຽກແບບເຕັມເວລາ — ໃຫ້ປັບຕາມກຳລັງທີມແທ້ຈິງ.

## ພາບລວມ Phase

| Phase | ຫົວຂໍ້ | ໄລຍະເວລາ | ຂຶ້ນກັບ |
|---|---|---|---|
| 00 | ພື້ນຖານ | 2–3 ມື້ | — |
| 01 | ຕົວຕົນ (Identity) | 3–4 ມື້ | 00 |
| 02 | ໂດເມນຫຼັກ | 5–7 ມື້ | 01 |
| 03 | Realtime | 3–4 ມື້ | 02 |
| 04 | ວຽກແບບ Async | 2–3 ມື້ | 02 |
| 05 | ສະຖານະການຈ່າຍເງິນ | 1 ມື້ | 02 |
| 06 | ການສັງເກດການ | 2–3 ມື້ | 00 (ດຳເນີນຂະໜານໄດ້) |
| 07 | ເສີມຄວາມແຂງແຮງ ແລະ ຂະຫຍາຍ | 3–5 ມື້ ຫຼັງຈາກນັ້ນຕໍ່ເນື່ອງ | 00–06 ທັງໝົດ |

---

## Phase 00 — ພື້ນຖານ

**ເປົ້າໝາຍ:** ໂຄງການແລ່ນໄດ້ຢູ່ເຄື່ອງ local, ຕໍ່ກັບ PostgreSQL ແທ້ (ບໍ່ແມ່ນ sqlite), ມີ Redis ພ້ອມໃຊ້, ແລະ CI ກວດສອບພື້ນຖານແລ້ວ.

**ວຽກ:**
- [ ] ປ່ຽນ `prisma.config.ts` / schema ຈາກ `@prisma/adapter-better-sqlite3` ເປັນ `@prisma/adapter-pg`, `provider = "postgresql"`
- [ ] ຂຽນ `docker-compose.yml` — service `postgres` (ໃຊ້ tag ເວີຊັນຄົງທີ່) ແລະ `redis`
- [ ] ຕັ້ງ env validation ດ້ວຍ `zod` (ຫຼື `class-validator`) ໃຫ້ app ບໍ່ start ຖ້າ `DATABASE_URL` / `REDIS_URL` ຂາດ ຫຼື ຜິດຮູບແບບ
- [ ] ຢືນຢັນ `.env.example` ມີຄີທັງໝົດທີ່ໂຄງການຕ້ອງການ (ບໍ່ໃສ່ຄ່າແທ້)
- [ ] ຕັ້ງ ESLint/Prettier ໃຫ້ແລ່ນຜ່ານ CI (ມີພື້ນຖານແລ້ວໃນ scaffold, ພຽງແຕ່ຢືນຢັນ)
- [ ] ຕັ້ງ GitHub Actions ຂັ້ນຕົ້ນ: install → lint → build → test

**ຜົນສົ່ງມອບ:** `npm run start:dev` ຕໍ່ PostgreSQL ຈິງຜ່ານ Docker Compose ໄດ້; `prisma migrate dev` ແລ່ນຜ່ານໂດຍບໍ່ມີ error

**ເງື່ອນໄຂຈົບ Phase:** CI ສີຂຽວຢູ່ branch ຫຼັກ; ນັກພັດທະນາຄົນອື່ນ clone ແລ້ວ `docker compose up` + `npm run start:dev` ໃຊ້ໄດ້ພາຍໃນ 10 ນາທີ

---

## Phase 01 — ຕົວຕົນ (Identity)

**ເປົ້າໝາຍ:** ລູກຄ້າ ແລະ ພະນັກງານ login ໄດ້, ມີ role ແຍກ, ແລະ endpoint ຖືກປ້ອງກັນຕາມ role ແລ້ວ

**ວຽກ:**
- [ ] Schema: `User`, `DeviceToken` (ອີງ ARCHITECTURE.lo.md §5)
- [ ] `AuthModule`: `POST /auth/login`, `POST /auth/refresh`, `POST /auth/logout`
- [ ] Password hash ດ້ວຍ `argon2`
- [ ] JWT access token (~15 ນາທີ) + refresh token ໝູນວຽນເກັບໃນ Redis (`session:refresh:{jti}`)
- [ ] `RolesGuard` + decorator `@Roles()` — ທົດສອບກັບ 3 role: CUSTOMER, STAFF, ADMIN
- [ ] `GET /users?role=` — ADMIN ເທົ່ານັ້ນ, ລາຍຊື່ CUSTOMER ຫຼື STAFF (ອ່ານຢ່າງດຽວ, ໃຊ້ໂດຍ Owner Web Dashboard)
- [ ] (ທາງເລືອກ) `POST /auth/otp/request` + `POST /auth/otp/verify` ຖ້າຕ້ອງການ login ດ້ວຍເບີໂທ
- [ ] Unit test: guard ປະຕິເສດ role ຜິດ, refresh token ໝົດອາຍຸແລ້ວໃຊ້ບໍ່ໄດ້

**ຜົນສົ່ງມອບ:** ລູກຄ້າ 1 ຄົນ ແລະ ພະນັກງານ 1 ຄົນ login ຜ່ານ Postman/Swagger ໄດ້, ໄດ້ token ຄົນລະ role, ເອີ້ນ endpoint ທີ່ຈຳກັດ role ໄດ້ຖືກຕ້ອງ

**ເງື່ອນໄຂຈົບ Phase:** e2e test ຄອບຄຸມ login → ໃຊ້ token → refresh → logout → token ເກົ່າໃຊ້ບໍ່ໄດ້ອີກ

---

## Phase 02 — ໂດເມນຫຼັກ

**ເປົ້າໝາຍ:** ສ້າງ ແລະ ຕິດຕາມຄໍາສັ່ງຊື້ໄດ້ຄົບວົງຈອນຜ່ານ REST ລ້ວນໆ (ຍັງບໍ່ມີ realtime) — Phase ນີ້ໃຫຍ່ທີ່ສຸດເພາະເປັນແກ່ນຂອງທຸລະກິດ

**ວຽກ:**
- [ ] Schema: `Branch`, `Service`, `Order`, `OrderItem`, `OrderStatusEvent`
- [ ] `BranchesModule` + `ServicesModule`: `GET /branches`, `GET /branches/:id/services`, cache-aside ດ້ວຍ Redis (TTL 5–15 ນາທີ)
- [ ] `OrdersModule`: `POST /orders`, `GET /orders`, `GET /orders/:id`
- [ ] ອອກແບບ ແລະ ຂຽນ **state machine** ຂອງສະຖານະ (`WAITING_FOR_STAFF → ORDER_ACCEPTED → PROCESSING → READY → COMPLETED`, ຫຼື CANCELLED) ເປັນ service ແຍກຕ່າງຫາກ ທີ່ endpoint ອື່ນເອີ້ນໃຊ້ — Washing/Drying/Ironing/Folding ເປັນລາຍລະອຽດພາຍໃນ `PROCESSING` ເທົ່ານັ້ນ, ບໍ່ບັງຄັບໃຫ້ Staff ອັບເດດແຕ່ລະຂັ້ນຕອນຍ່ອຍ
- [ ] `PATCH /orders/:id/status` — ຂຽນພາຍໃນ transaction ດຽວ: ອັບເດດ `Order.status` + ເພີ່ມແຖວ `OrderStatusEvent`
- [ ] `GET /orders/:id/history` — ອ່ານຈາກ `OrderStatusEvent`
- [ ] `POST /orders/:id/cancel` — ອະນຸຍາດສະເພາະສະຖານະກ່ອນ PROCESSING
- [ ] Composite index: `Order(branch_id, status, created_at)`, `Order(customer_id, created_at desc)`, `OrderStatusEvent(order_id, created_at)`
- [ ] ອອກເລກ `order_number` ແບບບໍ່ຊ້ຳກັນ ພາຍໃຕ້ການຂຽນພ້ອມກັນ (distributed lock ຫຼື DB sequence)

**ຜົນສົ່ງມອບ:** ສ້າງຄໍາສັ່ງຊື້ໜຶ່ງລາຍການຜ່ານ API, ເລື່ອນສະຖານະທຸກຂັ້ນຈົນເຖິງ COMPLETED, ເບິ່ງ history ຄົບຖ້ວນຕາມລຳດັບເວລາ

**ເງື່ອນໄຂຈົບ Phase:** ພະຍາຍາມ `PATCH` ໄປສະຖານະທີ່ບໍ່ຢູ່ໃນລຳດັບ (ເຊັ່ນ WAITING_FOR_STAFF → COMPLETED ກົງໆ) ຕ້ອງຖືກປະຕິເສດດ້ວຍ error ທີ່ຈະແຈ້ງ

---

## Phase 03 — Realtime

**ເປົ້າໝາຍ:** ການປ່ຽນສະຖານະຈາກ Phase 02 ໄປເຖິງແອັບລູກຄ້າທັນທີ ໂດຍບໍ່ຕ້ອງ refresh — ຄຸນສົມບັດທີ່ໂຄງການນີ້ຖືກຕັ້ງຊື່ຕາມ

**ວຽກ:**
- [ ] `RealtimeModule`: Socket.IO gateway ຢູ່ namespace `/realtime`
- [ ] ຕິດຕັ້ງ `@socket.io/redis-adapter` — ຕໍ່ກັບ Redis instance ດຽວກັບສ່ວນອື່ນ
- [ ] Auth ຕອນ handshake: ກວດ JWT ດຽວກັນກັບ REST, ປະຕິເສດ connection ຖ້າ token ບໍ່ຖືກຕ້ອງ
- [ ] ຫຼັງ connect ສຳເລັດ: socket ເຂົ້າຮ່ວມ room `customer:{userId}` (ລູກຄ້າ) ຫຼື `branch:{branchId}:staff` (ພະນັກງານ)
- [ ] ໃນ `OrdersModule`: ຫຼັງຈາກ commit transaction ປ່ຽນສະຖານະ, `PUBLISH order.status_changed {orderId, status}` ໄປ Redis
- [ ] Gateway subscribe ຊ່ອງ pub/sub ນັ້ນ, `emit` ໄປ room ທີ່ກ່ຽວຂ້ອງ
- [ ] ທົດສອບຂ້າມ 2 instance ຂອງ NestJS (ແລ່ນ `PORT=3001` ແລະ `PORT=3002` ພ້ອມກັນ): request ເຂົ້າ instance ໜຶ່ງ, socket ຕໍ່ຢູ່ອີກ instance ໜຶ່ງ, ຕ້ອງໄດ້ event ຄືກັນ

**ຜົນສົ່ງມອບ:** ເປີດ 2 browser tab (ຈຳລອງລູກຄ້າ ແລະ ພະນັກງານ), ພະນັກງານກົດປ່ຽນສະຖານະ, tab ລູກຄ້າອັບເດດທັນທີໂດຍບໍ່ reload

**ເງື່ອນໄຂຈົບ Phase:** ການທົດສອບຂ້າມ instance (ຂໍ້ຂ້າງເທິງ) ຜ່ານ — ພິສູດວ່າ Redis adapter ເຮັດວຽກແທ້ ບໍ່ແມ່ນແຕ່ໃນ instance ດຽວ

---

## Phase 04 — ວຽກແບບ Async

**ເປົ້າໝາຍ:** ວຽກທີ່ບໍ່ຈຳເປັນຕ້ອງລໍຄຳຕອບໃນ request ດຽວກັນ (ແຈ້ງເຕືອນ, ໃບບິນ) ຍ້າຍອອກຈາກເສັ້ນທາງ API ຫຼັກ

**ວຽກ:**
- [ ] `NotificationsModule` + BullMQ queue `notifications`
- [ ] Producer: `OrdersModule` ເພີ່ມວຽກເຂົ້າຄິວທຸກຄັ້ງທີ່ສະຖານະປ່ຽນ (ຂະໜານກັບການ publish ໃນ Phase 03)
- [ ] Worker: ສົ່ງ push notification (device token ຈາກ `DeviceToken` table) ແລະ/ຫຼື SMS/email
- [ ] Queue ອຸ່ນ cache ຕາມກຳນົດເວລາ (cron ພາຍໃນ BullMQ) — ຕົວຢ່າງ: refresh `branch:{id}:services` cache ກ່ອນ TTL ໝົດ
- [ ] ຕັ້ງ retry policy + dead-letter ສຳລັບວຽກທີ່ລົ້ມເຫຼວຊ້ຳໆ (ເຊັ່ນ push provider down)
- [ ] Dashboard ເບິ່ງຄິວ (Bull Board ຫຼືທຽບເທົ່າ) ສຳລັບ debug ຕອນ dev

**ຜົນສົ່ງມອບ:** ຫຼັງອໍເດີປ່ຽນສະຖານະ, ລູກຄ້າໄດ້ຮັບ push notification ພາຍໃນ 2-3 ວິນາທີ ໂດຍ API response ບໍ່ຊ້າລົງ

**ເງື່ອນໄຂຈົບ Phase:** ປິດ notification provider ຊົ່ວຄາວ (ຈຳລອງ error) — ວຽກຕ້ອງ retry ຕາມນະໂຍບາຍ ບໍ່ແມ່ນຫາຍໄປງຽບໆ

---

## Phase 05 — ສະຖານະການຈ່າຍເງິນ (ຈ່າຍທີ່ຮ້ານ, ດ້ວຍມື)

**ເປົ້າໝາຍ:** ພະນັກງານໝາຍສະຖານະການຈ່າຍເງິນເປັນ PAID ໄດ້ຫຼັງລູກຄ້າຈ່າຍທີ່ຮ້ານ — ໂຄງການນີ້ບໍ່ມີ ແລະ ບໍ່ວາງແຜນເຊື່ອມ Payment Gateway, Bank API, ຫຼື QR Payment ໃດໆ (ບໍ່ແມ່ນແຕ່ໃນ Phase 2)

**ວຽກ:**
- [ ] Schema: `Payment` (amount, status UNPAID/PAID, marked_paid_by_id, paid_at) — ຫຼືໃຊ້ field `payment_status` ຢູ່ `Order` ໂດຍກົງ ຖ້າຕ້ອງການໂຄງສ້າງທີ່ງ່າຍກວ່າ
- [ ] `PaymentsModule`: `PATCH /orders/:id/payment` — ພະນັກງານກົດ Mark as Paid, ບັນທຶກ `marked_paid_by_id` + `paid_at` ພາຍໃນ transaction ດຽວກັບການອັບເດດ `Order.payment_status`
- [ ] ຈຳກັດສິດ endpoint ນີ້ສະເພາະ role STAFF/ADMIN (CUSTOMER ຫ້າມເອີ້ນ)
- [ ] ຫຼັງອັບເດດ, ສົ່ງ event ຜ່ານ pub/sub channel ດຽວກັບການປ່ຽນສະຖານະ order (ນຳໃຊ້ໂຄງສ້າງຈາກ Phase 03) ໃຫ້ Customer app ເຫັນທັນທີ

**ຜົນສົ່ງມອບ:** ພະນັກງານກົດ Mark as Paid ຜ່ານແອັບ, ລູກຄ້າເຫັນສະຖານະການຈ່າຍເງິນປ່ຽນເປັນ PAID ທັນທີ ໂດຍບໍ່ມີການເຊື່ອມຕໍ່ຜູ້ໃຫ້ບໍລິການອອນລາຍໃດໆ

**ເງື່ອນໄຂຈົບ Phase:** ພະຍາຍາມເອີ້ນ `PATCH /orders/:id/payment` ຈາກບັນຊີ role CUSTOMER — ຕ້ອງຖືກປະຕິເສດດ້ວຍ 403

---

## Phase 06 — ການສັງເກດການ

**ເປົ້າໝາຍ:** ຮູ້ວ່າລະບົບ health ດີບໍ່ ກ່ອນ user ຈະຮ້ອງທຸກ, ແລະ ມີຂໍ້ມູນພຽງພໍ debug ເມື່ອມີບັນຫາ

**ວຽກ:**
- [ ] `nestjs-pino` — log ແບບ JSON, correlation ID ຕໍ່ request
- [ ] `@nestjs/terminus` — `GET /health` ກວດ Postgres, Redis, disk
- [ ] `@willsoto/nestjs-prometheus` — `GET /metrics`: latency, ຄວາມເລິກຄິວ BullMQ, cache hit rate, ຈຳນວນ socket connection
- [ ] Sentry — ຈັບ exception ພ້ອມ request context (userId, orderId ຖ້າມີ)
- [ ] OpenTelemetry — trace ຂ້າມ API → Prisma → Redis (ຢ່າງໜ້ອຍ trace request ຫຼັກ)
- [ ] ຕັ້ງ dashboard ພື້ນຖານ (Grafana ຫຼືທຽບເທົ່າ) ສະແດງ metrics ຂ້າງເທິງ
- [ ] ຕັ້ງ alert ພື້ນຖານ: error rate ພຸ້ງຂຶ້ນ, ຄິວ BullMQ ຄ້າງ, DB connection pool ໃກ້ເຕັມ

**ຜົນສົ່ງມອບ:** `GET /health` ຕອບ 503 ຖ້າ Redis ດັບ; dashboard ສະແດງ traffic ຈິງໄດ້

**ເງື່ອນໄຂຈົບ Phase:** ຈຳລອງ Redis ດັບ — load balancer (ຫຼືລະບົບທຽບເທົ່າ) ດຶງ instance ອອກຈາກ rotation ອັດຕະໂນມັດຕາມ readiness probe

---

## Phase 07 — ເສີມຄວາມແຂງແຮງ ແລະ ຂະຫຍາຍ

**ເປົ້າໝາຍ:** ພ້ອມຮັບ traffic ຈິງ ແລະ ຂະຫຍາຍໄດ້ໂດຍບໍ່ຕ້ອງອອກແບບໃໝ່

**ວຽກ:**
- [ ] `@nestjs/throttler` ດ້ວຍ Redis store — ຈຳກັດອັດຕາຕໍ່ IP/user ຢູ່ endpoint ອ່ອນໄຫວ (login, ສ້າງອໍເດີ)
- [ ] Helmet + ຢືນຢັນ CORS allowlist ຕໍ່ environment
- [ ] Load test ດ້ວຍ k6 — ຈຳລອງ peak hour (ຕົວຢ່າງ: ຫຼາຍສາຂາອັບເດດສະຖານະພ້ອມກັນ)
- [ ] ຕັດສິນໃຈເລື່ອງ read replica ຂອງ PostgreSQL ຖ້າ dashboard query ເລີ່ມຊ້າ
- [ ] ຕັ້ງ horizontal autoscaling ຂອງ NestJS pool (ອີງ CPU/ຈຳນວນ socket connection)
- [ ] ທົບທວນ security checklist ໃນ ARCHITECTURE.lo.md §9 ໃຫ້ຄົບທຸກຂໍ້
- [ ] Dependency scan (`npm audit` ຫຼື Snyk) ເຂົ້າ CI

**ຜົນສົ່ງມອບ:** k6 report ສະແດງ latency p95 ຢູ່ໃນເປົ້າໝາຍພາຍໃຕ້ traffic ຈຳລອງ

**ເງື່ອນໄຂຈົບ Phase:** ນີ້ບໍ່ແມ່ນ Phase ທີ່ "ຈົບ" ແທ້ — ເປັນວຽກຕໍ່ເນື່ອງ, ທົບທວນຄືນທຸກຄັ້ງທີ່ traffic ຫຼືຂອບເຂດລະບົບປ່ຽນໄປຢ່າງມີນັຍສຳຄັນ

---

*ອ້າງອີງໂຄງສ້າງລະບົບເຕັມຢູ່ [ARCHITECTURE.lo.md](./ARCHITECTURE.lo.md) · ອັບເດດແຜນນີ້ໄດ້ຖ້າຂອບເຂດປ່ຽນ ກ່ອນເລີ່ມແຕ່ລະ Phase*
