import { Schema, type InferSchemaType } from "mongoose";
declare const whatsappMessageSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "QUEUED" | "SENT" | "FAILED" | "DELIVERED" | "READ";
    templateKey: string;
    errorMessage: string;
    toMobile: string;
    body: string;
    providerMessageId: string;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    sentAt?: NativeDate | null | undefined;
    notificationId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "QUEUED" | "SENT" | "FAILED" | "DELIVERED" | "READ";
    templateKey: string;
    errorMessage: string;
    toMobile: string;
    body: string;
    providerMessageId: string;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    sentAt?: NativeDate | null | undefined;
    notificationId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "QUEUED" | "SENT" | "FAILED" | "DELIVERED" | "READ";
    templateKey: string;
    errorMessage: string;
    toMobile: string;
    body: string;
    providerMessageId: string;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    sentAt?: NativeDate | null | undefined;
    notificationId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type WhatsappMessageDocument = InferSchemaType<typeof whatsappMessageSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const WhatsappMessage: import("mongoose").Model<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "QUEUED" | "SENT" | "FAILED" | "DELIVERED" | "READ";
    templateKey: string;
    errorMessage: string;
    toMobile: string;
    body: string;
    providerMessageId: string;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    sentAt?: NativeDate | null | undefined;
    notificationId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "QUEUED" | "SENT" | "FAILED" | "DELIVERED" | "READ";
    templateKey: string;
    errorMessage: string;
    toMobile: string;
    body: string;
    providerMessageId: string;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    sentAt?: NativeDate | null | undefined;
    notificationId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    clinicId: import("mongoose").Types.ObjectId;
    status: "QUEUED" | "SENT" | "FAILED" | "DELIVERED" | "READ";
    templateKey: string;
    errorMessage: string;
    toMobile: string;
    body: string;
    providerMessageId: string;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    sentAt?: NativeDate | null | undefined;
    notificationId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "QUEUED" | "SENT" | "FAILED" | "DELIVERED" | "READ";
    templateKey: string;
    errorMessage: string;
    toMobile: string;
    body: string;
    providerMessageId: string;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    sentAt?: NativeDate | null | undefined;
    notificationId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "QUEUED" | "SENT" | "FAILED" | "DELIVERED" | "READ";
    templateKey: string;
    errorMessage: string;
    toMobile: string;
    body: string;
    providerMessageId: string;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    sentAt?: NativeDate | null | undefined;
    notificationId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "QUEUED" | "SENT" | "FAILED" | "DELIVERED" | "READ";
    templateKey: string;
    errorMessage: string;
    toMobile: string;
    body: string;
    providerMessageId: string;
    patientId?: import("mongoose").Types.ObjectId | null | undefined;
    sentAt?: NativeDate | null | undefined;
    notificationId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
