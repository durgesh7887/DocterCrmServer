import { Schema, type InferSchemaType } from "mongoose";
declare const paymentSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    method: string;
    subscriptionId: import("mongoose").Types.ObjectId;
    amount: number;
    paidAmount: number;
    status: "PAID" | "PENDING" | "OVERDUE" | "PARTIAL";
    dueDate: NativeDate;
    reference: string;
    notes: string;
    paidAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    method: string;
    subscriptionId: import("mongoose").Types.ObjectId;
    amount: number;
    paidAmount: number;
    status: "PAID" | "PENDING" | "OVERDUE" | "PARTIAL";
    dueDate: NativeDate;
    reference: string;
    notes: string;
    paidAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    method: string;
    subscriptionId: import("mongoose").Types.ObjectId;
    amount: number;
    paidAmount: number;
    status: "PAID" | "PENDING" | "OVERDUE" | "PARTIAL";
    dueDate: NativeDate;
    reference: string;
    notes: string;
    paidAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type PaymentDocument = InferSchemaType<typeof paymentSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const Payment: import("mongoose").Model<{
    clinicId: import("mongoose").Types.ObjectId;
    method: string;
    subscriptionId: import("mongoose").Types.ObjectId;
    amount: number;
    paidAmount: number;
    status: "PAID" | "PENDING" | "OVERDUE" | "PARTIAL";
    dueDate: NativeDate;
    reference: string;
    notes: string;
    paidAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    clinicId: import("mongoose").Types.ObjectId;
    method: string;
    subscriptionId: import("mongoose").Types.ObjectId;
    amount: number;
    paidAmount: number;
    status: "PAID" | "PENDING" | "OVERDUE" | "PARTIAL";
    dueDate: NativeDate;
    reference: string;
    notes: string;
    paidAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    clinicId: import("mongoose").Types.ObjectId;
    method: string;
    subscriptionId: import("mongoose").Types.ObjectId;
    amount: number;
    paidAmount: number;
    status: "PAID" | "PENDING" | "OVERDUE" | "PARTIAL";
    dueDate: NativeDate;
    reference: string;
    notes: string;
    paidAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    method: string;
    subscriptionId: import("mongoose").Types.ObjectId;
    amount: number;
    paidAmount: number;
    status: "PAID" | "PENDING" | "OVERDUE" | "PARTIAL";
    dueDate: NativeDate;
    reference: string;
    notes: string;
    paidAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    method: string;
    subscriptionId: import("mongoose").Types.ObjectId;
    amount: number;
    paidAmount: number;
    status: "PAID" | "PENDING" | "OVERDUE" | "PARTIAL";
    dueDate: NativeDate;
    reference: string;
    notes: string;
    paidAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    method: string;
    subscriptionId: import("mongoose").Types.ObjectId;
    amount: number;
    paidAmount: number;
    status: "PAID" | "PENDING" | "OVERDUE" | "PARTIAL";
    dueDate: NativeDate;
    reference: string;
    notes: string;
    paidAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
