import { Schema, type InferSchemaType } from "mongoose";
declare const appointmentSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "MISSED" | "SCHEDULED" | "CONFIRMED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    doctorId: import("mongoose").Types.ObjectId;
    appointmentDate: NativeDate;
    durationMinutes: number;
    visitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "MISSED" | "SCHEDULED" | "CONFIRMED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    doctorId: import("mongoose").Types.ObjectId;
    appointmentDate: NativeDate;
    durationMinutes: number;
    visitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "MISSED" | "SCHEDULED" | "CONFIRMED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    doctorId: import("mongoose").Types.ObjectId;
    appointmentDate: NativeDate;
    durationMinutes: number;
    visitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type AppointmentDocument = InferSchemaType<typeof appointmentSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const Appointment: import("mongoose").Model<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "MISSED" | "SCHEDULED" | "CONFIRMED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    doctorId: import("mongoose").Types.ObjectId;
    appointmentDate: NativeDate;
    durationMinutes: number;
    visitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "MISSED" | "SCHEDULED" | "CONFIRMED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    doctorId: import("mongoose").Types.ObjectId;
    appointmentDate: NativeDate;
    durationMinutes: number;
    visitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "MISSED" | "SCHEDULED" | "CONFIRMED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    doctorId: import("mongoose").Types.ObjectId;
    appointmentDate: NativeDate;
    durationMinutes: number;
    visitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "MISSED" | "SCHEDULED" | "CONFIRMED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    doctorId: import("mongoose").Types.ObjectId;
    appointmentDate: NativeDate;
    durationMinutes: number;
    visitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "MISSED" | "SCHEDULED" | "CONFIRMED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    doctorId: import("mongoose").Types.ObjectId;
    appointmentDate: NativeDate;
    durationMinutes: number;
    visitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "COMPLETED" | "CANCELLED" | "MISSED" | "SCHEDULED" | "CONFIRMED";
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    doctorId: import("mongoose").Types.ObjectId;
    appointmentDate: NativeDate;
    durationMinutes: number;
    visitId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
