import { Schema, type InferSchemaType } from "mongoose";
declare const auditLogSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: {
        createdAt: true;
        updatedAt: false;
    };
    collection: string;
}, {
    action: string;
    module: "APPOINTMENT" | "AUTH" | "CLINIC" | "USER" | "ASSIGNMENT" | "PATIENT" | "FAMILY" | "VISIT" | "CONSULTATION" | "FOLLOWUP" | "SUBSCRIPTION" | "PAYMENT" | "SETTINGS" | "SYSTEM";
    recordType: string;
    metadata: any;
    ipAddress: string;
    userAgent: string;
    actorUserId?: import("mongoose").Types.ObjectId | null | undefined;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    recordId?: import("mongoose").Types.ObjectId | null | undefined;
    createdAt: NativeDate;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    action: string;
    module: "APPOINTMENT" | "AUTH" | "CLINIC" | "USER" | "ASSIGNMENT" | "PATIENT" | "FAMILY" | "VISIT" | "CONSULTATION" | "FOLLOWUP" | "SUBSCRIPTION" | "PAYMENT" | "SETTINGS" | "SYSTEM";
    recordType: string;
    metadata: any;
    ipAddress: string;
    userAgent: string;
    actorUserId?: import("mongoose").Types.ObjectId | null | undefined;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    recordId?: import("mongoose").Types.ObjectId | null | undefined;
    createdAt: NativeDate;
}>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: {
        createdAt: true;
        updatedAt: false;
    };
    collection: string;
}>> & import("mongoose").FlatRecord<{
    action: string;
    module: "APPOINTMENT" | "AUTH" | "CLINIC" | "USER" | "ASSIGNMENT" | "PATIENT" | "FAMILY" | "VISIT" | "CONSULTATION" | "FOLLOWUP" | "SUBSCRIPTION" | "PAYMENT" | "SETTINGS" | "SYSTEM";
    recordType: string;
    metadata: any;
    ipAddress: string;
    userAgent: string;
    actorUserId?: import("mongoose").Types.ObjectId | null | undefined;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    recordId?: import("mongoose").Types.ObjectId | null | undefined;
    createdAt: NativeDate;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type AuditLogDocument = InferSchemaType<typeof auditLogSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const AuditLog: import("mongoose").Model<{
    action: string;
    module: "APPOINTMENT" | "AUTH" | "CLINIC" | "USER" | "ASSIGNMENT" | "PATIENT" | "FAMILY" | "VISIT" | "CONSULTATION" | "FOLLOWUP" | "SUBSCRIPTION" | "PAYMENT" | "SETTINGS" | "SYSTEM";
    recordType: string;
    metadata: any;
    ipAddress: string;
    userAgent: string;
    actorUserId?: import("mongoose").Types.ObjectId | null | undefined;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    recordId?: import("mongoose").Types.ObjectId | null | undefined;
    createdAt: NativeDate;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    action: string;
    module: "APPOINTMENT" | "AUTH" | "CLINIC" | "USER" | "ASSIGNMENT" | "PATIENT" | "FAMILY" | "VISIT" | "CONSULTATION" | "FOLLOWUP" | "SUBSCRIPTION" | "PAYMENT" | "SETTINGS" | "SYSTEM";
    recordType: string;
    metadata: any;
    ipAddress: string;
    userAgent: string;
    actorUserId?: import("mongoose").Types.ObjectId | null | undefined;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    recordId?: import("mongoose").Types.ObjectId | null | undefined;
    createdAt: NativeDate;
}, {}, {
    timestamps: {
        createdAt: true;
        updatedAt: false;
    };
    collection: string;
}> & {
    action: string;
    module: "APPOINTMENT" | "AUTH" | "CLINIC" | "USER" | "ASSIGNMENT" | "PATIENT" | "FAMILY" | "VISIT" | "CONSULTATION" | "FOLLOWUP" | "SUBSCRIPTION" | "PAYMENT" | "SETTINGS" | "SYSTEM";
    recordType: string;
    metadata: any;
    ipAddress: string;
    userAgent: string;
    actorUserId?: import("mongoose").Types.ObjectId | null | undefined;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    recordId?: import("mongoose").Types.ObjectId | null | undefined;
    createdAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: {
        createdAt: true;
        updatedAt: false;
    };
    collection: string;
}, {
    action: string;
    module: "APPOINTMENT" | "AUTH" | "CLINIC" | "USER" | "ASSIGNMENT" | "PATIENT" | "FAMILY" | "VISIT" | "CONSULTATION" | "FOLLOWUP" | "SUBSCRIPTION" | "PAYMENT" | "SETTINGS" | "SYSTEM";
    recordType: string;
    metadata: any;
    ipAddress: string;
    userAgent: string;
    actorUserId?: import("mongoose").Types.ObjectId | null | undefined;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    recordId?: import("mongoose").Types.ObjectId | null | undefined;
    createdAt: NativeDate;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    action: string;
    module: "APPOINTMENT" | "AUTH" | "CLINIC" | "USER" | "ASSIGNMENT" | "PATIENT" | "FAMILY" | "VISIT" | "CONSULTATION" | "FOLLOWUP" | "SUBSCRIPTION" | "PAYMENT" | "SETTINGS" | "SYSTEM";
    recordType: string;
    metadata: any;
    ipAddress: string;
    userAgent: string;
    actorUserId?: import("mongoose").Types.ObjectId | null | undefined;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    recordId?: import("mongoose").Types.ObjectId | null | undefined;
    createdAt: NativeDate;
}>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: {
        createdAt: true;
        updatedAt: false;
    };
    collection: string;
}>> & import("mongoose").FlatRecord<{
    action: string;
    module: "APPOINTMENT" | "AUTH" | "CLINIC" | "USER" | "ASSIGNMENT" | "PATIENT" | "FAMILY" | "VISIT" | "CONSULTATION" | "FOLLOWUP" | "SUBSCRIPTION" | "PAYMENT" | "SETTINGS" | "SYSTEM";
    recordType: string;
    metadata: any;
    ipAddress: string;
    userAgent: string;
    actorUserId?: import("mongoose").Types.ObjectId | null | undefined;
    clinicId?: import("mongoose").Types.ObjectId | null | undefined;
    recordId?: import("mongoose").Types.ObjectId | null | undefined;
    createdAt: NativeDate;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
