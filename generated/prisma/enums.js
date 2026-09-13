"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUnit = exports.OrderStatus = exports.PaymentStatus = exports.DevicePlatform = exports.Role = void 0;
exports.Role = {
    CUSTOMER: 'CUSTOMER',
    STAFF: 'STAFF',
    ADMIN: 'ADMIN'
};
exports.DevicePlatform = {
    IOS: 'IOS',
    ANDROID: 'ANDROID'
};
exports.PaymentStatus = {
    UNPAID: 'UNPAID',
    PAID: 'PAID'
};
exports.OrderStatus = {
    WAITING_FOR_STAFF: 'WAITING_FOR_STAFF',
    ORDER_ACCEPTED: 'ORDER_ACCEPTED',
    PROCESSING: 'PROCESSING',
    READY: 'READY',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED'
};
exports.ServiceUnit = {
    PER_KG: 'PER_KG',
    PER_ITEM: 'PER_ITEM'
};
//# sourceMappingURL=enums.js.map