# ແຜນຈັດຕັ້ງປະຕິບັດ — Owner Web Dashboard

> ອີງໃສ່ [ARCHITECTURE.lo.md](./ARCHITECTURE.lo.md) §4 (API) ແລະ [PHASES.lo.md](./PHASES.lo.md) (Backend) — ເອກະສານນີ້ແຍກອອກຕ່າງຫາກເພາະ Dashboard ເປັນ frontend project ຄົນລະ codebase ກັບ Backend, ບໍ່ໄດ້ຢູ່ໃນ `PHASES.lo.md` ເຊິ່ງແມ່ນແຜນສະເພາະ Backend
>
> **ຂອບເຂດ:** Owner/Admin ເທົ່ານັ້ນ — ເບິ່ງ order, ລູກຄ້າ, ພະນັກງານ, ຂໍ້ມູນຮ້ານ, ລາຍງານພື້ນຖານ (ອ້າງອີງ PDF Requirement §2.3) — ບໍ່ແມ່ນ self-service ສ້າງ/ລຶບພະນັກງານ (ເບິ່ງໝາຍເຫດໃນ ARCHITECTURE.lo.md §4)

**ໄລຍະເວລາລວມ:** ~7 person-days
**ລາຄາລວມ:** 2,800 THB (ຢູ່ໃນລາຄາລວມ 18,500 THB ຂອງໂຄງການໃນໃບສະເໜີລາຄາຢູ່ແລ້ວ, ບໍ່ແມ່ນຄ່າໃຊ້ຈ່າຍເພີ່ມ — ຕາຕະລາງນີ້ພຽງແຕ່ແຈກແຈງລາຍລະອຽດ)
**ຂຶ້ນກັບ:** Backend Phase 01 (Identity) ຕ້ອງມີ `POST /auth/login` ແລະ `GET /users?role=` ພ້ອມ; Backend Phase 02 ຕ້ອງມີ `GET /orders`, `GET /orders/:id`, `GET /orders/:id/history` ພ້ອມ ກ່ອນ Dashboard ຈະຕໍ່ API ຈິງໄດ້

## ພາບລວມ Phase

| Phase | ຫົວຂໍ້ | ໄລຍະເວລາ | ລາຄາ (THB) | ຂຶ້ນກັບ |
|---|---|---|---|---|
| D00 | ພື້ນຖານ + Login | 1 ວັນ | 400 | Backend Phase 01 |
| D01 | Orders View | 2 ວັນ | 800 | Backend Phase 02 |
| D02 | Customers & Staff View | 2 ວັນ | 800 | Backend Phase 01/02 |
| D03 | ຂໍ້ມູນຮ້ານ + ລາຍງານພື້ນຖານ | 1 ວັນ | 400 | Backend Phase 02 |
| D04 | Polish + Deploy | 1 ວັນ | 400 | D00–D03 ຄົບ |
| **ລວມ** | | **7 ວັນ** | **2,800** | |

---

## Phase D00 — ພື້ນຖານ + Login

**ເປົ້າໝາຍ:** Admin login ເຂົ້າ Dashboard ໄດ້ຈິງ, ຕໍ່ກັບ Backend Auth ແລ້ວ, ມີ layout ພື້ນຖານ

**ວຽກ:**
- [ ] ຕັ້ງ project frontend (ແນະນຳ React + Vite ຫຼື framework ທີ່ຖະນັດ) — repo ແຍກຕ່າງຫາກຈາກ Backend
- [ ] ໜ້າ Login — ເອີ້ນ `POST /auth/login`, ເກັບ token ຢ່າງປອດໄພ (httpOnly cookie ຖ້າ Backend ຮອງຮັບ, ຫຼື in-memory + refresh flow)
- [ ] Route guard — redirect ໄປ login ຖ້າບໍ່ມີ token ຫຼື role ບໍ່ແມ່ນ ADMIN
- [ ] Layout ຫຼັກ (sidebar/topbar) ພື້ນຖານ, ບໍ່ເນັ້ນ design ລະອຽດ

**ຜົນສົ່ງມອບ:** Admin login ຜ່ານ Dashboard ໄດ້ຈິງ, ເຫັນ layout ເປົ່າຫຼັງ login

**ເງື່ອນໄຂຈົບ Phase:** ລອງ login ດ້ວຍບັນຊີ role STAFF ຫຼື CUSTOMER — ຕ້ອງຖືກປະຕິເສດບໍ່ໃຫ້ເຂົ້າ Dashboard

---

## Phase D01 — Orders View

**ເປົ້າໝາຍ:** Owner ເບິ່ງ order ທັງໝົດຂອງຮ້ານໄດ້ ພ້ອມສະຖານະ ແລະ ລາຍລະອຽດ

**ວຽກ:**
- [ ] ໜ້າ List Orders — ດຶງຈາກ `GET /orders`, ສະແດງ order_number, customer, status, payment_status, created_at
- [ ] ຄົ້ນຫາ/ກອງ ຕາມສະຖານະ, ຊື່ລູກຄ້າ, ເບີໂທ
- [ ] ໜ້າ Order Detail — ດຶງຈາກ `GET /orders/:id` + `GET /orders/:id/history` (ໄທມ໌ໄລນ໌)
- [ ] (optional, ບໍ່ບັງຄັບໃນ Phase 1 ຂອງ Dashboard) ຕໍ່ Socket.IO ໃຫ້ list ອັບເດດແບບ real-time — ຖ້າບໍ່ທັນເວລາ, manual refresh ພຽງພໍສຳລັບ MVP

**ຜົນສົ່ງມອບ:** Owner ເປີດ Dashboard ເຫັນ order ທັງໝົດ, ກົດເບິ່ງ detail + timeline ໄດ້ຈິງ

**ເງື່ອນໄຂຈົບ Phase:** ສ້າງ order ໃໝ່ຜ່ານ Mobile App ແລ້ວ list ໃນ Dashboard ສະແດງຂຶ້ນມາ (refresh ຫຼື real-time ກໍໄດ້)

---

## Phase D02 — Customers & Staff View

**ເປົ້າໝາຍ:** Owner ເບິ່ງລາຍຊື່ລູກຄ້າ ແລະ ພະນັກງານໄດ້ (ອ່ານຢ່າງດຽວ — ບໍ່ແມ່ນສ້າງ/ລຶບຜ່ານ UI ໃນ Phase 1)

**ວຽກ:**
- [ ] ໜ້າ List Customers — ດຶງຈາກ `GET /users?role=CUSTOMER`
- [ ] ໜ້າ List Staff — ດຶງຈາກ `GET /users?role=STAFF`
- [ ] ຈາກລາຍຊື່ລູກຄ້າ, ລິ້ງໄປໜ້າ Orders ທີ່ filter ຕາມລູກຄ້ານັ້ນ (ນຳໃຊ້ໜ້າຈາກ D01)

**ຜົນສົ່ງມອບ:** Owner ເບິ່ງລາຍຊື່ລູກຄ້າ/ພະນັກງານທັງໝົດ ແລະ ເບິ່ງປະຫວັດ order ຂອງລູກຄ້າແຕ່ລະຄົນໄດ້

**ເງື່ອນໄຂຈົບ Phase:** ລາຍຊື່ທີ່ສະແດງກົງກັບຈຳນວນຈິງໃນຖານຂໍ້ມູນ (ນັບກວດທຽບ)

> ໝາຍເຫດ: ຖ້າລູກຄ້າ (ຜູ້ວ່າຈ້າງ) ຕ້ອງການສ້າງ/ລຶບບັນຊີພະນັກງານເອງຜ່ານ Dashboard (ບໍ່ໃຫ້ຜູ້ພັດທະນາເປັນຜູ້ສ້າງໃຫ້), ນີ້ຄື scope ເພີ່ມນອກ D02 — ຕ້ອງເພີ່ມ `POST/DELETE /users` ຢູ່ Backend ກ່ອນ ແລະ ຄິດເປັນ Change Request ແຍກລາຄາ

---

## Phase D03 — ຂໍ້ມູນຮ້ານ + ລາຍງານພື້ນຖານ

**ເປົ້າໝາຍ:** Owner ເບິ່ງຂໍ້ມູນຮ້ານ ແລະ ຕົວເລກສະຫຼຸບພື້ນຖານ (ບໍ່ແມ່ນ Advanced Reports ຂອງ Phase 2)

**ວຽກ:**
- [ ] ໜ້າຂໍ້ມູນຮ້ານ — ຊື່ຮ້ານ, ເວລາເປີດ-ປິດ, ບັນຊີລາຄາບໍລິການ ດຶງຈາກ `GET /branches/:id/services`
- [ ] ລາຍງານພື້ນຖານ — ຈຳນວນ order ມື້ນີ້/ອາທິດນີ້, ຈຳນວນ UNPAID vs PAID (ນັບຈາກຂໍ້ມູນທີ່ມີຢູ່ແລ້ວ, ບໍ່ຕ້ອງສ້າງ reporting infrastructure ໃໝ່)

**ຜົນສົ່ງມອບ:** Owner ເຫັນສະຫຼຸບຕົວເລກພື້ນຖານຂອງຮ້ານໃນໜ້າດຽວ

**ເງື່ອນໄຂຈົບ Phase:** ຕົວເລກທີ່ສະແດງກົງກັບຂໍ້ມູນຈິງໃນຖານຂໍ້ມູນ (ນັບກວດທຽບມື)

---

## Phase D04 — Polish + Deploy

**ເປົ້າໝາຍ:** Dashboard responsive ໃຊ້ງານໄດ້ຈິງ ແລະ deploy ຂຶ້ນ production ຈິງ

**ວຽກ:**
- [ ] ທົດສອບ responsive ພື້ນຖານ (desktop + tablet — ບໍ່ເນັ້ນ mobile browser ເພາະມີ Mobile App ແຍກຢູ່ແລ້ວ)
- [ ] Deploy ຂຶ້ນ hosting — ແນະນຳ **Cloudflare Pages** (ຟຣີ, ຕໍ່ domain ດຽວກັບທີ່ໃຊ້ຢູ່ແລ້ວໄດ້ທັນທີ) ແທນທີ່ຈະລັນຢູ່ VPS ດຽວກັບ Backend ເພື່ອປະຢັດ resource ຂອງ VPS
- [ ] ຕັ້ງ subdomain ເຊັ່ນ `admin.[domain].com` ຊີ້ໄປ Dashboard, ແຍກຈາກ `api.[domain].com` ຂອງ Backend
- [ ] ຕັ້ງ environment variable ຂອງ production API URL

**ຜົນສົ່ງມອບ:** Owner ເຂົ້າໃຊ້ Dashboard ຜ່ານ URL ຈິງໄດ້ (ບໍ່ແມ່ນ localhost)

**ເງື່ອນໄຂຈົບ Phase:** ເປີດ URL ຈາກ browser ຄົນລະເຄື່ອງ (ບໍ່ແມ່ນເຄື່ອງ dev) ແລ້ວໃຊ້ງານໄດ້ປົກກະຕິ

---

*ອ້າງອີງ [ARCHITECTURE.lo.md](./ARCHITECTURE.lo.md) ສຳລັບ API ທີ່ Dashboard ນີ້ຕໍ່ໃຊ້ · ອັບເດດແຜນນີ້ໄດ້ຖ້າຂອບເຂດປ່ຽນ ກ່ອນເລີ່ມແຕ່ລະ Phase*
