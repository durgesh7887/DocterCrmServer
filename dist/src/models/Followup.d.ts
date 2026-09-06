import { Schema, type InferSchemaType } from "mongoose";
declare const followupSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "UPCOMING" | "DUE" | "MISSED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    followupDate: NativeDate;
    followUpAfterDays: number;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    consultationId?: import("mongoose").Types.ObjectId | null | undefined;
    completedAt?: NativeDate | null | undefined;
    completedVisitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "UPCOMING" | "DUE" | "MISSED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    followupDate: NativeDate;
    followUpAfterDays: number;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    consultationId?: import("mongoose").Types.ObjectId | null | undefined;
    completedAt?: NativeDate | null | undefined;
    completedVisitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "UPCOMING" | "DUE" | "MISSED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    followupDate: NativeDate;
    followUpAfterDays: number;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    consultationId?: import("mongoose").Types.ObjectId | null | undefined;
    completedAt?: NativeDate | null | undefined;
    completedVisitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type FollowupDocument = InferSchemaType<typeof followupSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const Followup: import("mongoose").Model<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "UPCOMING" | "DUE" | "MISSED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    followupDate: NativeDate;
    followUpAfterDays: number;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    consultationId?: import("mongoose").Types.ObjectId | null | undefined;
    completedAt?: NativeDate | null | undefined;
    completedVisitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "UPCOMING" | "DUE" | "MISSED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    followupDate: NativeDate;
    followUpAfterDays: number;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    consultationId?: import("mongoose").Types.ObjectId | null | undefined;
    completedAt?: NativeDate | null | undefined;
    completedVisitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "UPCOMING" | "DUE" | "MISSED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    followupDate: NativeDate;
    followUpAfterDays: number;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    consultationId?: import("mongoose").Types.ObjectId | null | undefined;
    completedAt?: NativeDate | null | undefined;
    completedVisitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "UPCOMING" | "DUE" | "MISSED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    followupDate: NativeDate;
    followUpAfterDays: number;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    consultationId?: import("mongoose").Types.ObjectId | null | undefined;
    completedAt?: NativeDate | null | undefined;
    completedVisitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "UPCOMING" | "DUE" | "MISSED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    followupDate: NativeDate;
    followUpAfterDays: number;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    consultationId?: import("mongoose").Types.ObjectId | null | undefined;
    completedAt?: NativeDate | null | undefined;
    completedVisitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "UPCOMING" | "DUE" | "MISSED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    followupDate: NativeDate;
    followUpAfterDays: number;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    consultationId?: import("mongoose").Types.ObjectId | null | undefined;
    completedAt?: NativeDate | null | undefined;
    completedVisitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
