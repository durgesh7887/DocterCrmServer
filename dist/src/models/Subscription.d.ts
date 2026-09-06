import { Schema, type InferSchemaType } from "mongoose";
declare const subscriptionSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    amount: number;
    status: "ACTIVE" | "CANCELLED" | "TRIAL" | "PAST_DUE" | "EXPIRED";
    notes: string;
    planName: string;
    planCode: string;
    billingCycle: "MONTHLY" | "QUARTERLY" | "YEARLY";
    startDate: NativeDate;
    nextDueDate: NativeDate;
    endDate?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    amount: number;
    status: "ACTIVE" | "CANCELLED" | "TRIAL" | "PAST_DUE" | "EXPIRED";
    notes: string;
    planName: string;
    planCode: string;
    billingCycle: "MONTHLY" | "QUARTERLY" | "YEARLY";
    startDate: NativeDate;
    nextDueDate: NativeDate;
    endDate?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    amount: number;
    status: "ACTIVE" | "CANCELLED" | "TRIAL" | "PAST_DUE" | "EXPIRED";
    notes: string;
    planName: string;
    planCode: string;
    billingCycle: "MONTHLY" | "QUARTERLY" | "YEARLY";
    startDate: NativeDate;
    nextDueDate: NativeDate;
    endDate?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type SubscriptionDocument = InferSchemaType<typeof subscriptionSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const Subscription: import("mongoose").Model<{
    clinicId: import("mongoose").Types.ObjectId;
    amount: number;
    status: "ACTIVE" | "CANCELLED" | "TRIAL" | "PAST_DUE" | "EXPIRED";
    notes: string;
    planName: string;
    planCode: string;
    billingCycle: "MONTHLY" | "QUARTERLY" | "YEARLY";
    startDate: NativeDate;
    nextDueDate: NativeDate;
    endDate?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    clinicId: import("mongoose").Types.ObjectId;
    amount: number;
    status: "ACTIVE" | "CANCELLED" | "TRIAL" | "PAST_DUE" | "EXPIRED";
    notes: string;
    planName: string;
    planCode: string;
    billingCycle: "MONTHLY" | "QUARTERLY" | "YEARLY";
    startDate: NativeDate;
    nextDueDate: NativeDate;
    endDate?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    clinicId: import("mongoose").Types.ObjectId;
    amount: number;
    status: "ACTIVE" | "CANCELLED" | "TRIAL" | "PAST_DUE" | "EXPIRED";
    notes: string;
    planName: string;
    planCode: string;
    billingCycle: "MONTHLY" | "QUARTERLY" | "YEARLY";
    startDate: NativeDate;
    nextDueDate: NativeDate;
    endDate?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    amount: number;
    status: "ACTIVE" | "CANCELLED" | "TRIAL" | "PAST_DUE" | "EXPIRED";
    notes: string;
    planName: string;
    planCode: string;
    billingCycle: "MONTHLY" | "QUARTERLY" | "YEARLY";
    startDate: NativeDate;
    nextDueDate: NativeDate;
    endDate?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    amount: number;
    status: "ACTIVE" | "CANCELLED" | "TRIAL" | "PAST_DUE" | "EXPIRED";
    notes: string;
    planName: string;
    planCode: string;
    billingCycle: "MONTHLY" | "QUARTERLY" | "YEARLY";
    startDate: NativeDate;
    nextDueDate: NativeDate;
    endDate?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    amount: number;
    status: "ACTIVE" | "CANCELLED" | "TRIAL" | "PAST_DUE" | "EXPIRED";
    notes: string;
    planName: string;
    planCode: string;
    billingCycle: "MONTHLY" | "QUARTERLY" | "YEARLY";
    startDate: NativeDate;
    nextDueDate: NativeDate;
    endDate?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
