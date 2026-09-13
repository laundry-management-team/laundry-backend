import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    phone: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    branchId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    phone: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    branchId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    phone: number;
    email: number;
    passwordHash: number;
    role: number;
    branchId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    phone?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    branchId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    phone?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    branchId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    phone?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    branchId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    phone: string;
    email: string | null;
    passwordHash: string;
    role: $Enums.Role;
    branchId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringNullableFilter<"User"> | string | null;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    branchId?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    branch?: Prisma.XOR<Prisma.BranchNullableScalarRelationFilter, Prisma.BranchWhereInput> | null;
    addresses?: Prisma.AddressListRelationFilter;
    deviceTokens?: Prisma.DeviceTokenListRelationFilter;
    ordersAsCustomer?: Prisma.OrderListRelationFilter;
    ordersAsStaff?: Prisma.OrderListRelationFilter;
    ordersMarkedPaid?: Prisma.OrderListRelationFilter;
    statusEventsMade?: Prisma.OrderStatusEventListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    branchId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    branch?: Prisma.BranchOrderByWithRelationInput;
    addresses?: Prisma.AddressOrderByRelationAggregateInput;
    deviceTokens?: Prisma.DeviceTokenOrderByRelationAggregateInput;
    ordersAsCustomer?: Prisma.OrderOrderByRelationAggregateInput;
    ordersAsStaff?: Prisma.OrderOrderByRelationAggregateInput;
    ordersMarkedPaid?: Prisma.OrderOrderByRelationAggregateInput;
    statusEventsMade?: Prisma.OrderStatusEventOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    phone?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    branchId?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    branch?: Prisma.XOR<Prisma.BranchNullableScalarRelationFilter, Prisma.BranchWhereInput> | null;
    addresses?: Prisma.AddressListRelationFilter;
    deviceTokens?: Prisma.DeviceTokenListRelationFilter;
    ordersAsCustomer?: Prisma.OrderListRelationFilter;
    ordersAsStaff?: Prisma.OrderListRelationFilter;
    ordersMarkedPaid?: Prisma.OrderListRelationFilter;
    statusEventsMade?: Prisma.OrderStatusEventListRelationFilter;
}, "id" | "phone" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    branchId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    branchId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch?: Prisma.BranchCreateNestedOneWithoutStaffInput;
    addresses?: Prisma.AddressCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    ordersAsStaff?: Prisma.OrderCreateNestedManyWithoutAssignedStaffInput;
    ordersMarkedPaid?: Prisma.OrderCreateNestedManyWithoutMarkedPaidByInput;
    statusEventsMade?: Prisma.OrderStatusEventCreateNestedManyWithoutChangedByInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    addresses?: Prisma.AddressUncheckedCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersAsStaff?: Prisma.OrderUncheckedCreateNestedManyWithoutAssignedStaffInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedCreateNestedManyWithoutMarkedPaidByInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedCreateNestedManyWithoutChangedByInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneWithoutStaffNestedInput;
    addresses?: Prisma.AddressUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    ordersAsStaff?: Prisma.OrderUpdateManyWithoutAssignedStaffNestedInput;
    ordersMarkedPaid?: Prisma.OrderUpdateManyWithoutMarkedPaidByNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUpdateManyWithoutChangedByNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.AddressUncheckedUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersAsStaff?: Prisma.OrderUncheckedUpdateManyWithoutAssignedStaffNestedInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedUpdateManyWithoutMarkedPaidByNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedUpdateManyWithoutChangedByNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    branchId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAddressesInput, Prisma.UserUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAddressesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAddressesInput, Prisma.UserUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAddressesInput;
    upsert?: Prisma.UserUpsertWithoutAddressesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAddressesInput, Prisma.UserUpdateWithoutAddressesInput>, Prisma.UserUncheckedUpdateWithoutAddressesInput>;
};
export type UserCreateNestedOneWithoutDeviceTokensInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDeviceTokensInput, Prisma.UserUncheckedCreateWithoutDeviceTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDeviceTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutDeviceTokensNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDeviceTokensInput, Prisma.UserUncheckedCreateWithoutDeviceTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDeviceTokensInput;
    upsert?: Prisma.UserUpsertWithoutDeviceTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutDeviceTokensInput, Prisma.UserUpdateWithoutDeviceTokensInput>, Prisma.UserUncheckedUpdateWithoutDeviceTokensInput>;
};
export type UserCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBranchInput, Prisma.UserUncheckedCreateWithoutBranchInput> | Prisma.UserCreateWithoutBranchInput[] | Prisma.UserUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBranchInput | Prisma.UserCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.UserCreateManyBranchInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutBranchInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBranchInput, Prisma.UserUncheckedCreateWithoutBranchInput> | Prisma.UserCreateWithoutBranchInput[] | Prisma.UserUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBranchInput | Prisma.UserCreateOrConnectWithoutBranchInput[];
    createMany?: Prisma.UserCreateManyBranchInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBranchInput, Prisma.UserUncheckedCreateWithoutBranchInput> | Prisma.UserCreateWithoutBranchInput[] | Prisma.UserUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBranchInput | Prisma.UserCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutBranchInput | Prisma.UserUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.UserCreateManyBranchInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutBranchInput | Prisma.UserUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutBranchInput | Prisma.UserUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBranchInput, Prisma.UserUncheckedCreateWithoutBranchInput> | Prisma.UserCreateWithoutBranchInput[] | Prisma.UserUncheckedCreateWithoutBranchInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBranchInput | Prisma.UserCreateOrConnectWithoutBranchInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutBranchInput | Prisma.UserUpsertWithWhereUniqueWithoutBranchInput[];
    createMany?: Prisma.UserCreateManyBranchInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutBranchInput | Prisma.UserUpdateWithWhereUniqueWithoutBranchInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutBranchInput | Prisma.UserUpdateManyWithWhereWithoutBranchInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutOrdersAsCustomerInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsCustomerInput, Prisma.UserUncheckedCreateWithoutOrdersAsCustomerInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersAsCustomerInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutOrdersAsStaffInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsStaffInput, Prisma.UserUncheckedCreateWithoutOrdersAsStaffInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersAsStaffInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutOrdersMarkedPaidInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersMarkedPaidInput, Prisma.UserUncheckedCreateWithoutOrdersMarkedPaidInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersMarkedPaidInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsCustomerInput, Prisma.UserUncheckedCreateWithoutOrdersAsCustomerInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersAsCustomerInput;
    upsert?: Prisma.UserUpsertWithoutOrdersAsCustomerInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrdersAsCustomerInput, Prisma.UserUpdateWithoutOrdersAsCustomerInput>, Prisma.UserUncheckedUpdateWithoutOrdersAsCustomerInput>;
};
export type UserUpdateOneWithoutOrdersAsStaffNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsStaffInput, Prisma.UserUncheckedCreateWithoutOrdersAsStaffInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersAsStaffInput;
    upsert?: Prisma.UserUpsertWithoutOrdersAsStaffInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrdersAsStaffInput, Prisma.UserUpdateWithoutOrdersAsStaffInput>, Prisma.UserUncheckedUpdateWithoutOrdersAsStaffInput>;
};
export type UserUpdateOneWithoutOrdersMarkedPaidNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersMarkedPaidInput, Prisma.UserUncheckedCreateWithoutOrdersMarkedPaidInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersMarkedPaidInput;
    upsert?: Prisma.UserUpsertWithoutOrdersMarkedPaidInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrdersMarkedPaidInput, Prisma.UserUpdateWithoutOrdersMarkedPaidInput>, Prisma.UserUncheckedUpdateWithoutOrdersMarkedPaidInput>;
};
export type UserCreateNestedOneWithoutStatusEventsMadeInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStatusEventsMadeInput, Prisma.UserUncheckedCreateWithoutStatusEventsMadeInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStatusEventsMadeInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutStatusEventsMadeNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStatusEventsMadeInput, Prisma.UserUncheckedCreateWithoutStatusEventsMadeInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStatusEventsMadeInput;
    upsert?: Prisma.UserUpsertWithoutStatusEventsMadeInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutStatusEventsMadeInput, Prisma.UserUpdateWithoutStatusEventsMadeInput>, Prisma.UserUncheckedUpdateWithoutStatusEventsMadeInput>;
};
export type UserCreateWithoutAddressesInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch?: Prisma.BranchCreateNestedOneWithoutStaffInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    ordersAsStaff?: Prisma.OrderCreateNestedManyWithoutAssignedStaffInput;
    ordersMarkedPaid?: Prisma.OrderCreateNestedManyWithoutMarkedPaidByInput;
    statusEventsMade?: Prisma.OrderStatusEventCreateNestedManyWithoutChangedByInput;
};
export type UserUncheckedCreateWithoutAddressesInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersAsStaff?: Prisma.OrderUncheckedCreateNestedManyWithoutAssignedStaffInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedCreateNestedManyWithoutMarkedPaidByInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedCreateNestedManyWithoutChangedByInput;
};
export type UserCreateOrConnectWithoutAddressesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAddressesInput, Prisma.UserUncheckedCreateWithoutAddressesInput>;
};
export type UserUpsertWithoutAddressesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAddressesInput, Prisma.UserUncheckedUpdateWithoutAddressesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAddressesInput, Prisma.UserUncheckedCreateWithoutAddressesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAddressesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAddressesInput, Prisma.UserUncheckedUpdateWithoutAddressesInput>;
};
export type UserUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneWithoutStaffNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    ordersAsStaff?: Prisma.OrderUpdateManyWithoutAssignedStaffNestedInput;
    ordersMarkedPaid?: Prisma.OrderUpdateManyWithoutMarkedPaidByNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUpdateManyWithoutChangedByNestedInput;
};
export type UserUncheckedUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersAsStaff?: Prisma.OrderUncheckedUpdateManyWithoutAssignedStaffNestedInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedUpdateManyWithoutMarkedPaidByNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedUpdateManyWithoutChangedByNestedInput;
};
export type UserCreateWithoutDeviceTokensInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch?: Prisma.BranchCreateNestedOneWithoutStaffInput;
    addresses?: Prisma.AddressCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    ordersAsStaff?: Prisma.OrderCreateNestedManyWithoutAssignedStaffInput;
    ordersMarkedPaid?: Prisma.OrderCreateNestedManyWithoutMarkedPaidByInput;
    statusEventsMade?: Prisma.OrderStatusEventCreateNestedManyWithoutChangedByInput;
};
export type UserUncheckedCreateWithoutDeviceTokensInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    addresses?: Prisma.AddressUncheckedCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersAsStaff?: Prisma.OrderUncheckedCreateNestedManyWithoutAssignedStaffInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedCreateNestedManyWithoutMarkedPaidByInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedCreateNestedManyWithoutChangedByInput;
};
export type UserCreateOrConnectWithoutDeviceTokensInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutDeviceTokensInput, Prisma.UserUncheckedCreateWithoutDeviceTokensInput>;
};
export type UserUpsertWithoutDeviceTokensInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutDeviceTokensInput, Prisma.UserUncheckedUpdateWithoutDeviceTokensInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutDeviceTokensInput, Prisma.UserUncheckedCreateWithoutDeviceTokensInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutDeviceTokensInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutDeviceTokensInput, Prisma.UserUncheckedUpdateWithoutDeviceTokensInput>;
};
export type UserUpdateWithoutDeviceTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneWithoutStaffNestedInput;
    addresses?: Prisma.AddressUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    ordersAsStaff?: Prisma.OrderUpdateManyWithoutAssignedStaffNestedInput;
    ordersMarkedPaid?: Prisma.OrderUpdateManyWithoutMarkedPaidByNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUpdateManyWithoutChangedByNestedInput;
};
export type UserUncheckedUpdateWithoutDeviceTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.AddressUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersAsStaff?: Prisma.OrderUncheckedUpdateManyWithoutAssignedStaffNestedInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedUpdateManyWithoutMarkedPaidByNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedUpdateManyWithoutChangedByNestedInput;
};
export type UserCreateWithoutBranchInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    addresses?: Prisma.AddressCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    ordersAsStaff?: Prisma.OrderCreateNestedManyWithoutAssignedStaffInput;
    ordersMarkedPaid?: Prisma.OrderCreateNestedManyWithoutMarkedPaidByInput;
    statusEventsMade?: Prisma.OrderStatusEventCreateNestedManyWithoutChangedByInput;
};
export type UserUncheckedCreateWithoutBranchInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    addresses?: Prisma.AddressUncheckedCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersAsStaff?: Prisma.OrderUncheckedCreateNestedManyWithoutAssignedStaffInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedCreateNestedManyWithoutMarkedPaidByInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedCreateNestedManyWithoutChangedByInput;
};
export type UserCreateOrConnectWithoutBranchInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBranchInput, Prisma.UserUncheckedCreateWithoutBranchInput>;
};
export type UserCreateManyBranchInputEnvelope = {
    data: Prisma.UserCreateManyBranchInput | Prisma.UserCreateManyBranchInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutBranchInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutBranchInput, Prisma.UserUncheckedUpdateWithoutBranchInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBranchInput, Prisma.UserUncheckedCreateWithoutBranchInput>;
};
export type UserUpdateWithWhereUniqueWithoutBranchInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBranchInput, Prisma.UserUncheckedUpdateWithoutBranchInput>;
};
export type UserUpdateManyWithWhereWithoutBranchInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutBranchInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringNullableFilter<"User"> | string | null;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    branchId?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
};
export type UserCreateWithoutOrdersAsCustomerInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch?: Prisma.BranchCreateNestedOneWithoutStaffInput;
    addresses?: Prisma.AddressCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
    ordersAsStaff?: Prisma.OrderCreateNestedManyWithoutAssignedStaffInput;
    ordersMarkedPaid?: Prisma.OrderCreateNestedManyWithoutMarkedPaidByInput;
    statusEventsMade?: Prisma.OrderStatusEventCreateNestedManyWithoutChangedByInput;
};
export type UserUncheckedCreateWithoutOrdersAsCustomerInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    addresses?: Prisma.AddressUncheckedCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
    ordersAsStaff?: Prisma.OrderUncheckedCreateNestedManyWithoutAssignedStaffInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedCreateNestedManyWithoutMarkedPaidByInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedCreateNestedManyWithoutChangedByInput;
};
export type UserCreateOrConnectWithoutOrdersAsCustomerInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsCustomerInput, Prisma.UserUncheckedCreateWithoutOrdersAsCustomerInput>;
};
export type UserCreateWithoutOrdersAsStaffInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch?: Prisma.BranchCreateNestedOneWithoutStaffInput;
    addresses?: Prisma.AddressCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    ordersMarkedPaid?: Prisma.OrderCreateNestedManyWithoutMarkedPaidByInput;
    statusEventsMade?: Prisma.OrderStatusEventCreateNestedManyWithoutChangedByInput;
};
export type UserUncheckedCreateWithoutOrdersAsStaffInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    addresses?: Prisma.AddressUncheckedCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedCreateNestedManyWithoutMarkedPaidByInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedCreateNestedManyWithoutChangedByInput;
};
export type UserCreateOrConnectWithoutOrdersAsStaffInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsStaffInput, Prisma.UserUncheckedCreateWithoutOrdersAsStaffInput>;
};
export type UserCreateWithoutOrdersMarkedPaidInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch?: Prisma.BranchCreateNestedOneWithoutStaffInput;
    addresses?: Prisma.AddressCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    ordersAsStaff?: Prisma.OrderCreateNestedManyWithoutAssignedStaffInput;
    statusEventsMade?: Prisma.OrderStatusEventCreateNestedManyWithoutChangedByInput;
};
export type UserUncheckedCreateWithoutOrdersMarkedPaidInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    addresses?: Prisma.AddressUncheckedCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersAsStaff?: Prisma.OrderUncheckedCreateNestedManyWithoutAssignedStaffInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedCreateNestedManyWithoutChangedByInput;
};
export type UserCreateOrConnectWithoutOrdersMarkedPaidInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersMarkedPaidInput, Prisma.UserUncheckedCreateWithoutOrdersMarkedPaidInput>;
};
export type UserUpsertWithoutOrdersAsCustomerInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrdersAsCustomerInput, Prisma.UserUncheckedUpdateWithoutOrdersAsCustomerInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsCustomerInput, Prisma.UserUncheckedCreateWithoutOrdersAsCustomerInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrdersAsCustomerInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrdersAsCustomerInput, Prisma.UserUncheckedUpdateWithoutOrdersAsCustomerInput>;
};
export type UserUpdateWithoutOrdersAsCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneWithoutStaffNestedInput;
    addresses?: Prisma.AddressUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
    ordersAsStaff?: Prisma.OrderUpdateManyWithoutAssignedStaffNestedInput;
    ordersMarkedPaid?: Prisma.OrderUpdateManyWithoutMarkedPaidByNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUpdateManyWithoutChangedByNestedInput;
};
export type UserUncheckedUpdateWithoutOrdersAsCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.AddressUncheckedUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsStaff?: Prisma.OrderUncheckedUpdateManyWithoutAssignedStaffNestedInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedUpdateManyWithoutMarkedPaidByNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedUpdateManyWithoutChangedByNestedInput;
};
export type UserUpsertWithoutOrdersAsStaffInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrdersAsStaffInput, Prisma.UserUncheckedUpdateWithoutOrdersAsStaffInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsStaffInput, Prisma.UserUncheckedCreateWithoutOrdersAsStaffInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrdersAsStaffInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrdersAsStaffInput, Prisma.UserUncheckedUpdateWithoutOrdersAsStaffInput>;
};
export type UserUpdateWithoutOrdersAsStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneWithoutStaffNestedInput;
    addresses?: Prisma.AddressUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    ordersMarkedPaid?: Prisma.OrderUpdateManyWithoutMarkedPaidByNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUpdateManyWithoutChangedByNestedInput;
};
export type UserUncheckedUpdateWithoutOrdersAsStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.AddressUncheckedUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedUpdateManyWithoutMarkedPaidByNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedUpdateManyWithoutChangedByNestedInput;
};
export type UserUpsertWithoutOrdersMarkedPaidInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrdersMarkedPaidInput, Prisma.UserUncheckedUpdateWithoutOrdersMarkedPaidInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersMarkedPaidInput, Prisma.UserUncheckedCreateWithoutOrdersMarkedPaidInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrdersMarkedPaidInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrdersMarkedPaidInput, Prisma.UserUncheckedUpdateWithoutOrdersMarkedPaidInput>;
};
export type UserUpdateWithoutOrdersMarkedPaidInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneWithoutStaffNestedInput;
    addresses?: Prisma.AddressUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    ordersAsStaff?: Prisma.OrderUpdateManyWithoutAssignedStaffNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUpdateManyWithoutChangedByNestedInput;
};
export type UserUncheckedUpdateWithoutOrdersMarkedPaidInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.AddressUncheckedUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersAsStaff?: Prisma.OrderUncheckedUpdateManyWithoutAssignedStaffNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedUpdateManyWithoutChangedByNestedInput;
};
export type UserCreateWithoutStatusEventsMadeInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    branch?: Prisma.BranchCreateNestedOneWithoutStaffInput;
    addresses?: Prisma.AddressCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    ordersAsStaff?: Prisma.OrderCreateNestedManyWithoutAssignedStaffInput;
    ordersMarkedPaid?: Prisma.OrderCreateNestedManyWithoutMarkedPaidByInput;
};
export type UserUncheckedCreateWithoutStatusEventsMadeInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    branchId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    addresses?: Prisma.AddressUncheckedCreateNestedManyWithoutUserInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedCreateNestedManyWithoutUserInput;
    ordersAsCustomer?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersAsStaff?: Prisma.OrderUncheckedCreateNestedManyWithoutAssignedStaffInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedCreateNestedManyWithoutMarkedPaidByInput;
};
export type UserCreateOrConnectWithoutStatusEventsMadeInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutStatusEventsMadeInput, Prisma.UserUncheckedCreateWithoutStatusEventsMadeInput>;
};
export type UserUpsertWithoutStatusEventsMadeInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutStatusEventsMadeInput, Prisma.UserUncheckedUpdateWithoutStatusEventsMadeInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutStatusEventsMadeInput, Prisma.UserUncheckedCreateWithoutStatusEventsMadeInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutStatusEventsMadeInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutStatusEventsMadeInput, Prisma.UserUncheckedUpdateWithoutStatusEventsMadeInput>;
};
export type UserUpdateWithoutStatusEventsMadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    branch?: Prisma.BranchUpdateOneWithoutStaffNestedInput;
    addresses?: Prisma.AddressUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    ordersAsStaff?: Prisma.OrderUpdateManyWithoutAssignedStaffNestedInput;
    ordersMarkedPaid?: Prisma.OrderUpdateManyWithoutMarkedPaidByNestedInput;
};
export type UserUncheckedUpdateWithoutStatusEventsMadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    branchId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.AddressUncheckedUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersAsStaff?: Prisma.OrderUncheckedUpdateManyWithoutAssignedStaffNestedInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedUpdateManyWithoutMarkedPaidByNestedInput;
};
export type UserCreateManyBranchInput = {
    id?: string;
    phone: string;
    email?: string | null;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.AddressUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    ordersAsStaff?: Prisma.OrderUpdateManyWithoutAssignedStaffNestedInput;
    ordersMarkedPaid?: Prisma.OrderUpdateManyWithoutMarkedPaidByNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUpdateManyWithoutChangedByNestedInput;
};
export type UserUncheckedUpdateWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    addresses?: Prisma.AddressUncheckedUpdateManyWithoutUserNestedInput;
    deviceTokens?: Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsCustomer?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersAsStaff?: Prisma.OrderUncheckedUpdateManyWithoutAssignedStaffNestedInput;
    ordersMarkedPaid?: Prisma.OrderUncheckedUpdateManyWithoutMarkedPaidByNestedInput;
    statusEventsMade?: Prisma.OrderStatusEventUncheckedUpdateManyWithoutChangedByNestedInput;
};
export type UserUncheckedUpdateManyWithoutBranchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOutputType = {
    addresses: number;
    deviceTokens: number;
    ordersAsCustomer: number;
    ordersAsStaff: number;
    ordersMarkedPaid: number;
    statusEventsMade: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | UserCountOutputTypeCountAddressesArgs;
    deviceTokens?: boolean | UserCountOutputTypeCountDeviceTokensArgs;
    ordersAsCustomer?: boolean | UserCountOutputTypeCountOrdersAsCustomerArgs;
    ordersAsStaff?: boolean | UserCountOutputTypeCountOrdersAsStaffArgs;
    ordersMarkedPaid?: boolean | UserCountOutputTypeCountOrdersMarkedPaidArgs;
    statusEventsMade?: boolean | UserCountOutputTypeCountStatusEventsMadeArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AddressWhereInput;
};
export type UserCountOutputTypeCountDeviceTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeviceTokenWhereInput;
};
export type UserCountOutputTypeCountOrdersAsCustomerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type UserCountOutputTypeCountOrdersAsStaffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type UserCountOutputTypeCountOrdersMarkedPaidArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type UserCountOutputTypeCountStatusEventsMadeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderStatusEventWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    branchId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    branch?: boolean | Prisma.User$branchArgs<ExtArgs>;
    addresses?: boolean | Prisma.User$addressesArgs<ExtArgs>;
    deviceTokens?: boolean | Prisma.User$deviceTokensArgs<ExtArgs>;
    ordersAsCustomer?: boolean | Prisma.User$ordersAsCustomerArgs<ExtArgs>;
    ordersAsStaff?: boolean | Prisma.User$ordersAsStaffArgs<ExtArgs>;
    ordersMarkedPaid?: boolean | Prisma.User$ordersMarkedPaidArgs<ExtArgs>;
    statusEventsMade?: boolean | Prisma.User$statusEventsMadeArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    branchId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    branch?: boolean | Prisma.User$branchArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    branchId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    branch?: boolean | Prisma.User$branchArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    phone?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    branchId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "phone" | "email" | "passwordHash" | "role" | "branchId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch?: boolean | Prisma.User$branchArgs<ExtArgs>;
    addresses?: boolean | Prisma.User$addressesArgs<ExtArgs>;
    deviceTokens?: boolean | Prisma.User$deviceTokensArgs<ExtArgs>;
    ordersAsCustomer?: boolean | Prisma.User$ordersAsCustomerArgs<ExtArgs>;
    ordersAsStaff?: boolean | Prisma.User$ordersAsStaffArgs<ExtArgs>;
    ordersMarkedPaid?: boolean | Prisma.User$ordersMarkedPaidArgs<ExtArgs>;
    statusEventsMade?: boolean | Prisma.User$statusEventsMadeArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch?: boolean | Prisma.User$branchArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    branch?: boolean | Prisma.User$branchArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        branch: Prisma.$BranchPayload<ExtArgs> | null;
        addresses: Prisma.$AddressPayload<ExtArgs>[];
        deviceTokens: Prisma.$DeviceTokenPayload<ExtArgs>[];
        ordersAsCustomer: Prisma.$OrderPayload<ExtArgs>[];
        ordersAsStaff: Prisma.$OrderPayload<ExtArgs>[];
        ordersMarkedPaid: Prisma.$OrderPayload<ExtArgs>[];
        statusEventsMade: Prisma.$OrderStatusEventPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        phone: string;
        email: string | null;
        passwordHash: string;
        role: $Enums.Role;
        branchId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    branch<T extends Prisma.User$branchArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$branchArgs<ExtArgs>>): Prisma.Prisma__BranchClient<runtime.Types.Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    addresses<T extends Prisma.User$addressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    deviceTokens<T extends Prisma.User$deviceTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$deviceTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ordersAsCustomer<T extends Prisma.User$ordersAsCustomerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ordersAsCustomerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ordersAsStaff<T extends Prisma.User$ordersAsStaffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ordersAsStaffArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ordersMarkedPaid<T extends Prisma.User$ordersMarkedPaidArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ordersMarkedPaidArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    statusEventsMade<T extends Prisma.User$statusEventsMadeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$statusEventsMadeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderStatusEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly branchId: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$branchArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BranchSelect<ExtArgs> | null;
    omit?: Prisma.BranchOmit<ExtArgs> | null;
    include?: Prisma.BranchInclude<ExtArgs> | null;
    where?: Prisma.BranchWhereInput;
};
export type User$addressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where?: Prisma.AddressWhereInput;
    orderBy?: Prisma.AddressOrderByWithRelationInput | Prisma.AddressOrderByWithRelationInput[];
    cursor?: Prisma.AddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AddressScalarFieldEnum | Prisma.AddressScalarFieldEnum[];
};
export type User$deviceTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeviceTokenSelect<ExtArgs> | null;
    omit?: Prisma.DeviceTokenOmit<ExtArgs> | null;
    include?: Prisma.DeviceTokenInclude<ExtArgs> | null;
    where?: Prisma.DeviceTokenWhereInput;
    orderBy?: Prisma.DeviceTokenOrderByWithRelationInput | Prisma.DeviceTokenOrderByWithRelationInput[];
    cursor?: Prisma.DeviceTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeviceTokenScalarFieldEnum | Prisma.DeviceTokenScalarFieldEnum[];
};
export type User$ordersAsCustomerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$ordersAsStaffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$ordersMarkedPaidArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$statusEventsMadeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
