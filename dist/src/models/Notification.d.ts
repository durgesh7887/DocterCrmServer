import { Schema, type InferSchemaType } from "mongoose";
declare const notificationSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    status: "CANCELLED" | "QUEUED" | "SENT" | "FAILED";
    channel: "WHATSAPP" | "EMAIL" | "SMS" | "IN_APP";
    templateKey: string;
    payload: any;
    errorMessage: string;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    userId?: import("mongoose").Types.ObjectId | null | undefined;
    scheduledFor?: NativeDate | null | undefined;
    sentAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    status: "CANCELLED" | "QUEUED" | "SENT" | "FAILED";
    channel: "WHATSAPP" | "EMAIL" | "SMS" | "IN_APP";
    templateKey: string;
    payload: any;
    errorMessage: string;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    userId?: import("mongoose").Types.ObjectId | null | undefined;
    scheduledFor?: NativeDate | null | undefined;
    sentAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    status: "CANCELLED" | "QUEUED" | "SENT" | "FAILED";
    channel: "WHATSAPP" | "EMAIL" | "SMS" | "IN_APP";
    templateKey: string;
    payload: any;
    errorMessage: string;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    userId?: import("mongoose").Types.ObjectId | null | undefined;
    scheduledFor?: NativeDate | null | undefined;
    sentAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type NotificationDocument = InferSchemaType<typeof notificationSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const Notification: import("mongoose").Model<{
    status: "CANCELLED" | "QUEUED" | "SENT" | "FAILED";
    channel: "WHATSAPP" | "EMAIL" | "SMS" | "IN_APP";
    templateKey: string;
    payload: any;
    errorMessage: string;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    userId?: import("mongoose").Types.ObjectId | null | undefined;
    scheduledFor?: NativeDate | null | undefined;
    sentAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    status: "CANCELLED" | "QUEUED" | "SENT" | "FAILED";
    channel: "WHATSAPP" | "EMAIL" | "SMS" | "IN_APP";
    templateKey: string;
    payload: any;
    errorMessage: string;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    userId?: import("mongoose").Types.ObjectId | null | undefined;
    scheduledFor?: NativeDate | null | undefined;
    sentAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    status: "CANCELLED" | "QUEUED" | "SENT" | "FAILED";
    channel: "WHATSAPP" | "EMAIL" | "SMS" | "IN_APP";
    templateKey: string;
    payload: any;
    errorMessage: string;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    userId?: import("mongoose").Types.ObjectId | null | undefined;
    scheduledFor?: NativeDate | null | undefined;
    sentAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    status: "CANCELLED" | "QUEUED" | "SENT" | "FAILED";
    channel: "WHATSAPP" | "EMAIL" | "SMS" | "IN_APP";
    templateKey: string;
    payload: any;
    errorMessage: string;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    userId?: import("mongoose").Types.ObjectId | null | undefined;
    scheduledFor?: NativeDate | null | undefined;
    sentAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    status: "CANCELLED" | "QUEUED" | "SENT" | "FAILED";
    channel: "WHATSAPP" | "EMAIL" | "SMS" | "IN_APP";
    templateKey: string;
    payload: any;
    errorMessage: string;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    userId?: import("mongoose").Types.ObjectId | null | undefined;
    scheduledFor?: NativeDate | null | undefined;
    sentAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    status: "CANCELLED" | "QUEUED" | "SENT" | "FAILED";
    channel: "WHATSAPP" | "EMAIL" | "SMS" | "IN_APP";
    templateKey: string;
    payload: any;
    errorMessage: string;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    userId?: import("mongoose").Types.ObjectId | null | undefined;
    scheduledFor?: NativeDate | null | undefined;
    sentAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
