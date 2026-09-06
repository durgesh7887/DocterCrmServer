import { Types } from "mongoose";
import type { VisitType } from "../types/enums.js";
export declare function createVisit(params: {
    clinicId: Types.ObjectId;
    patientId: Types.ObjectId;
    doctorId?: Types.ObjectId | null;
    visitDate?: Date;
    visitType?: VisitType;
    chiefComplaint?: string;
    appointmentId?: Types.ObjectId | null;
    actorUserId?: Types.ObjectId | null;
}): Promise<import("mongoose").Document<unknown, {}, {
    clinicId: Types.ObjectId;
    status: "OPEN" | "COMPLETED" | "CANCELLED";
    patientId: Types.ObjectId;
    visitCode: string;
    visitDate: NativeDate;
    visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
    chiefComplaint: string;
    doctorId?: Types.ObjectId | null | undefined;
    appointmentId?: Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    clinicId: Types.ObjectId;
    status: "OPEN" | "COMPLETED" | "CANCELLED";
    patientId: Types.ObjectId;
    visitCode: string;
    visitDate: NativeDate;
    visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
    chiefComplaint: string;
    doctorId?: Types.ObjectId | null | undefined;
    appointmentId?: Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare function createConsultationWithFollowup(params: {
    clinicId: Types.ObjectId;
    patientId: Types.ObjectId;
    visitId: Types.ObjectId;
    doctorId?: Types.ObjectId | null;
    chiefComplaint?: string;
    symptoms?: string[];
    problemDetails?: string;
    diagnosis?: string;
    notes?: string;
    followUpRequired?: boolean;
    followUpAfterDays?: number | null;
    actorUserId?: Types.ObjectId | null;
    now?: Date;
}): Promise<{
    consultation: import("mongoose").Document<unknown, {}, {
        clinicId: Types.ObjectId;
        notes: string;
        patientId: Types.ObjectId;
        visitId: Types.ObjectId;
        chiefComplaint: string;
        symptoms: string[];
        problemDetails: string;
        diagnosis: string;
        followUpRequired: boolean;
        doctorId?: Types.ObjectId | null | undefined;
        followUpAfterDays?: number | null | undefined;
        vitals?: {
            bloodPressure: string;
            pulse?: number | null | undefined;
            temperatureC?: number | null | undefined;
            weightKg?: number | null | undefined;
            heightCm?: number | null | undefined;
        } | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
        collection: string;
    }> & {
        clinicId: Types.ObjectId;
        notes: string;
        patientId: Types.ObjectId;
        visitId: Types.ObjectId;
        chiefComplaint: string;
        symptoms: string[];
        problemDetails: string;
        diagnosis: string;
        followUpRequired: boolean;
        doctorId?: Types.ObjectId | null | undefined;
        followUpAfterDays?: number | null | undefined;
        vitals?: {
            bloodPressure: string;
            pulse?: number | null | undefined;
            temperatureC?: number | null | undefined;
            weightKg?: number | null | undefined;
            heightCm?: number | null | undefined;
        } | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    };
    followup: (import("mongoose").Document<unknown, {}, {
        clinicId: Types.ObjectId;
        status: "COMPLETED" | "CANCELLED" | "UPCOMING" | "DUE" | "MISSED";
        notes: string;
        patientId: Types.ObjectId;
        visitId: Types.ObjectId;
        followupDate: NativeDate;
        followUpAfterDays: number;
        doctorId?: Types.ObjectId | null | undefined;
        consultationId?: Types.ObjectId | null | undefined;
        completedAt?: NativeDate | null | undefined;
        completedVisitId?: Types.ObjectId | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
        collection: string;
    }> & {
        clinicId: Types.ObjectId;
        status: "COMPLETED" | "CANCELLED" | "UPCOMING" | "DUE" | "MISSED";
        notes: string;
        patientId: Types.ObjectId;
        visitId: Types.ObjectId;
        followupDate: NativeDate;
        followUpAfterDays: number;
        doctorId?: Types.ObjectId | null | undefined;
        consultationId?: Types.ObjectId | null | undefined;
        completedAt?: NativeDate | null | undefined;
        completedVisitId?: Types.ObjectId | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }) | null;
}>;
