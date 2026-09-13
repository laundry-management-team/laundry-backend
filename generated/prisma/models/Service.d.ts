import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ServiceModel = runtime.Types.Result.DefaultSelection<Prisma.$ServicePayload>;
export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
};
export type ServiceAvgAggregateOutputType = {
    price: runtime.Decimal | null;
    estMinutes: number | null;
};
export type ServiceSumAggregateOutputType = {
    price: runtime.Decimal | null;
    estMinutes: number | null;
};
export type ServiceMinAggregateOutputType = {
    id: string | null;
    branchId: string | null;
    name: string | null;
    unit: $Enums.ServiceUnit | null;
    price: runtime.Decimal | null;
    estMinutes: number | null;
    createdAt: Date | null;
};
export type ServiceMaxAggregateOutputType = {
    id: string | null;
    branchId: string | null;
    name: string | null;
    unit: $Enums.ServiceUnit | null;
    price: runtime.Decimal | null;
    estMinutes: number | null;
    createdAt: Date | null;
};
export type ServiceCountAggregateOutputType = {
    id: number;
    branchId: number;
    name: number;
    unit: number;
    price: number;
    estMinutes: number;
    createdAt: number;
    _all: number;
};
export type ServiceAvgAggregateInputType = {
    price?: true;
    estMinutes?: true;
};
export type ServiceSumAggregateInputType = {
    price?: true;
    estMinutes?: true;
};
export type ServiceMinAggregateInputType = {
    id?: true;
    branchId?: true;
    name?: true;
    unit?: true;
    price?: true;
    estMinutes?: true;
    createdAt?: true;
};
export type ServiceMaxAggregateInputType = {
    id?: true;
    branchId?: true;
    name?: true;
    unit?: true;
    price?: true;
    estMinutes?: true;
    createdAt?: true;
};
export type ServiceCountAggregateInputType = {
    id?: true;
    branchId?: true;
    name?: true;
    unit?: true;
    price?: true;
    estMinutes?: true;
    createdAt?: true;
    _all?: true;
};
export type ServiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ServiceCountAggregateInputType;
    _avg?: ServiceAvgAggregateInputType;
    _sum?: ServiceSumAggregateInputType;
    _min?: ServiceMinAggregateInputType;
    _max?: ServiceMaxAggregateInputType;
};
export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
    [P in keyof T & keyof AggregateService]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateService[P]> : Prisma.GetScalarType<T[P], AggregateService[P]>;
};
export type ServiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithAggregationInput | Prisma.ServiceOrderByWithAggregationInput[];
    by: Prisma.ServiceScalarFieldEnum[] | Prisma.ServiceScalarFieldEnum;
    having?: Prisma.ServiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceCountAggregateInputType | true;
    _avg?: ServiceAvgAggregateInputType;
    _sum?: ServiceSumAggregateInputType;
    _min?: ServiceMinAggregateInputType;
    _max?: ServiceMaxAggregateInputType;
};
export type ServiceGroupByOutputType = {
    id: string;
    branchId: string;
    name: string;
    unit: $Enums.ServiceUnit;
    price: runtime.Decimal;
    estMinutes: number;
    createdAt: Date;
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
};
export type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServiceGroupByOutputType[P]>;
}>>;
export type ServiceWhereInput = {
    AND?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    OR?: Prisma.ServiceWhereInput[];
    NOT?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    id?: Prisma.StringFilter<"Service"> | string;
    branchId?: Prisma.StringFilter<"Service"> | string;
    name?: Prisma.StringFilter<"Service"> | string;
    unit?: Prisma.EnumServiceUnitFilter<"Service"> | $Enums.ServiceUnit;
    price?: Prisma.DecimalFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes?: Prisma.IntFilter<"Service"> | number;
    createdAt?: Prisma.DateTimeFilter<"Service"> | Date | string;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    orderItems?: Prisma.OrderItemListRelationFilter;
};
export type ServiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    estMinutes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    branch?: Prisma.BranchOrderByWithRelationInput;
    orderItems?: Prisma.OrderItemOrderByRelationAggregateInput;
};
export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    OR?: Prisma.ServiceWhereInput[];
    NOT?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    branchId?: Prisma.StringFilter<"Service"> | string;
    name?: Prisma.StringFilter<"Service"> | string;
    unit?: Prisma.EnumServiceUnitFilter<"Service"> | $Enums.ServiceUnit;
    price?: Prisma.DecimalFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes?: Prisma.IntFilter<"Service"> | number;
    createdAt?: Prisma.DateTimeFilter<"Service"> | Date | string;
    branch?: Prisma.XOR<Prisma.BranchScalarRelationFilter, Prisma.BranchWhereInput>;
    orderItems?: Prisma.OrderItemListRelationFilter;
}, "id">;
export type ServiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    estMinutes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ServiceCountOrderByAggregateInput;
    _avg?: Prisma.ServiceAvgOrderByAggregateInput;
    _max?: Prisma.ServiceMaxOrderByAggregateInput;
    _min?: Prisma.ServiceMinOrderByAggregateInput;
    _sum?: Prisma.ServiceSumOrderByAggregateInput;
};
export type ServiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.ServiceScalarWhereWithAggregatesInput | Prisma.ServiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.ServiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ServiceScalarWhereWithAggregatesInput | Prisma.ServiceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Service"> | string;
    branchId?: Prisma.StringWithAggregatesFilter<"Service"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Service"> | string;
    unit?: Prisma.EnumServiceUnitWithAggregatesFilter<"Service"> | $Enums.ServiceUnit;
    price?: Prisma.DecimalWithAggregatesFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes?: Prisma.IntWithAggregatesFilter<"Service"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Service"> | Date | string;
};
export type ServiceCreateInput = {
    id?: string;
    name: string;
    unit: $Enums.ServiceUnit;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes: number;
    createdAt?: Date | string;
    branch: Prisma.BranchCreateNestedOneWithoutServicesInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutServiceInput;
};
export type ServiceUncheckedCreateInput = {
    id?: string;
    branchId: string;
    name: string;
    unit: $Enums.ServiceUnit;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes: number;
    createdAt?: Date | string;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutServiceInput;
};
export type ServiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumServiceUnitFieldUpdateOperationsInput | $Enums.ServiceUnit;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneRequiredWithoutServicesNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumServiceUnitFieldUpdateOperationsInput | $Enums.ServiceUnit;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutServiceNestedInput;
};
export type ServiceCreateManyInput = {
    id?: string;
    branchId: string;
    name: string;
    unit: $Enums.ServiceUnit;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes: number;
    createdAt?: Date | string;
};
export type ServiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumServiceUnitFieldUpdateOperationsInput | $Enums.ServiceUnit;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumServiceUnitFieldUpdateOperationsInput | $Enums.ServiceUnit;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceListRelationFilter = {
    every?: Prisma.ServiceWhereInput;
    some?: Prisma.ServiceWhereInput;
    none?: Prisma.ServiceWhereInput;
};
export type ServiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ServiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    estMinutes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ServiceAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    estMinutes?: Prisma.SortOrder;
};
export type ServiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    estMinutes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ServiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    estMinutes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ServiceSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    estMinutes?: Prisma.SortOrder;
};
export type ServiceScalarRelationFilter = {
    is?: Prisma.ServiceWhereInput;
    isNot?: Prisma.ServiceWhereInput;
};
export type ServiceCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutBranchInput, Prisma.ServiceUncheckedCreateWithoutBranchInput> | Prisma.ServiceCreateWithoutBranchInput[] | Prisma.ServiceUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutBranchInput | Prisma.ServiceCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.ServiceCreateManyBranchInputEnvelope;
    connect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
};
export type ServiceUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutBranchInput, Prisma.ServiceUncheckedCreateWithoutBranchInput> | Prisma.ServiceCreateWithoutBranchInput[] | Prisma.ServiceUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutBranchInput | Prisma.ServiceCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.ServiceCreateManyBranchInputEnvelope;
    connect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
};
export type ServiceUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutBranchInput, Prisma.ServiceUncheckedCreateWithoutBranchInput> | Prisma.ServiceCreateWithoutBranchInput[] | Prisma.ServiceUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutBranchInput | Prisma.ServiceCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.ServiceUpsertWithWhereUniqueWithoutBranchInput | Prisma.ServiceUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.ServiceCreateManyBranchInputEnvelope;
    set?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    disconnect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    delete?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    connect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    update?: Prisma.ServiceUpdateWithWhereUniqueWithoutBranchInput | Prisma.ServiceUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.ServiceUpdateManyWithWhereWithoutBranchInput | Prisma.ServiceUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.ServiceScalarWhereInput | Prisma.ServiceScalarWhereInput[];
};
export type ServiceUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutBranchInput, Prisma.ServiceUncheckedCreateWithoutBranchInput> | Prisma.ServiceCreateWithoutBranchInput[] | Prisma.ServiceUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutBranchInput | Prisma.ServiceCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.ServiceUpsertWithWhereUniqueWithoutBranchInput | Prisma.ServiceUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.ServiceCreateManyBranchInputEnvelope;
    set?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    disconnect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    delete?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    connect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    update?: Prisma.ServiceUpdateWithWhereUniqueWithoutBranchInput | Prisma.ServiceUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.ServiceUpdateManyWithWhereWithoutBranchInput | Prisma.ServiceUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.ServiceScalarWhereInput | Prisma.ServiceScalarWhereInput[];
};
export type EnumServiceUnitFieldUpdateOperationsInput = {
    set?: $Enums.ServiceUnit;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ServiceCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutOrderItemsInput, Prisma.ServiceUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.ServiceWhereUniqueInput;
};
export type ServiceUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutOrderItemsInput, Prisma.ServiceUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.ServiceUpsertWithoutOrderItemsInput;
    connect?: Prisma.ServiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServiceUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.ServiceUpdateWithoutOrderItemsInput>, Prisma.ServiceUncheckedUpdateWithoutOrderItemsInput>;
};
export type ServiceCreateWithoutBranchInput = {
    id?: string;
    name: string;
    unit: $Enums.ServiceUnit;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes: number;
    createdAt?: Date | string;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutServiceInput;
};
export type ServiceUncheckedCreateWithoutBranchInput = {
    id?: string;
    name: string;
    unit: $Enums.ServiceUnit;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes: number;
    createdAt?: Date | string;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutServiceInput;
};
export type ServiceCreateOrConnectWithoutBranchInput = {
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutBranchInput, Prisma.ServiceUncheckedCreateWithoutBranchInput>;
};
export type ServiceCreateManyBranchInputEnvelope = {
    data: Prisma.ServiceCreateManyBranchInput | Prisma.ServiceCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type ServiceUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.ServiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.ServiceUpdateWithoutBranchInput, Prisma.ServiceUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutBranchInput, Prisma.ServiceUncheckedCreateWithoutBranchInput>;
};
export type ServiceUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.ServiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.ServiceUpdateWithoutBranchInput, Prisma.ServiceUncheckedUpdateWithoutBranchInput>;
};
export type ServiceUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.ServiceScalarWhereInput;
    data: Prisma.XOR<Prisma.ServiceUpdateManyMutationInput, Prisma.ServiceUncheckedUpdateManyWithoutBranchInput>;
};
export type ServiceScalarWhereInput = {
    AND?: Prisma.ServiceScalarWhereInput | Prisma.ServiceScalarWhereInput[];
    OR?: Prisma.ServiceScalarWhereInput[];
    NOT?: Prisma.ServiceScalarWhereInput | Prisma.ServiceScalarWhereInput[];
    id?: Prisma.StringFilter<"Service"> | string;
    branchId?: Prisma.StringFilter<"Service"> | string;
    name?: Prisma.StringFilter<"Service"> | string;
    unit?: Prisma.EnumServiceUnitFilter<"Service"> | $Enums.ServiceUnit;
    price?: Prisma.DecimalFilter<"Service"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes?: Prisma.IntFilter<"Service"> | number;
    createdAt?: Prisma.DateTimeFilter<"Service"> | Date | string;
};
export type ServiceCreateWithoutOrderItemsInput = {
    id?: string;
    name: string;
    unit: $Enums.ServiceUnit;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes: number;
    createdAt?: Date | string;
    branch: Prisma.BranchCreateNestedOneWithoutServicesInput;
};
export type ServiceUncheckedCreateWithoutOrderItemsInput = {
    id?: string;
    branchId: string;
    name: string;
    unit: $Enums.ServiceUnit;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes: number;
    createdAt?: Date | string;
};
export type ServiceCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutOrderItemsInput, Prisma.ServiceUncheckedCreateWithoutOrderItemsInput>;
};
export type ServiceUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.ServiceUpdateWithoutOrderItemsInput, Prisma.ServiceUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutOrderItemsInput, Prisma.ServiceUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.ServiceWhereInput;
};
export type ServiceUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.ServiceWhereInput;
    data: Prisma.XOR<Prisma.ServiceUpdateWithoutOrderItemsInput, Prisma.ServiceUncheckedUpdateWithoutOrderItemsInput>;
};
export type ServiceUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumServiceUnitFieldUpdateOperationsInput | $Enums.ServiceUnit;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneRequiredWithoutServicesNestedInput;
};
export type ServiceUncheckedUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    branchId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumServiceUnitFieldUpdateOperationsInput | $Enums.ServiceUnit;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceCreateManyBranchInput = {
    id?: string;
    name: string;
    unit: $Enums.ServiceUnit;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes: number;
    createdAt?: Date | string;
};
export type ServiceUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumServiceUnitFieldUpdateOperationsInput | $Enums.ServiceUnit;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.OrderItemUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumServiceUnitFieldUpdateOperationsInput | $Enums.ServiceUnit;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumServiceUnitFieldUpdateOperationsInput | $Enums.ServiceUnit;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceCountOutputType = {
    orderItems: number;
};
export type ServiceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orderItems?: boolean | ServiceCountOutputTypeCountOrderItemsArgs;
};
export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceCountOutputTypeSelect<ExtArgs> | null;
};
export type ServiceCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type ServiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branchId?: boolean;
    name?: boolean;
    unit?: boolean;
    price?: boolean;
    estMinutes?: boolean;
    createdAt?: boolean;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Service$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ServiceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["service"]>;
export type ServiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branchId?: boolean;
    name?: boolean;
    unit?: boolean;
    price?: boolean;
    estMinutes?: boolean;
    createdAt?: boolean;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["service"]>;
export type ServiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    branchId?: boolean;
    name?: boolean;
    unit?: boolean;
    price?: boolean;
    estMinutes?: boolean;
    createdAt?: boolean;
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["service"]>;
export type ServiceSelectScalar = {
    id?: boolean;
    branchId?: boolean;
    name?: boolean;
    unit?: boolean;
    price?: boolean;
    estMinutes?: boolean;
    createdAt?: boolean;
};
export type ServiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "branchId" | "name" | "unit" | "price" | "estMinutes" | "createdAt", ExtArgs["result"]["service"]>;
export type ServiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Service$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ServiceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ServiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
};
export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch?: boolean | Prisma.BranchDefaultArgs<ExtArgs>;
};
export type $ServicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Service";
    objects: {
        branch: Prisma.$BranchPayload<ExtArgs>;
        orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        branchId: string;
        name: string;
        unit: $Enums.ServiceUnit;
        price: runtime.Decimal;
        estMinutes: number;
        createdAt: Date;
    }, ExtArgs["result"]["service"]>;
    composites: {};
};
export type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ServicePayload, S>;
export type ServiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServiceCountAggregateInputType | true;
};
export interface ServiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Service'];
        meta: {
            name: 'Service';
        };
    };
    findUnique<T extends ServiceFindUniqueArgs>(args: Prisma.SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ServiceFindFirstArgs>(args?: Prisma.SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ServiceFindManyArgs>(args?: Prisma.SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ServiceCreateArgs>(args: Prisma.SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ServiceCreateManyArgs>(args?: Prisma.SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ServiceDeleteArgs>(args: Prisma.SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ServiceUpdateArgs>(args: Prisma.SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ServiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ServiceUpdateManyArgs>(args: Prisma.SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ServiceUpsertArgs>(args: Prisma.SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ServiceCountArgs>(args?: Prisma.Subset<T, ServiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServiceCountAggregateOutputType> : number>;
    aggregate<T extends ServiceAggregateArgs>(args: Prisma.Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>;
    groupBy<T extends ServiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ServiceGroupByArgs['orderBy'];
    } : {
        orderBy?: ServiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ServiceFieldRefs;
}
export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    branch<T extends Prisma.BranchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BranchDefaultArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orderItems<T extends Prisma.Service$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Service$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ServiceFieldRefs {
    readonly id: Prisma.FieldRef<"Service", 'String'>;
    readonly branchId: Prisma.FieldRef<"Service", 'String'>;
    readonly name: Prisma.FieldRef<"Service", 'String'>;
    readonly unit: Prisma.FieldRef<"Service", 'ServiceUnit'>;
    readonly price: Prisma.FieldRef<"Service", 'Decimal'>;
    readonly estMinutes: Prisma.FieldRef<"Service", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Service", 'DateTime'>;
}
export type ServiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where: Prisma.ServiceWhereUniqueInput;
};
export type ServiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where: Prisma.ServiceWhereUniqueInput;
};
export type ServiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
export type ServiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
export type ServiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
export type ServiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServiceCreateInput, Prisma.ServiceUncheckedCreateInput>;
};
export type ServiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ServiceCreateManyInput | Prisma.ServiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ServiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    data: Prisma.ServiceCreateManyInput | Prisma.ServiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ServiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ServiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServiceUpdateInput, Prisma.ServiceUncheckedUpdateInput>;
    where: Prisma.ServiceWhereUniqueInput;
};
export type ServiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ServiceUpdateManyMutationInput, Prisma.ServiceUncheckedUpdateManyInput>;
    where?: Prisma.ServiceWhereInput;
    limit?: number;
};
export type ServiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServiceUpdateManyMutationInput, Prisma.ServiceUncheckedUpdateManyInput>;
    where?: Prisma.ServiceWhereInput;
    limit?: number;
    include?: Prisma.ServiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ServiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateInput, Prisma.ServiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ServiceUpdateInput, Prisma.ServiceUncheckedUpdateInput>;
};
export type ServiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where: Prisma.ServiceWhereUniqueInput;
};
export type ServiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
    limit?: number;
};
export type Service$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
};
