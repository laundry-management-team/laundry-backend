import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';
const BRANCH_ID = __ENV.BRANCH_ID;
const SERVICE_ID = __ENV.SERVICE_ID;
const STAFF_PHONE = __ENV.STAFF_PHONE;
const STAFF_PASSWORD = __ENV.STAFF_PASSWORD || 'Passw0rd!';
const POOL_SIZE = Number(__ENV.POOL_SIZE || 50);

const statusLatency = new Trend('order_status_update_duration', true);

export const options = {
  scenarios: {
    peak_hour: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 20 },
        { duration: '1m', target: 50 },
        { duration: '30s', target: 0 },
      ],
    },
  },
  thresholds: {
    http_req_duration: ['p(95)<500'],
    order_status_update_duration: ['p(95)<300'],
  },
};

function login(phone, password) {
  const res = http.post(
    `${BASE_URL}/auth/login`,
    JSON.stringify({ phone, password }),
    { headers: { 'Content-Type': 'application/json' } },
  );
  return res.json('accessToken');
}

export function setup() {
  const staffToken = login(STAFF_PHONE, STAFF_PASSWORD);
  if (!staffToken) {
    throw new Error('Staff login failed — seed a STAFF-role account first');
  }

  const customerTokens = [];
  for (let i = 0; i < POOL_SIZE; i++) {
    const phone = `+8562099${String(Date.now() + i).slice(-7)}`;
    http.post(
      `${BASE_URL}/auth/register`,
      JSON.stringify({ phone, password: 'Passw0rd!' }),
      { headers: { 'Content-Type': 'application/json' } },
    );
    const token = login(phone, 'Passw0rd!');
    if (token) customerTokens.push(token);
  }

  return { staffToken, customerTokens };
}

export default function (data) {
  const custToken = data.customerTokens[__VU % data.customerTokens.length];

  const orderRes = http.post(
    `${BASE_URL}/orders`,
    JSON.stringify({
      branchId: BRANCH_ID,
      items: [{ serviceId: SERVICE_ID, quantityOrWeight: 1 }],
    }),
    {
      headers: {
        Authorization: `Bearer ${custToken}`,
        'Content-Type': 'application/json',
      },
    },
  );
  check(orderRes, { 'order created': (r) => r.status === 201 });
  const orderId = orderRes.json('id');
  if (!orderId) {
    // Without this, a throttled (429) VU loops back with no delay — since the
    // sleep below never runs on this path — turning one rate-limited request
    // into a tight-loop flood that drowns out the very thing being measured.
    sleep(1);
    return;
  }

  for (const status of ['ORDER_ACCEPTED', 'PROCESSING', 'READY', 'COMPLETED']) {
    const res = http.patch(
      `${BASE_URL}/orders/${orderId}/status`,
      JSON.stringify({ status }),
      {
        headers: {
          Authorization: `Bearer ${data.staffToken}`,
          'Content-Type': 'application/json',
        },
      },
    );
    statusLatency.add(res.timings.duration);
    check(res, { [`${status} accepted`]: (r) => r.status === 200 });
  }

  sleep(1);
}
