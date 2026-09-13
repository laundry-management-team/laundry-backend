import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderNumberCounterModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderNumberCounterPayload>;
export type AggregateOrderNumberCounter = {
    _count: OrderNumberCounterCountAggregateOutputType | null;
    _avg: OrderNumberCounterAvgAggregateOutputType | null;
    _sum: OrderNumberCounterSumAggregateOutputType | null;
    _min: OrderNumberCounterMinAggregateOutputType | null;
    _max: OrderNumberCounterMaxAggregateOutputType | null;
};
export type OrderNumberCounterAvgAggregateOutputType = {
    id: number | null;
    current: number | null;
};
export type OrderNumberCounterSumAggregateOutputType = {
    id: number | null;
    current: bigint | null;
};
export type OrderNumberCounterMinAggregateOutputType = {
    id: number | null;
    current: bigint | null;
};
export type OrderNumberCounterMaxAggregateOutputType = {
    id: number | null;
    current: bigint | null;
};
export type OrderNumberCounterCountAggregateOutputType = {
    id: number;
    current: number;
    _all: number;
};
export type OrderNumberCounterAvgAggregateInputType = {
    id?: true;
    current?: true;
};
export type OrderNumberCounterSumAggregateInputType = {
    id?: true;
    current?: true;
};
export type OrderNumberCounterMinAggregateInputType = {
    id?: true;
    current?: true;
};
export type OrderNumberCounterMaxAggregateInputType = {
    id?: true;
    current?: true;
};
export type OrderNumberCounterCountAggregateInputType = {
    id?: true;
    current?: true;
    _all?: true;
};
export type OrderNumberCounterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderNumberCounterWhereInput;
    orderBy?: Prisma.OrderNumberCounterOrderByWithRelationInput | Prisma.OrderNumberCounterOrderByWithRelationInput[];
    cursor?: Prisma.OrderNumberCounterWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderNumberCounterCountAggregateInputType;
    _avg?: OrderNumberCounterAvgAggregateInputType;
    _sum?: OrderNumberCounterSumAggregateInputType;
    _min?: OrderNumberCounterMinAggregateInputType;
    _max?: OrderNumberCounterMaxAggregateInputType;
};
export type GetOrderNumberCounterAggregateType<T extends OrderNumberCounterAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderNumberCounter]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderNumberCounter[P]> : Prisma.GetScalarType<T[P], AggregateOrderNumberCounter[P]>;
};
export type OrderNumberCounterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderNumberCounterWhereInput;
    orderBy?: Prisma.OrderNumberCounterOrderByWithAggregationInput | Prisma.OrderNumberCounterOrderByWithAggregationInput[];
    by: Prisma.OrderNumberCounterScalarFieldEnum[] | Prisma.OrderNumberCounterScalarFieldEnum;
    having?: Prisma.OrderNumberCounterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderNumberCounterCountAggregateInputType | true;
    _avg?: OrderNumberCounterAvgAggregateInputType;
    _sum?: OrderNumberCounterSumAggregateInputType;
    _min?: OrderNumberCounterMinAggregateInputType;
    _max?: OrderNumberCounterMaxAggregateInputType;
};
export type OrderNumberCounterGroupByOutputType = {
    id: number;
    current: bigint;
    _count: OrderNumberCounterCountAggregateOutputType | null;
    _avg: OrderNumberCounterAvgAggregateOutputType | null;
    _sum: OrderNumberCounterSumAggregateOutputType | null;
    _min: OrderNumberCounterMinAggregateOutputType | null;
    _max: OrderNumberCounterMaxAggregateOutputType | null;
};
export type GetOrderNumberCounterGroupByPayload<T extends OrderNumberCounterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderNumberCounterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderNumberCounterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderNumberCounterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderNumberCounterGroupByOutputType[P]>;
}>>;
export type OrderNumberCounterWhereInput = {
    AND?: Prisma.OrderNumberCounterWhereInput | Prisma.OrderNumberCounterWhereInput[];
    OR?: Prisma.OrderNumberCounterWhereInput[];
    NOT?: Prisma.OrderNumberCounterWhereInput | Prisma.OrderNumberCounterWhereInput[];
    id?: Prisma.IntFilter<"OrderNumberCounter"> | number;
    current?: Prisma.BigIntFilter<"OrderNumberCounter"> | bigint | number;
};
export type OrderNumberCounterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    current?: Prisma.SortOrder;
};
export type OrderNumberCounterWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.OrderNumberCounterWhereInput | Prisma.OrderNumberCounterWhereInput[];
    OR?: Prisma.OrderNumberCounterWhereInput[];
    NOT?: Prisma.OrderNumberCounterWhereInput | Prisma.OrderNumberCounterWhereInput[];
    current?: Prisma.BigIntFilter<"OrderNumberCounter"> | bigint | number;
}, "id">;
export type OrderNumberCounterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    current?: Prisma.SortOrder;
    _count?: Prisma.OrderNumberCounterCountOrderByAggregateInput;
    _avg?: Prisma.OrderNumberCounterAvgOrderByAggregateInput;
    _max?: Prisma.OrderNumberCounterMaxOrderByAggregateInput;
    _min?: Prisma.OrderNumberCounterMinOrderByAggregateInput;
    _sum?: Prisma.OrderNumberCounterSumOrderByAggregateInput;
};
export type OrderNumberCounterScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderNumberCounterScalarWhereWithAggregatesInput | Prisma.OrderNumberCounterScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderNumberCounterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderNumberCounterScalarWhereWithAggregatesInput | Prisma.OrderNumberCounterScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"OrderNumberCounter"> | number;
    current?: Prisma.BigIntWithAggregatesFilter<"OrderNumberCounter"> | bigint | number;
};
export type OrderNumberCounterCreateInput = {
    id?: number;
    current?: bigint | number;
};
export type OrderNumberCounterUncheckedCreateInput = {
    id?: number;
    current?: bigint | number;
};
export type OrderNumberCounterUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    current?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type OrderNumberCounterUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    current?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type OrderNumberCounterCreateManyInput = {
    id?: number;
    current?: bigint | number;
};
export type OrderNumberCounterUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    current?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type OrderNumberCounterUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    current?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type OrderNumberCounterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    current?: Prisma.SortOrder;
};
export type OrderNumberCounterAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    current?: Prisma.SortOrder;
};
export type OrderNumberCounterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    current?: Prisma.SortOrder;
};
export type OrderNumberCounterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    current?: Prisma.SortOrder;
};
export type OrderNumberCounterSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    current?: Prisma.SortOrder;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type OrderNumberCounterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    current?: boolean;
}, ExtArgs["result"]["orderNumberCounter"]>;
export type OrderNumberCounterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    current?: boolean;
}, ExtArgs["result"]["orderNumberCounter"]>;
export type OrderNumberCounterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    current?: boolean;
}, ExtArgs["result"]["orderNumberCounter"]>;
export type OrderNumberCounterSelectScalar = {
    id?: boolean;
    current?: boolean;
};
export type OrderNumberCounterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "current", ExtArgs["result"]["orderNumberCounter"]>;
export type $OrderNumberCounterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderNumberCounter";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        current: bigint;
    }, ExtArgs["result"]["orderNumberCounter"]>;
    composites: {};
};
export type OrderNumberCounterGetPayload<S extends boolean | null | undefined | OrderNumberCounterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderNumberCounterPayload, S>;
export type OrderNumberCounterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderNumberCounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderNumberCounterCountAggregateInputType | true;
};
export interface OrderNumberCounterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderNumberCounter'];
        meta: {
            name: 'OrderNumberCounter';
        };
    };
    findUnique<T extends OrderNumberCounterFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderNumberCounterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderNumberCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderNumberCounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderNumberCounterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderNumberCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderNumberCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderNumberCounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderNumberCounterFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderNumberCounterFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderNumberCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderNumberCounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderNumberCounterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderNumberCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderNumberCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderNumberCounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderNumberCounterFindManyArgs>(args?: Prisma.SelectSubset<T, OrderNumberCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderNumberCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderNumberCounterCreateArgs>(args: Prisma.SelectSubset<T, OrderNumberCounterCreateArgs<ExtArgs>>): Prisma.Prisma__OrderNumberCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderNumberCounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderNumberCounterCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderNumberCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderNumberCounterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderNumberCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderNumberCounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderNumberCounterDeleteArgs>(args: Prisma.SelectSubset<T, OrderNumberCounterDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderNumberCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderNumberCounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderNumberCounterUpdateArgs>(args: Prisma.SelectSubset<T, OrderNumberCounterUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderNumberCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderNumberCounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderNumberCounterDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderNumberCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderNumberCounterUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderNumberCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderNumberCounterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderNumberCounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderNumberCounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderNumberCounterUpsertArgs>(args: Prisma.SelectSubset<T, OrderNumberCounterUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderNumberCounterClient<runtime.Types.Result.GetResult<Prisma.$OrderNumberCounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderNumberCounterCountArgs>(args?: Prisma.Subset<T, OrderNumberCounterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderNumberCounterCountAggregateOutputType> : number>;
    aggregate<T extends OrderNumberCounterAggregateArgs>(args: Prisma.Subset<T, OrderNumberCounterAggregateArgs>): Prisma.PrismaPromise<GetOrderNumberCounterAggregateType<T>>;
    groupBy<T extends OrderNumberCounterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderNumberCounterGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderNumberCounterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderNumberCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderNumberCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderNumberCounterFieldRefs;
}
export interface Prisma__OrderNumberCounterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderNumberCounterFieldRefs {
    readonly id: Prisma.FieldRef<"OrderNumberCounter", 'Int'>;
    readonly current: Prisma.FieldRef<"OrderNumberCounter", 'BigInt'>;
}
export type OrderNumberCounterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNumberCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderNumberCounterOmit<ExtArgs> | null;
    where: Prisma.OrderNumberCounterWhereUniqueInput;
};
export type OrderNumberCounterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNumberCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderNumberCounterOmit<ExtArgs> | null;
    where: Prisma.OrderNumberCounterWhereUniqueInput;
};
export type OrderNumberCounterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNumberCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderNumberCounterOmit<ExtArgs> | null;
    where?: Prisma.OrderNumberCounterWhereInput;
    orderBy?: Prisma.OrderNumberCounterOrderByWithRelationInput | Prisma.OrderNumberCounterOrderByWithRelationInput[];
    cursor?: Prisma.OrderNumberCounterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderNumberCounterScalarFieldEnum | Prisma.OrderNumberCounterScalarFieldEnum[];
};
export type OrderNumberCounterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNumberCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderNumberCounterOmit<ExtArgs> | null;
    where?: Prisma.OrderNumberCounterWhereInput;
    orderBy?: Prisma.OrderNumberCounterOrderByWithRelationInput | Prisma.OrderNumberCounterOrderByWithRelationInput[];
    cursor?: Prisma.OrderNumberCounterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderNumberCounterScalarFieldEnum | Prisma.OrderNumberCounterScalarFieldEnum[];
};
export type OrderNumberCounterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNumberCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderNumberCounterOmit<ExtArgs> | null;
    where?: Prisma.OrderNumberCounterWhereInput;
    orderBy?: Prisma.OrderNumberCounterOrderByWithRelationInput | Prisma.OrderNumberCounterOrderByWithRelationInput[];
    cursor?: Prisma.OrderNumberCounterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderNumberCounterScalarFieldEnum | Prisma.OrderNumberCounterScalarFieldEnum[];
};
export type OrderNumberCounterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNumberCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderNumberCounterOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.OrderNumberCounterCreateInput, Prisma.OrderNumberCounterUncheckedCreateInput>;
};
export type OrderNumberCounterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderNumberCounterCreateManyInput | Prisma.OrderNumberCounterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderNumberCounterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNumberCounterSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderNumberCounterOmit<ExtArgs> | null;
    data: Prisma.OrderNumberCounterCreateManyInput | Prisma.OrderNumberCounterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderNumberCounterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNumberCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderNumberCounterOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderNumberCounterUpdateInput, Prisma.OrderNumberCounterUncheckedUpdateInput>;
    where: Prisma.OrderNumberCounterWhereUniqueInput;
};
export type OrderNumberCounterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderNumberCounterUpdateManyMutationInput, Prisma.OrderNumberCounterUncheckedUpdateManyInput>;
    where?: Prisma.OrderNumberCounterWhereInput;
    limit?: number;
};
export type OrderNumberCounterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNumberCounterSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderNumberCounterOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderNumberCounterUpdateManyMutationInput, Prisma.OrderNumberCounterUncheckedUpdateManyInput>;
    where?: Prisma.OrderNumberCounterWhereInput;
    limit?: number;
};
export type OrderNumberCounterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNumberCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderNumberCounterOmit<ExtArgs> | null;
    where: Prisma.OrderNumberCounterWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderNumberCounterCreateInput, Prisma.OrderNumberCounterUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderNumberCounterUpdateInput, Prisma.OrderNumberCounterUncheckedUpdateInput>;
};
export type OrderNumberCounterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNumberCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderNumberCounterOmit<ExtArgs> | null;
    where: Prisma.OrderNumberCounterWhereUniqueInput;
};
export type OrderNumberCounterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderNumberCounterWhereInput;
    limit?: number;
};
export type OrderNumberCounterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderNumberCounterSelect<ExtArgs> | null;
    omit?: Prisma.OrderNumberCounterOmit<ExtArgs> | null;
};
