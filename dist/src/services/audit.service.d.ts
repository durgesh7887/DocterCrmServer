import { Types } from "mongoose";
import type { AuditModule } from "../types/enums.js";
type WriteAuditInput = {
    actorUserId?: Types.ObjectId | null;
    action: string;
    module: AuditModule;
    clinicId?: Types.ObjectId | null;
    recordType: string;
    recordId?: Types.ObjectId | null;
    metadata?: Record<string, unknown>;
    ipAddress?: string;
    userAgent?: string;
};
export declare function writeAuditLog(input: WriteAuditInput): Promise<import("mongoose").Document<unknown, {}, {
    action: string;
    module: "APPOINTMENT" | "AUTH" | "CLINIC" | "USER" | "ASSIGNMENT" | "PATIENT" | "FAMILY" | "VISIT" | "CONSULTATION" | "FOLLOWUP" | "SUBSCRIPTION" | "PAYMENT" | "SETTINGS" | "SYSTEM";
    recordType: string;
    metadata: any;
    ipAddress: string;
    userAgent: string;
    actorUserId?: Types.ObjectId | null | undefined;
    clinicId?: Types.ObjectId | null | undefined;
    recordId?: Types.ObjectId | null | undefined;
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
    actorUserId?: Types.ObjectId | null | undefined;
    clinicId?: Types.ObjectId | null | undefined;
    recordId?: Types.ObjectId | null | undefined;
    createdAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export {};
