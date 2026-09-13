import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderAvgAggregateOutputType = {
    itemCount: number | null;
    totalAmount: runtime.Decimal | null;
};
export type OrderSumAggregateOutputType = {
    itemCount: number | null;
    totalAmount: runtime.Decimal | null;
};
export type OrderMinAggregateOutputType = {
    id: string | null;
    orderNumber: string | null;
    customerId: string | null;
    branchId: string | null;
    assignedStaffId: string | null;
    status: $Enums.OrderStatus | null;
    itemCount: number | null;
    note: string | null;
    totalAmount: runtime.Decimal | null;
    paymentStatus: $Enums.PaymentStatus | null;
    markedPaidById: string | null;
    paidAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderMaxAggregateOutputType = {
    id: string | null;
    orderNumber: string | null;
    customerId: string | null;
    branchId: string | null;
    assignedStaffId: string | null;
    status: $Enums.OrderStatus | null;
    itemCount: number | null;
    note: string | null;
    totalAmount: runtime.Decimal | null;
    paymentStatus: $Enums.PaymentStatus | null;
    markedPaidById: string | null;
    paidAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderCountAggregateOutputType = {
    id: number;
    orderNumber: number;
    customerId: number;
    branchId: number;
    assignedStaffId: number;
    status: number;
    itemCount: number;
    note: number;
    totalAmount: number;
    paymentStatus: number;
    markedPaidById: number;
    paidAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrderAvgAggregateInputType = {
    itemCount?: true;
    totalAmount?: true;
};
export type OrderSumAggregateInputType = {
    itemCount?: true;
    totalAmount?: true;
};
export type OrderMinAggregateInputType = {
    id?: true;
    orderNumber?: true;
    customerId?: true;
    branchId?: true;
    assignedStaffId?: true;
    status?: true;
    itemCount?: true;
    note?: true;
    totalAmount?: true;
    paymentStatus?: true;
    markedPaidById?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderMaxAggregateInputType = {
    id?: true;
    orderNumber?: true;
    customerId?: true;
    branchId?: true;
    assignedStaffId?: true;
    status?: true;
    itemCount?: true;
    note?: true;
    totalAmount?: true;
    paymentStatus?: true;
    markedPaidById?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderCountAggregateInputType = {
    id?: true;
    orderNumber?: true;
    customerId?: true;
    branchId?: true;
    assignedStaffId?: true;
    status?: true;
    itemCount?: true;
    note?: true;
    totalAmount?: true;
    paymentStatus?: true;
    markedPaidById?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderCountAggregateInputType;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type OrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithAggregationInput | Prisma.OrderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    id: string;
    orderNumber: string;
    customerId: string;
    branchId: string;
    assignedStaffId: string | null;
    status: $Enums.OrderStatus;
    itemCount: number;
    note: string | null;
    totalAmount: runtime.Decimal;
    paymentStatus: $Enums.PaymentStatus;
    markedPaidById: string | null;
    paidAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type OrderWhereInput = {
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    id?: Prisma.StringFilter<"Order"> | string;
    orderNumber?: Prisma.StringFilter<"Order"> | string;
    customerId?: Prisma.StringFilter<"Order"> | string;
    branchId?: Prisma.StringFilter<"Order"> | string;
    assignedStaffId?: Prisma.StringNullableFilter<"Order"> | string | null;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    itemCount?: Prisma.IntFilter<"Order"> | number;
    note?: Prisma.StringNullableFilter<"Order"> | string | null;
    totalAmount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus;
    markedPaidById?: Prisma.StringNullableFilter<"Order"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    customer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    assignedStaff?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    markedPaidBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    items?: Prisma.OrderItemListRelationFilter;
    statusEvents?: Prisma.OrderStatusEventListRelationFilter;
};
export type OrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    assignedStaffId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    itemCount?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    markedPaidById?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.UserOrderByWithRelationInput;
    branch?: Prisma.BranchOrderByWithRelationInput;
    assignedStaff?: Prisma.UserOrderByWithRelationInput;
    markedPaidBy?: Prisma.UserOrderByWithRelationInput;
    items?: Prisma.OrderItemOrderByRelationAggregateInput;
    statusEvents?: Prisma.OrderStatusEventOrderByRelationAggregateInput;
};
export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderNumber?: string;
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    customerId?: Prisma.StringFilter<"Order"> | string;
    branchId?: Prisma.StringFilter<"Order"> | string;
    assignedStaffId?: Prisma.StringNullableFilter<"Order"> | string | null;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    itemCount?: Prisma.IntFilter<"Order"> | number;
    note?: Prisma.StringNullableFilter<"Order"> | string | null;
    totalAmount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus;
    markedPaidById?: Prisma.StringNullableFilter<"Order"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    customer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    assignedStaff?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    markedPaidBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    items?: Prisma.OrderItemListRelationFilter;
    statusEvents?: Prisma.OrderStatusEventListRelationFilter;
}, "id" | "orderNumber">;
export type OrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    assignedStaffId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    itemCount?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    markedPaidById?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrderCountOrderByAggregateInput;
    _avg?: Prisma.OrderAvgOrderByAggregateInput;
    _max?: Prisma.OrderMaxOrderByAggregateInput;
    _min?: Prisma.OrderMinOrderByAggregateInput;
    _sum?: Prisma.OrderSumOrderByAggregateInput;
};
export type OrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    orderNumber?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    branchId?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    assignedStaffId?: Prisma.StringNullableWithAggregatesFilter<"Order"> | string | null;
    status?: Prisma.EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus;
    itemCount?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    note?: Prisma.StringNullableWithAggregatesFilter<"Order"> | string | null;
    totalAmount?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusWithAggregatesFilter<"Order"> | $Enums.PaymentStatus;
    markedPaidById?: Prisma.StringNullableWithAggregatesFilter<"Order"> | string | null;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
};
export type OrderCreateInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.UserCreateNestedOneWithoutOrdersAsCustomerInput;
    branch: Prisma.BranchCreateNestedOneWithoutOrdersInput;
    assignedStaff?: Prisma.UserCreateNestedOneWithoutOrdersAsStaffInput;
    markedPaidBy?: Prisma.UserCreateNestedOneWithoutOrdersMarkedPaidInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    statusEvents?: Prisma.OrderStatusEventCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    branchId: string;
    assignedStaffId?: string | null;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    markedPaidById?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    statusEvents?: Prisma.OrderStatusEventUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.UserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutOrdersNestedInput;
    assignedStaff?: Prisma.UserUpdateOneWithoutOrdersAsStaffNestedInput;
    markedPaidBy?: Prisma.UserUpdateOneWithoutOrdersMarkedPaidNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    statusEvents?: Prisma.OrderStatusEventUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedStaffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    markedPaidById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    statusEvents?: Prisma.OrderStatusEventUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateManyInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    branchId: string;
    assignedStaffId?: string | null;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    markedPaidById?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedStaffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    markedPaidById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderListRelationFilter = {
    every?: Prisma.OrderWhereInput;
    some?: Prisma.OrderWhereInput;
    none?: Prisma.OrderWhereInput;
};
export type OrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    assignedStaffId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    itemCount?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    markedPaidById?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderAvgOrderByAggregateInput = {
    itemCount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
};
export type OrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    assignedStaffId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    itemCount?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    markedPaidById?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    assignedStaffId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    itemCount?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    markedPaidById?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderSumOrderByAggregateInput = {
    itemCount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
};
export type OrderScalarRelationFilter = {
    is?: Prisma.OrderWhereInput;
    isNot?: Prisma.OrderWhereInput;
};
export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderCreateNestedManyWithoutAssignedStaffInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutAssignedStaffInput, Prisma.OrderUncheckedCreateWithoutAssignedStaffInput> | Prisma.OrderCreateWithoutAssignedStaffInput[] | Prisma.OrderUncheckedCreateWithoutAssignedStaffInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutAssignedStaffInput | Prisma.OrderCreateOrConnectWithoutAssignedStaffInput[];
    createMany?: Prisma.OrderCreateManyAssignedStaffInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderCreateNestedManyWithoutMarkedPaidByInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutMarkedPaidByInput, Prisma.OrderUncheckedCreateWithoutMarkedPaidByInput> | Prisma.OrderCreateWithoutMarkedPaidByInput[] | Prisma.OrderUncheckedCreateWithoutMarkedPaidByInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutMarkedPaidByInput | Prisma.OrderCreateOrConnectWithoutMarkedPaidByInput[];
    createMany?: Prisma.OrderCreateManyMarkedPaidByInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutAssignedStaffInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutAssignedStaffInput, Prisma.OrderUncheckedCreateWithoutAssignedStaffInput> | Prisma.OrderCreateWithoutAssignedStaffInput[] | Prisma.OrderUncheckedCreateWithoutAssignedStaffInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutAssignedStaffInput | Prisma.OrderCreateOrConnectWithoutAssignedStaffInput[];
    createMany?: Prisma.OrderCreateManyAssignedStaffInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutMarkedPaidByInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutMarkedPaidByInput, Prisma.OrderUncheckedCreateWithoutMarkedPaidByInput> | Prisma.OrderCreateWithoutMarkedPaidByInput[] | Prisma.OrderUncheckedCreateWithoutMarkedPaidByInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutMarkedPaidByInput | Prisma.OrderCreateOrConnectWithoutMarkedPaidByInput[];
    createMany?: Prisma.OrderCreateManyMarkedPaidByInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutCustomerInput | Prisma.OrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUpdateManyWithoutAssignedStaffNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutAssignedStaffInput, Prisma.OrderUncheckedCreateWithoutAssignedStaffInput> | Prisma.OrderCreateWithoutAssignedStaffInput[] | Prisma.OrderUncheckedCreateWithoutAssignedStaffInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutAssignedStaffInput | Prisma.OrderCreateOrConnectWithoutAssignedStaffInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutAssignedStaffInput | Prisma.OrderUpsertWithWhereUniqueWithoutAssignedStaffInput[];
    createMany?: Prisma.OrderCreateManyAssignedStaffInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutAssignedStaffInput | Prisma.OrderUpdateWithWhereUniqueWithoutAssignedStaffInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutAssignedStaffInput | Prisma.OrderUpdateManyWithWhereWithoutAssignedStaffInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUpdateManyWithoutMarkedPaidByNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutMarkedPaidByInput, Prisma.OrderUncheckedCreateWithoutMarkedPaidByInput> | Prisma.OrderCreateWithoutMarkedPaidByInput[] | Prisma.OrderUncheckedCreateWithoutMarkedPaidByInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutMarkedPaidByInput | Prisma.OrderCreateOrConnectWithoutMarkedPaidByInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutMarkedPaidByInput | Prisma.OrderUpsertWithWhereUniqueWithoutMarkedPaidByInput[];
    createMany?: Prisma.OrderCreateManyMarkedPaidByInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutMarkedPaidByInput | Prisma.OrderUpdateWithWhereUniqueWithoutMarkedPaidByInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutMarkedPaidByInput | Prisma.OrderUpdateManyWithWhereWithoutMarkedPaidByInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutCustomerInput | Prisma.OrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutAssignedStaffNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutAssignedStaffInput, Prisma.OrderUncheckedCreateWithoutAssignedStaffInput> | Prisma.OrderCreateWithoutAssignedStaffInput[] | Prisma.OrderUncheckedCreateWithoutAssignedStaffInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutAssignedStaffInput | Prisma.OrderCreateOrConnectWithoutAssignedStaffInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutAssignedStaffInput | Prisma.OrderUpsertWithWhereUniqueWithoutAssignedStaffInput[];
    createMany?: Prisma.OrderCreateManyAssignedStaffInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutAssignedStaffInput | Prisma.OrderUpdateWithWhereUniqueWithoutAssignedStaffInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutAssignedStaffInput | Prisma.OrderUpdateManyWithWhereWithoutAssignedStaffInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutMarkedPaidByNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutMarkedPaidByInput, Prisma.OrderUncheckedCreateWithoutMarkedPaidByInput> | Prisma.OrderCreateWithoutMarkedPaidByInput[] | Prisma.OrderUncheckedCreateWithoutMarkedPaidByInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutMarkedPaidByInput | Prisma.OrderCreateOrConnectWithoutMarkedPaidByInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutMarkedPaidByInput | Prisma.OrderUpsertWithWhereUniqueWithoutMarkedPaidByInput[];
    createMany?: Prisma.OrderCreateManyMarkedPaidByInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutMarkedPaidByInput | Prisma.OrderUpdateWithWhereUniqueWithoutMarkedPaidByInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutMarkedPaidByInput | Prisma.OrderUpdateManyWithWhereWithoutMarkedPaidByInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutBranchInput, Prisma.OrderUncheckedCreateWithoutBranchInput> | Prisma.OrderCreateWithoutBranchInput[] | Prisma.OrderUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutBranchInput | Prisma.OrderCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.OrderCreateManyBranchInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutBranchInput, Prisma.OrderUncheckedCreateWithoutBranchInput> | Prisma.OrderCreateWithoutBranchInput[] | Prisma.OrderUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutBranchInput | Prisma.OrderCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.OrderCreateManyBranchInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutBranchInput, Prisma.OrderUncheckedCreateWithoutBranchInput> | Prisma.OrderCreateWithoutBranchInput[] | Prisma.OrderUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutBranchInput | Prisma.OrderCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutBranchInput | Prisma.OrderUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.OrderCreateManyBranchInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutBranchInput | Prisma.OrderUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutBranchInput | Prisma.OrderUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutBranchInput, Prisma.OrderUncheckedCreateWithoutBranchInput> | Prisma.OrderCreateWithoutBranchInput[] | Prisma.OrderUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutBranchInput | Prisma.OrderCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutBranchInput | Prisma.OrderUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.OrderCreateManyBranchInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutBranchInput | Prisma.OrderUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutBranchInput | Prisma.OrderUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus;
};
export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type OrderCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutItemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.OrderUpsertWithoutItemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutItemsInput, Prisma.OrderUpdateWithoutItemsInput>, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
};
export type OrderCreateNestedOneWithoutStatusEventsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutStatusEventsInput, Prisma.OrderUncheckedCreateWithoutStatusEventsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutStatusEventsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutStatusEventsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutStatusEventsInput, Prisma.OrderUncheckedCreateWithoutStatusEventsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutStatusEventsInput;
    upsert?: Prisma.OrderUpsertWithoutStatusEventsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutStatusEventsInput, Prisma.OrderUpdateWithoutStatusEventsInput>, Prisma.OrderUncheckedUpdateWithoutStatusEventsInput>;
};
export type OrderCreateWithoutCustomerInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch: Prisma.BranchCreateNestedOneWithoutOrdersInput;
    assignedStaff?: Prisma.UserCreateNestedOneWithoutOrdersAsStaffInput;
    markedPaidBy?: Prisma.UserCreateNestedOneWithoutOrdersMarkedPaidInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    statusEvents?: Prisma.OrderStatusEventCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: string;
    orderNumber: string;
    branchId: string;
    assignedStaffId?: string | null;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    markedPaidById?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    statusEvents?: Prisma.OrderStatusEventUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutCustomerInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput>;
};
export type OrderCreateManyCustomerInputEnvelope = {
    data: Prisma.OrderCreateManyCustomerInput | Prisma.OrderCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type OrderCreateWithoutAssignedStaffInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.UserCreateNestedOneWithoutOrdersAsCustomerInput;
    branch: Prisma.BranchCreateNestedOneWithoutOrdersInput;
    markedPaidBy?: Prisma.UserCreateNestedOneWithoutOrdersMarkedPaidInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    statusEvents?: Prisma.OrderStatusEventCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutAssignedStaffInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    branchId: string;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    markedPaidById?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    statusEvents?: Prisma.OrderStatusEventUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutAssignedStaffInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutAssignedStaffInput, Prisma.OrderUncheckedCreateWithoutAssignedStaffInput>;
};
export type OrderCreateManyAssignedStaffInputEnvelope = {
    data: Prisma.OrderCreateManyAssignedStaffInput | Prisma.OrderCreateManyAssignedStaffInput[];
    skipDuplicates?: boolean;
};
export type OrderCreateWithoutMarkedPaidByInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.UserCreateNestedOneWithoutOrdersAsCustomerInput;
    branch: Prisma.BranchCreateNestedOneWithoutOrdersInput;
    assignedStaff?: Prisma.UserCreateNestedOneWithoutOrdersAsStaffInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    statusEvents?: Prisma.OrderStatusEventCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutMarkedPaidByInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    branchId: string;
    assignedStaffId?: string | null;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    statusEvents?: Prisma.OrderStatusEventUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutMarkedPaidByInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutMarkedPaidByInput, Prisma.OrderUncheckedCreateWithoutMarkedPaidByInput>;
};
export type OrderCreateManyMarkedPaidByInputEnvelope = {
    data: Prisma.OrderCreateManyMarkedPaidByInput | Prisma.OrderCreateManyMarkedPaidByInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutCustomerInput, Prisma.OrderUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput>;
};
export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutCustomerInput, Prisma.OrderUncheckedUpdateWithoutCustomerInput>;
};
export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutCustomerInput>;
};
export type OrderScalarWhereInput = {
    AND?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    OR?: Prisma.OrderScalarWhereInput[];
    NOT?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    id?: Prisma.StringFilter<"Order"> | string;
    orderNumber?: Prisma.StringFilter<"Order"> | string;
    customerId?: Prisma.StringFilter<"Order"> | string;
    branchId?: Prisma.StringFilter<"Order"> | string;
    assignedStaffId?: Prisma.StringNullableFilter<"Order"> | string | null;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    itemCount?: Prisma.IntFilter<"Order"> | number;
    note?: Prisma.StringNullableFilter<"Order"> | string | null;
    totalAmount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus;
    markedPaidById?: Prisma.StringNullableFilter<"Order"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
};
export type OrderUpsertWithWhereUniqueWithoutAssignedStaffInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutAssignedStaffInput, Prisma.OrderUncheckedUpdateWithoutAssignedStaffInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutAssignedStaffInput, Prisma.OrderUncheckedCreateWithoutAssignedStaffInput>;
};
export type OrderUpdateWithWhereUniqueWithoutAssignedStaffInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutAssignedStaffInput, Prisma.OrderUncheckedUpdateWithoutAssignedStaffInput>;
};
export type OrderUpdateManyWithWhereWithoutAssignedStaffInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutAssignedStaffInput>;
};
export type OrderUpsertWithWhereUniqueWithoutMarkedPaidByInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutMarkedPaidByInput, Prisma.OrderUncheckedUpdateWithoutMarkedPaidByInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutMarkedPaidByInput, Prisma.OrderUncheckedCreateWithoutMarkedPaidByInput>;
};
export type OrderUpdateWithWhereUniqueWithoutMarkedPaidByInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutMarkedPaidByInput, Prisma.OrderUncheckedUpdateWithoutMarkedPaidByInput>;
};
export type OrderUpdateManyWithWhereWithoutMarkedPaidByInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutMarkedPaidByInput>;
};
export type OrderCreateWithoutBranchInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.UserCreateNestedOneWithoutOrdersAsCustomerInput;
    assignedStaff?: Prisma.UserCreateNestedOneWithoutOrdersAsStaffInput;
    markedPaidBy?: Prisma.UserCreateNestedOneWithoutOrdersMarkedPaidInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    statusEvents?: Prisma.OrderStatusEventCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutBranchInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    assignedStaffId?: string | null;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    markedPaidById?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    statusEvents?: Prisma.OrderStatusEventUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutBranchInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutBranchInput, Prisma.OrderUncheckedCreateWithoutBranchInput>;
};
export type OrderCreateManyBranchInputEnvelope = {
    data: Prisma.OrderCreateManyBranchInput | Prisma.OrderCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutBranchInput, Prisma.OrderUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutBranchInput, Prisma.OrderUncheckedCreateWithoutBranchInput>;
};
export type OrderUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutBranchInput, Prisma.OrderUncheckedUpdateWithoutBranchInput>;
};
export type OrderUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutBranchInput>;
};
export type OrderCreateWithoutItemsInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.UserCreateNestedOneWithoutOrdersAsCustomerInput;
    branch: Prisma.BranchCreateNestedOneWithoutOrdersInput;
    assignedStaff?: Prisma.UserCreateNestedOneWithoutOrdersAsStaffInput;
    markedPaidBy?: Prisma.UserCreateNestedOneWithoutOrdersMarkedPaidInput;
    statusEvents?: Prisma.OrderStatusEventCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    branchId: string;
    assignedStaffId?: string | null;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    markedPaidById?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    statusEvents?: Prisma.OrderStatusEventUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutItemsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
};
export type OrderUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutItemsInput, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutItemsInput, Prisma.OrderUncheckedCreateWithoutItemsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutItemsInput, Prisma.OrderUncheckedUpdateWithoutItemsInput>;
};
export type OrderUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.UserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutOrdersNestedInput;
    assignedStaff?: Prisma.UserUpdateOneWithoutOrdersAsStaffNestedInput;
    markedPaidBy?: Prisma.UserUpdateOneWithoutOrdersMarkedPaidNestedInput;
    statusEvents?: Prisma.OrderStatusEventUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedStaffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    markedPaidById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statusEvents?: Prisma.OrderStatusEventUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutStatusEventsInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.UserCreateNestedOneWithoutOrdersAsCustomerInput;
    branch: Prisma.BranchCreateNestedOneWithoutOrdersInput;
    assignedStaff?: Prisma.UserCreateNestedOneWithoutOrdersAsStaffInput;
    markedPaidBy?: Prisma.UserCreateNestedOneWithoutOrdersMarkedPaidInput;
    items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutStatusEventsInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    branchId: string;
    assignedStaffId?: string | null;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    markedPaidById?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutStatusEventsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutStatusEventsInput, Prisma.OrderUncheckedCreateWithoutStatusEventsInput>;
};
export type OrderUpsertWithoutStatusEventsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutStatusEventsInput, Prisma.OrderUncheckedUpdateWithoutStatusEventsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutStatusEventsInput, Prisma.OrderUncheckedCreateWithoutStatusEventsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutStatusEventsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutStatusEventsInput, Prisma.OrderUncheckedUpdateWithoutStatusEventsInput>;
};
export type OrderUpdateWithoutStatusEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.UserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutOrdersNestedInput;
    assignedStaff?: Prisma.UserUpdateOneWithoutOrdersAsStaffNestedInput;
    markedPaidBy?: Prisma.UserUpdateOneWithoutOrdersMarkedPaidNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutStatusEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedStaffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    markedPaidById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateManyCustomerInput = {
    id?: string;
    orderNumber: string;
    branchId: string;
    assignedStaffId?: string | null;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    markedPaidById?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderCreateManyAssignedStaffInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    branchId: string;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    markedPaidById?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderCreateManyMarkedPaidByInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    branchId: string;
    assignedStaffId?: string | null;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneRequiredWithoutOrdersNestedInput;
    assignedStaff?: Prisma.UserUpdateOneWithoutOrdersAsStaffNestedInput;
    markedPaidBy?: Prisma.UserUpdateOneWithoutOrdersMarkedPaidNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    statusEvents?: Prisma.OrderStatusEventUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedStaffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    markedPaidById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    statusEvents?: Prisma.OrderStatusEventUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedStaffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    markedPaidById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderUpdateWithoutAssignedStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.UserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutOrdersNestedInput;
    markedPaidBy?: Prisma.UserUpdateOneWithoutOrdersMarkedPaidNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    statusEvents?: Prisma.OrderStatusEventUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutAssignedStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    markedPaidById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    statusEvents?: Prisma.OrderStatusEventUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutAssignedStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    markedPaidById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderUpdateWithoutMarkedPaidByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.UserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    branch?: Prisma.BranchUpdateOneRequiredWithoutOrdersNestedInput;
    assignedStaff?: Prisma.UserUpdateOneWithoutOrdersAsStaffNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    statusEvents?: Prisma.OrderStatusEventUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutMarkedPaidByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedStaffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    statusEvents?: Prisma.OrderStatusEventUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutMarkedPaidByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedStaffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCreateManyBranchInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    assignedStaffId?: string | null;
    status?: $Enums.OrderStatus;
    itemCount?: number;
    note?: string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: $Enums.PaymentStatus;
    markedPaidById?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.UserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    assignedStaff?: Prisma.UserUpdateOneWithoutOrdersAsStaffNestedInput;
    markedPaidBy?: Prisma.UserUpdateOneWithoutOrdersMarkedPaidNestedInput;
    items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    statusEvents?: Prisma.OrderStatusEventUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedStaffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    markedPaidById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    statusEvents?: Prisma.OrderStatusEventUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedStaffId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    itemCount?: Prisma.IntFieldUpdateOperationsInput | number;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    markedPaidById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderCountOutputType = {
    items: number;
    statusEvents: number;
};
export type OrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs;
    statusEvents?: boolean | OrderCountOutputTypeCountStatusEventsArgs;
};
export type OrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCountOutputTypeSelect<ExtArgs> | null;
};
export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type OrderCountOutputTypeCountStatusEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderStatusEventWhereInput;
};
export type OrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderNumber?: boolean;
    customerId?: boolean;
    branchId?: boolean;
    assignedStaffId?: boolean;
    status?: boolean;
    itemCount?: boolean;
    note?: boolean;
    totalAmount?: boolean;
    paymentStatus?: boolean;
    markedPaidById?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    assignedStaff?: boolean | Prisma.Order$assignedStaffArgs<ExtArgs>;
    markedPaidBy?: boolean | Prisma.Order$markedPaidByArgs<ExtArgs>;
    items?: boolean | Prisma.Order$itemsArgs<ExtArgs>;
    statusEvents?: boolean | Prisma.Order$statusEventsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderNumber?: boolean;
    customerId?: boolean;
    branchId?: boolean;
    assignedStaffId?: boolean;
    status?: boolean;
    itemCount?: boolean;
    note?: boolean;
    totalAmount?: boolean;
    paymentStatus?: boolean;
    markedPaidById?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    assignedStaff?: boolean | Prisma.Order$assignedStaffArgs<ExtArgs>;
    markedPaidBy?: boolean | Prisma.Order$markedPaidByArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderNumber?: boolean;
    customerId?: boolean;
    branchId?: boolean;
    assignedStaffId?: boolean;
    status?: boolean;
    itemCount?: boolean;
    note?: boolean;
    totalAmount?: boolean;
    paymentStatus?: boolean;
    markedPaidById?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    assignedStaff?: boolean | Prisma.Order$assignedStaffArgs<ExtArgs>;
    markedPaidBy?: boolean | Prisma.Order$markedPaidByArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectScalar = {
    id?: boolean;
    orderNumber?: boolean;
    customerId?: boolean;
    branchId?: boolean;
    assignedStaffId?: boolean;
    status?: boolean;
    itemCount?: boolean;
    note?: boolean;
    totalAmount?: boolean;
    paymentStatus?: boolean;
    markedPaidById?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderNumber" | "customerId" | "branchId" | "assignedStaffId" | "status" | "itemCount" | "note" | "totalAmount" | "paymentStatus" | "markedPaidById" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>;
export type OrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    assignedStaff?: boolean | Prisma.Order$assignedStaffArgs<ExtArgs>;
    markedPaidBy?: boolean | Prisma.Order$markedPaidByArgs<ExtArgs>;
    items?: boolean | Prisma.Order$itemsArgs<ExtArgs>;
    statusEvents?: boolean | Prisma.Order$statusEventsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    assignedStaff?: boolean | Prisma.Order$assignedStaffArgs<ExtArgs>;
    markedPaidBy?: boolean | Prisma.Order$markedPaidByArgs<ExtArgs>;
};
export type OrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    assignedStaff?: boolean | Prisma.Order$assignedStaffArgs<ExtArgs>;
    markedPaidBy?: boolean | Prisma.Order$markedPaidByArgs<ExtArgs>;
};
export type $OrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Order";
    objects: {
        customer: Prisma.$UserPayload<ExtArgs>;
        branch: Prisma.$BranchPayload<ExtArgs>;
        assignedStaff: Prisma.$UserPayload<ExtArgs> | null;
        markedPaidBy: Prisma.$UserPayload<ExtArgs> | null;
        items: Prisma.$OrderItemPayload<ExtArgs>[];
        statusEvents: Prisma.$OrderStatusEventPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderNumber: string;
        customerId: string;
        branchId: string;
        assignedStaffId: string | null;
        status: $Enums.OrderStatus;
        itemCount: number;
        note: string | null;
        totalAmount: runtime.Decimal;
        paymentStatus: $Enums.PaymentStatus;
        markedPaidById: string | null;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPayload, S>;
export type OrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface OrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Order'];
        meta: {
            name: 'Order';
        };
    };
    findUnique<T extends OrderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderCreateArgs>(args: Prisma.SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderDeleteArgs>(args: Prisma.SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderUpdateArgs>(args: Prisma.SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderUpsertArgs>(args: Prisma.SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderCountArgs>(args?: Prisma.Subset<T, OrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    groupBy<T extends OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderFieldRefs;
}
export interface Prisma__OrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    branch<T extends Prisma.BranchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BranchDefaultArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    assignedStaff<T extends Prisma.Order$assignedStaffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$assignedStaffArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    markedPaidBy<T extends Prisma.Order$markedPaidByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$markedPaidByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.Order$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    statusEvents<T extends Prisma.Order$statusEventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$statusEventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderFieldRefs {
    readonly id: Prisma.FieldRef<"Order", 'String'>;
    readonly orderNumber: Prisma.FieldRef<"Order", 'String'>;
    readonly customerId: Prisma.FieldRef<"Order", 'String'>;
    readonly branchId: Prisma.FieldRef<"Order", 'String'>;
    readonly assignedStaffId: Prisma.FieldRef<"Order", 'String'>;
    readonly status: Prisma.FieldRef<"Order", 'OrderStatus'>;
    readonly itemCount: Prisma.FieldRef<"Order", 'Int'>;
    readonly note: Prisma.FieldRef<"Order", 'String'>;
    readonly totalAmount: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly paymentStatus: Prisma.FieldRef<"Order", 'PaymentStatus'>;
    readonly markedPaidById: Prisma.FieldRef<"Order", 'String'>;
    readonly paidAt: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Order", 'DateTime'>;
}
export type OrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
};
export type OrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type OrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
    include?: Prisma.OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
};
export type OrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type Order$assignedStaffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Order$markedPaidByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Order$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type Order$statusEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusEventOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusEventInclude<ExtArgs> | null;
    where?: Prisma.OrderStatusEventWhereInput;
    orderBy?: Prisma.OrderStatusEventOrderByWithRelationInput | Prisma.OrderStatusEventOrderByWithRelationInput[];
    cursor?: Prisma.OrderStatusEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderStatusEventScalarFieldEnum | Prisma.OrderStatusEventScalarFieldEnum[];
};
export type OrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
};
