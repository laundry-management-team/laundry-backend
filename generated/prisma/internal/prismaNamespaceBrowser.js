"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.OrderNumberCounterScalarFieldEnum = exports.OrderStatusEventScalarFieldEnum = exports.OrderItemScalarFieldEnum = exports.OrderScalarFieldEnum = exports.ServiceScalarFieldEnum = exports.BranchScalarFieldEnum = exports.DeviceTokenScalarFieldEnum = exports.AddressScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Address: 'Address',
    DeviceToken: 'DeviceToken',
    Branch: 'Branch',
    Service: 'Service',
    Order: 'Order',
    OrderItem: 'OrderItem',
    OrderStatusEvent: 'OrderStatusEvent',
    OrderNumberCounter: 'OrderNumberCounter'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    phone: 'phone',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    branchId: 'branchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AddressScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    label: 'label',
    line1: 'line1',
    lat: 'lat',
    lng: 'lng',
    createdAt: 'createdAt'
};
exports.DeviceTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    token: 'token',
    platform: 'platform',
    createdAt: 'createdAt'
};
exports.BranchScalarFieldEnum = {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
};
exports.ServiceScalarFieldEnum = {
    id: 'id',
    branchId: 'branchId',
    name: 'name',
    unit: 'unit',
    price: 'price',
    estMinutes: 'estMinutes',
    createdAt: 'createdAt'
};
exports.OrderScalarFieldEnum = {
    id: 'id',
    orderNumber: 'orderNumber',
    customerId: 'customerId',
    branchId: 'branchId',
    assignedStaffId: 'assignedStaffId',
    status: 'status',
    itemCount: 'itemCount',
    note: 'note',
    totalAmount: 'totalAmount',
    paymentStatus: 'paymentStatus',
    markedPaidById: 'markedPaidById',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderItemScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    serviceId: 'serviceId',
    quantityOrWeight: 'quantityOrWeight',
    subtotal: 'subtotal'
};
exports.OrderStatusEventScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    status: 'status',
    changedById: 'changedById',
    note: 'note',
    createdAt: 'createdAt'
};
exports.OrderNumberCounterScalarFieldEnum = {
    id: 'id',
    current: 'current'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map