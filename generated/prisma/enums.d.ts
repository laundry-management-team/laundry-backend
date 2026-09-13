export declare const Role: {
    readonly CUSTOMER: "CUSTOMER";
    readonly STAFF: "STAFF";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const DevicePlatform: {
    readonly IOS: "IOS";
    readonly ANDROID: "ANDROID";
};
export type DevicePlatform = (typeof DevicePlatform)[keyof typeof DevicePlatform];
export declare const PaymentStatus: {
    readonly UNPAID: "UNPAID";
    readonly PAID: "PAID";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const OrderStatus: {
    readonly WAITING_FOR_STAFF: "WAITING_FOR_STAFF";
    readonly ORDER_ACCEPTED: "ORDER_ACCEPTED";
    readonly PROCESSING: "PROCESSING";
    readonly READY: "READY";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const ServiceUnit: {
    readonly PER_KG: "PER_KG";
    readonly PER_ITEM: "PER_ITEM";
};
export type ServiceUnit = (typeof ServiceUnit)[keyof typeof ServiceUnit];
