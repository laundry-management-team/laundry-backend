import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderStatusEventModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderStatusEventPayload>;
export type AggregateOrderStatusEvent = {
    _count: OrderStatusEventCountAggregateOutputType | null;
    _min: OrderStatusEventMinAggregateOutputType | null;
    _max: OrderStatusEventMaxAggregateOutputType | null;
};
export type OrderStatusEventMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    status: $Enums.OrderStatus | null;
    changedById: string | null;
    note: string | null;
    createdAt: Date | null;
};
export type OrderStatusEventMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    status: $Enums.OrderStatus | null;
    changedById: string | null;
    note: string | null;
    createdAt: Date | null;
};
export type OrderStatusEventCountAggregateOutputType = {
    id: number;
    orderId: number;
    status: number;
    changedById: number;
    note: number;
    createdAt: number;
    _all: number;
};
export type OrderStatusEventMinAggregateInputType = {
    id?: true;
    orderId?: true;
    status?: true;
    changedById?: true;
    note?: true;
    createdAt?: true;
};
export type OrderStatusEventMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    status?: true;
    changedById?: true;
    note?: true;
    createdAt?: true;
};
export type OrderStatusEventCountAggregateInputType = {
    id?: true;
    orderId?: true;
    status?: true;
    changedById?: true;
    note?: true;
    createdAt?: true;
    _all?: true;
};
export type OrderStatusEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderStatusEventWhereInput;
    orderBy?: Prisma.OrderStatusEventOrderByWithRelationInput | Prisma.OrderStatusEventOrderByWithRelationInput[];
    cursor?: Prisma.OrderStatusEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderStatusEventCountAggregateInputType;
    _min?: OrderStatusEventMinAggregateInputType;
    _max?: OrderStatusEventMaxAggregateInputType;
};
export type GetOrderStatusEventAggregateType<T extends OrderStatusEventAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderStatusEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderStatusEvent[P]> : Prisma.GetScalarType<T[P], AggregateOrderStatusEvent[P]>;
};
export type OrderStatusEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderStatusEventWhereInput;
    orderBy?: Prisma.OrderStatusEventOrderByWithAggregationInput | Prisma.OrderStatusEventOrderByWithAggregationInput[];
    by: Prisma.OrderStatusEventScalarFieldEnum[] | Prisma.OrderStatusEventScalarFieldEnum;
    having?: Prisma.OrderStatusEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderStatusEventCountAggregateInputType | true;
    _min?: OrderStatusEventMinAggregateInputType;
    _max?: OrderStatusEventMaxAggregateInputType;
};
export type OrderStatusEventGroupByOutputType = {
    id: string;
    orderId: string;
    status: $Enums.OrderStatus;
    changedById: string;
    note: string | null;
    createdAt: Date;
    _count: OrderStatusEventCountAggregateOutputType | null;
    _min: OrderStatusEventMinAggregateOutputType | null;
    _max: OrderStatusEventMaxAggregateOutputType | null;
};
export type GetOrderStatusEventGroupByPayload<T extends OrderStatusEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderStatusEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderStatusEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderStatusEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderStatusEventGroupByOutputType[P]>;
}>>;
export type OrderStatusEventWhereInput = {
    AND?: Prisma.OrderStatusEventWhereInput | Prisma.OrderStatusEventWhereInput[];
    OR?: Prisma.OrderStatusEventWhereInput[];
    NOT?: Prisma.OrderStatusEventWhereInput | Prisma.OrderStatusEventWhereInput[];
    id?: Prisma.StringFilter<"OrderStatusEvent"> | string;
    orderId?: Prisma.StringFilter<"OrderStatusEvent"> | string;
    status?: Prisma.EnumOrderStatusFilter<"OrderStatusEvent"> | $Enums.OrderStatus;
    changedById?: Prisma.StringFilter<"OrderStatusEvent"> | string;
    note?: Prisma.StringNullableFilter<"OrderStatusEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"OrderStatusEvent"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    changedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type OrderStatusEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    changedBy?: Prisma.UserOrderByWithRelationInput;
};
export type OrderStatusEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrderStatusEventWhereInput | Prisma.OrderStatusEventWhereInput[];
    OR?: Prisma.OrderStatusEventWhereInput[];
    NOT?: Prisma.OrderStatusEventWhereInput | Prisma.OrderStatusEventWhereInput[];
    orderId?: Prisma.StringFilter<"OrderStatusEvent"> | string;
    status?: Prisma.EnumOrderStatusFilter<"OrderStatusEvent"> | $Enums.OrderStatus;
    changedById?: Prisma.StringFilter<"OrderStatusEvent"> | string;
    note?: Prisma.StringNullableFilter<"OrderStatusEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"OrderStatusEvent"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    changedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type OrderStatusEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OrderStatusEventCountOrderByAggregateInput;
    _max?: Prisma.OrderStatusEventMaxOrderByAggregateInput;
    _min?: Prisma.OrderStatusEventMinOrderByAggregateInput;
};
export type OrderStatusEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderStatusEventScalarWhereWithAggregatesInput | Prisma.OrderStatusEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderStatusEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderStatusEventScalarWhereWithAggregatesInput | Prisma.OrderStatusEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrderStatusEvent"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"OrderStatusEvent"> | string;
    status?: Prisma.EnumOrderStatusWithAggregatesFilter<"OrderStatusEvent"> | $Enums.OrderStatus;
    changedById?: Prisma.StringWithAggregatesFilter<"OrderStatusEvent"> | string;
    note?: Prisma.StringNullableWithAggregatesFilter<"OrderStatusEvent"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OrderStatusEvent"> | Date | string;
};
export type OrderStatusEventCreateInput = {
    id?: string;
    status: $Enums.OrderStatus;
    note?: string | null;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutStatusEventsInput;
    changedBy: Prisma.UserCreateNestedOneWithoutStatusEventsMadeInput;
};
export type OrderStatusEventUncheckedCreateInput = {
    id?: string;
    orderId: string;
    status: $Enums.OrderStatus;
    changedById: string;
    note?: string | null;
    createdAt?: Date | string;
};
export type OrderStatusEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutStatusEventsNestedInput;
    changedBy?: Prisma.UserUpdateOneRequiredWithoutStatusEventsMadeNestedInput;
};
export type OrderStatusEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderStatusEventCreateManyInput = {
    id?: string;
    orderId: string;
    status: $Enums.OrderStatus;
    changedById: string;
    note?: string | null;
    createdAt?: Date | string;
};
export type OrderStatusEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderStatusEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderStatusEventListRelationFilter = {
    every?: Prisma.OrderStatusEventWhereInput;
    some?: Prisma.OrderStatusEventWhereInput;
    none?: Prisma.OrderStatusEventWhereInput;
};
export type OrderStatusEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderStatusEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderStatusEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderStatusEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderStatusEventCreateNestedManyWithoutChangedByInput = {
    create?: Prisma.XOR<Prisma.OrderStatusEventCreateWithoutChangedByInput, Prisma.OrderStatusEventUncheckedCreateWithoutChangedByInput> | Prisma.OrderStatusEventCreateWithoutChangedByInput[] | Prisma.OrderStatusEventUncheckedCreateWithoutChangedByInput[];
    connectOrCreate?: Prisma.OrderStatusEventCreateOrConnectWithoutChangedByInput | Prisma.OrderStatusEventCreateOrConnectWithoutChangedByInput[];
    createMany?: Prisma.OrderStatusEventCreateManyChangedByInputEnvelope;
    connect?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
};
export type OrderStatusEventUncheckedCreateNestedManyWithoutChangedByInput = {
    create?: Prisma.XOR<Prisma.OrderStatusEventCreateWithoutChangedByInput, Prisma.OrderStatusEventUncheckedCreateWithoutChangedByInput> | Prisma.OrderStatusEventCreateWithoutChangedByInput[] | Prisma.OrderStatusEventUncheckedCreateWithoutChangedByInput[];
    connectOrCreate?: Prisma.OrderStatusEventCreateOrConnectWithoutChangedByInput | Prisma.OrderStatusEventCreateOrConnectWithoutChangedByInput[];
    createMany?: Prisma.OrderStatusEventCreateManyChangedByInputEnvelope;
    connect?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
};
export type OrderStatusEventUpdateManyWithoutChangedByNestedInput = {
    create?: Prisma.XOR<Prisma.OrderStatusEventCreateWithoutChangedByInput, Prisma.OrderStatusEventUncheckedCreateWithoutChangedByInput> | Prisma.OrderStatusEventCreateWithoutChangedByInput[] | Prisma.OrderStatusEventUncheckedCreateWithoutChangedByInput[];
    connectOrCreate?: Prisma.OrderStatusEventCreateOrConnectWithoutChangedByInput | Prisma.OrderStatusEventCreateOrConnectWithoutChangedByInput[];
    upsert?: Prisma.OrderStatusEventUpsertWithWhereUniqueWithoutChangedByInput | Prisma.OrderStatusEventUpsertWithWhereUniqueWithoutChangedByInput[];
    createMany?: Prisma.OrderStatusEventCreateManyChangedByInputEnvelope;
    set?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    disconnect?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    delete?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    connect?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    update?: Prisma.OrderStatusEventUpdateWithWhereUniqueWithoutChangedByInput | Prisma.OrderStatusEventUpdateWithWhereUniqueWithoutChangedByInput[];
    updateMany?: Prisma.OrderStatusEventUpdateManyWithWhereWithoutChangedByInput | Prisma.OrderStatusEventUpdateManyWithWhereWithoutChangedByInput[];
    deleteMany?: Prisma.OrderStatusEventScalarWhereInput | Prisma.OrderStatusEventScalarWhereInput[];
};
export type OrderStatusEventUncheckedUpdateManyWithoutChangedByNestedInput = {
    create?: Prisma.XOR<Prisma.OrderStatusEventCreateWithoutChangedByInput, Prisma.OrderStatusEventUncheckedCreateWithoutChangedByInput> | Prisma.OrderStatusEventCreateWithoutChangedByInput[] | Prisma.OrderStatusEventUncheckedCreateWithoutChangedByInput[];
    connectOrCreate?: Prisma.OrderStatusEventCreateOrConnectWithoutChangedByInput | Prisma.OrderStatusEventCreateOrConnectWithoutChangedByInput[];
    upsert?: Prisma.OrderStatusEventUpsertWithWhereUniqueWithoutChangedByInput | Prisma.OrderStatusEventUpsertWithWhereUniqueWithoutChangedByInput[];
    createMany?: Prisma.OrderStatusEventCreateManyChangedByInputEnvelope;
    set?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    disconnect?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    delete?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    connect?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    update?: Prisma.OrderStatusEventUpdateWithWhereUniqueWithoutChangedByInput | Prisma.OrderStatusEventUpdateWithWhereUniqueWithoutChangedByInput[];
    updateMany?: Prisma.OrderStatusEventUpdateManyWithWhereWithoutChangedByInput | Prisma.OrderStatusEventUpdateManyWithWhereWithoutChangedByInput[];
    deleteMany?: Prisma.OrderStatusEventScalarWhereInput | Prisma.OrderStatusEventScalarWhereInput[];
};
export type OrderStatusEventCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderStatusEventCreateWithoutOrderInput, Prisma.OrderStatusEventUncheckedCreateWithoutOrderInput> | Prisma.OrderStatusEventCreateWithoutOrderInput[] | Prisma.OrderStatusEventUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderStatusEventCreateOrConnectWithoutOrderInput | Prisma.OrderStatusEventCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderStatusEventCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
};
export type OrderStatusEventUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderStatusEventCreateWithoutOrderInput, Prisma.OrderStatusEventUncheckedCreateWithoutOrderInput> | Prisma.OrderStatusEventCreateWithoutOrderInput[] | Prisma.OrderStatusEventUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderStatusEventCreateOrConnectWithoutOrderInput | Prisma.OrderStatusEventCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderStatusEventCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
};
export type OrderStatusEventUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderStatusEventCreateWithoutOrderInput, Prisma.OrderStatusEventUncheckedCreateWithoutOrderInput> | Prisma.OrderStatusEventCreateWithoutOrderInput[] | Prisma.OrderStatusEventUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderStatusEventCreateOrConnectWithoutOrderInput | Prisma.OrderStatusEventCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderStatusEventUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderStatusEventUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderStatusEventCreateManyOrderInputEnvelope;
    set?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    disconnect?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    delete?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    connect?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    update?: Prisma.OrderStatusEventUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderStatusEventUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderStatusEventUpdateManyWithWhereWithoutOrderInput | Prisma.OrderStatusEventUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderStatusEventScalarWhereInput | Prisma.OrderStatusEventScalarWhereInput[];
};
export type OrderStatusEventUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderStatusEventCreateWithoutOrderInput, Prisma.OrderStatusEventUncheckedCreateWithoutOrderInput> | Prisma.OrderStatusEventCreateWithoutOrderInput[] | Prisma.OrderStatusEventUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderStatusEventCreateOrConnectWithoutOrderInput | Prisma.OrderStatusEventCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderStatusEventUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderStatusEventUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderStatusEventCreateManyOrderInputEnvelope;
    set?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    disconnect?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    delete?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    connect?: Prisma.OrderStatusEventWhereUniqueInput | Prisma.OrderStatusEventWhereUniqueInput[];
    update?: Prisma.OrderStatusEventUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderStatusEventUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderStatusEventUpdateManyWithWhereWithoutOrderInput | Prisma.OrderStatusEventUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderStatusEventScalarWhereInput | Prisma.OrderStatusEventScalarWhereInput[];
};
export type OrderStatusEventCreateWithoutChangedByInput = {
    id?: string;
    status: $Enums.OrderStatus;
    note?: string | null;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutStatusEventsInput;
};
export type OrderStatusEventUncheckedCreateWithoutChangedByInput = {
    id?: string;
    orderId: string;
    status: $Enums.OrderStatus;
    note?: string | null;
    createdAt?: Date | string;
};
export type OrderStatusEventCreateOrConnectWithoutChangedByInput = {
    where: Prisma.OrderStatusEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderStatusEventCreateWithoutChangedByInput, Prisma.OrderStatusEventUncheckedCreateWithoutChangedByInput>;
};
export type OrderStatusEventCreateManyChangedByInputEnvelope = {
    data: Prisma.OrderStatusEventCreateManyChangedByInput | Prisma.OrderStatusEventCreateManyChangedByInput[];
    skipDuplicates?: boolean;
};
export type OrderStatusEventUpsertWithWhereUniqueWithoutChangedByInput = {
    where: Prisma.OrderStatusEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderStatusEventUpdateWithoutChangedByInput, Prisma.OrderStatusEventUncheckedUpdateWithoutChangedByInput>;
    create: Prisma.XOR<Prisma.OrderStatusEventCreateWithoutChangedByInput, Prisma.OrderStatusEventUncheckedCreateWithoutChangedByInput>;
};
export type OrderStatusEventUpdateWithWhereUniqueWithoutChangedByInput = {
    where: Prisma.OrderStatusEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderStatusEventUpdateWithoutChangedByInput, Prisma.OrderStatusEventUncheckedUpdateWithoutChangedByInput>;
};
export type OrderStatusEventUpdateManyWithWhereWithoutChangedByInput = {
    where: Prisma.OrderStatusEventScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderStatusEventUpdateManyMutationInput, Prisma.OrderStatusEventUncheckedUpdateManyWithoutChangedByInput>;
};
export type OrderStatusEventScalarWhereInput = {
    AND?: Prisma.OrderStatusEventScalarWhereInput | Prisma.OrderStatusEventScalarWhereInput[];
    OR?: Prisma.OrderStatusEventScalarWhereInput[];
    NOT?: Prisma.OrderStatusEventScalarWhereInput | Prisma.OrderStatusEventScalarWhereInput[];
    id?: Prisma.StringFilter<"OrderStatusEvent"> | string;
    orderId?: Prisma.StringFilter<"OrderStatusEvent"> | string;
    status?: Prisma.EnumOrderStatusFilter<"OrderStatusEvent"> | $Enums.OrderStatus;
    changedById?: Prisma.StringFilter<"OrderStatusEvent"> | string;
    note?: Prisma.StringNullableFilter<"OrderStatusEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"OrderStatusEvent"> | Date | string;
};
export type OrderStatusEventCreateWithoutOrderInput = {
    id?: string;
    status: $Enums.OrderStatus;
    note?: string | null;
    createdAt?: Date | string;
    changedBy: Prisma.UserCreateNestedOneWithoutStatusEventsMadeInput;
};
export type OrderStatusEventUncheckedCreateWithoutOrderInput = {
    id?: string;
    status: $Enums.OrderStatus;
    changedById: string;
    note?: string | null;
    createdAt?: Date | string;
};
export type OrderStatusEventCreateOrConnectWithoutOrderInput = {
    where: Prisma.OrderStatusEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderStatusEventCreateWithoutOrderInput, Prisma.OrderStatusEventUncheckedCreateWithoutOrderInput>;
};
export type OrderStatusEventCreateManyOrderInputEnvelope = {
    data: Prisma.OrderStatusEventCreateManyOrderInput | Prisma.OrderStatusEventCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type OrderStatusEventUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderStatusEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderStatusEventUpdateWithoutOrderInput, Prisma.OrderStatusEventUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.OrderStatusEventCreateWithoutOrderInput, Prisma.OrderStatusEventUncheckedCreateWithoutOrderInput>;
};
export type OrderStatusEventUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderStatusEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderStatusEventUpdateWithoutOrderInput, Prisma.OrderStatusEventUncheckedUpdateWithoutOrderInput>;
};
export type OrderStatusEventUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.OrderStatusEventScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderStatusEventUpdateManyMutationInput, Prisma.OrderStatusEventUncheckedUpdateManyWithoutOrderInput>;
};
export type OrderStatusEventCreateManyChangedByInput = {
    id?: string;
    orderId: string;
    status: $Enums.OrderStatus;
    note?: string | null;
    createdAt?: Date | string;
};
export type OrderStatusEventUpdateWithoutChangedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutStatusEventsNestedInput;
};
export type OrderStatusEventUncheckedUpdateWithoutChangedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderStatusEventUncheckedUpdateManyWithoutChangedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderStatusEventCreateManyOrderInput = {
    id?: string;
    status: $Enums.OrderStatus;
    changedById: string;
    note?: string | null;
    createdAt?: Date | string;
};
export type OrderStatusEventUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    changedBy?: Prisma.UserUpdateOneRequiredWithoutStatusEventsMadeNestedInput;
};
export type OrderStatusEventUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderStatusEventUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderStatusEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    status?: boolean;
    changedById?: boolean;
    note?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderStatusEvent"]>;
export type OrderStatusEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    status?: boolean;
    changedById?: boolean;
    note?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderStatusEvent"]>;
export type OrderStatusEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    status?: boolean;
    changedById?: boolean;
    note?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderStatusEvent"]>;
export type OrderStatusEventSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    status?: boolean;
    changedById?: boolean;
    note?: boolean;
    createdAt?: boolean;
};
export type OrderStatusEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "status" | "changedById" | "note" | "createdAt", ExtArgs["result"]["orderStatusEvent"]>;
export type OrderStatusEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OrderStatusEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OrderStatusEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $OrderStatusEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderStatusEvent";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
        changedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        status: $Enums.OrderStatus;
        changedById: string;
        note: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["orderStatusEvent"]>;
    composites: {};
};
export type OrderStatusEventGetPayload<S extends boolean | null | undefined | OrderStatusEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload, S>;
export type OrderStatusEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderStatusEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderStatusEventCountAggregateInputType | true;
};
export interface OrderStatusEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderStatusEvent'];
        meta: {
            name: 'OrderStatusEvent';
        };
    };
    findUnique<T extends OrderStatusEventFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderStatusEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderStatusEventClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderStatusEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderStatusEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderStatusEventClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderStatusEventFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderStatusEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderStatusEventClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderStatusEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderStatusEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderStatusEventClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderStatusEventFindManyArgs>(args?: Prisma.SelectSubset<T, OrderStatusEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderStatusEventCreateArgs>(args: Prisma.SelectSubset<T, OrderStatusEventCreateArgs<ExtArgs>>): Prisma.Prisma__OrderStatusEventClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderStatusEventCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderStatusEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderStatusEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderStatusEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderStatusEventDeleteArgs>(args: Prisma.SelectSubset<T, OrderStatusEventDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderStatusEventClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderStatusEventUpdateArgs>(args: Prisma.SelectSubset<T, OrderStatusEventUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderStatusEventClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderStatusEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderStatusEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderStatusEventUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderStatusEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderStatusEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderStatusEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderStatusEventUpsertArgs>(args: Prisma.SelectSubset<T, OrderStatusEventUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderStatusEventClient<runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderStatusEventCountArgs>(args?: Prisma.Subset<T, OrderStatusEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderStatusEventCountAggregateOutputType> : number>;
    aggregate<T extends OrderStatusEventAggregateArgs>(args: Prisma.Subset<T, OrderStatusEventAggregateArgs>): Prisma.PrismaPromise<GetOrderStatusEventAggregateType<T>>;
    groupBy<T extends OrderStatusEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderStatusEventGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderStatusEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderStatusEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderStatusEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderStatusEventFieldRefs;
}
export interface Prisma__OrderStatusEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    changedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderStatusEventFieldRefs {
    readonly id: Prisma.FieldRef<"OrderStatusEvent", 'String'>;
    readonly orderId: Prisma.FieldRef<"OrderStatusEvent", 'String'>;
    readonly status: Prisma.FieldRef<"OrderStatusEvent", 'OrderStatus'>;
    readonly changedById: Prisma.FieldRef<"OrderStatusEvent", 'String'>;
    readonly note: Prisma.FieldRef<"OrderStatusEvent", 'String'>;
    readonly createdAt: Prisma.FieldRef<"OrderStatusEvent", 'DateTime'>;
}
export type OrderStatusEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusEventOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusEventInclude<ExtArgs> | null;
    where: Prisma.OrderStatusEventWhereUniqueInput;
};
export type OrderStatusEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusEventOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusEventInclude<ExtArgs> | null;
    where: Prisma.OrderStatusEventWhereUniqueInput;
};
export type OrderStatusEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderStatusEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderStatusEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderStatusEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusEventOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderStatusEventCreateInput, Prisma.OrderStatusEventUncheckedCreateInput>;
};
export type OrderStatusEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderStatusEventCreateManyInput | Prisma.OrderStatusEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderStatusEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderStatusEventOmit<ExtArgs> | null;
    data: Prisma.OrderStatusEventCreateManyInput | Prisma.OrderStatusEventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderStatusEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderStatusEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusEventOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderStatusEventUpdateInput, Prisma.OrderStatusEventUncheckedUpdateInput>;
    where: Prisma.OrderStatusEventWhereUniqueInput;
};
export type OrderStatusEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderStatusEventUpdateManyMutationInput, Prisma.OrderStatusEventUncheckedUpdateManyInput>;
    where?: Prisma.OrderStatusEventWhereInput;
    limit?: number;
};
export type OrderStatusEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderStatusEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderStatusEventUpdateManyMutationInput, Prisma.OrderStatusEventUncheckedUpdateManyInput>;
    where?: Prisma.OrderStatusEventWhereInput;
    limit?: number;
    include?: Prisma.OrderStatusEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderStatusEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusEventOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusEventInclude<ExtArgs> | null;
    where: Prisma.OrderStatusEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderStatusEventCreateInput, Prisma.OrderStatusEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderStatusEventUpdateInput, Prisma.OrderStatusEventUncheckedUpdateInput>;
};
export type OrderStatusEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusEventOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusEventInclude<ExtArgs> | null;
    where: Prisma.OrderStatusEventWhereUniqueInput;
};
export type OrderStatusEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderStatusEventWhereInput;
    limit?: number;
};
export type OrderStatusEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderStatusEventSelect<ExtArgs> | null;
    omit?: Prisma.OrderStatusEventOmit<ExtArgs> | null;
    include?: Prisma.OrderStatusEventInclude<ExtArgs> | null;
};
