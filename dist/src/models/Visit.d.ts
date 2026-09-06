import { Schema, type InferSchemaType } from "mongoose";
declare const visitSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "OPEN" | "COMPLETED" | "CANCELLED";
    patientId: import("mongoose").Types.ObjectId;
    visitCode: string;
    visitDate: NativeDate;
    visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
    chiefComplaint: string;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    appointmentId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "OPEN" | "COMPLETED" | "CANCELLED";
    patientId: import("mongoose").Types.ObjectId;
    visitCode: string;
    visitDate: NativeDate;
    visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
    chiefComplaint: string;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    appointmentId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "OPEN" | "COMPLETED" | "CANCELLED";
    patientId: import("mongoose").Types.ObjectId;
    visitCode: string;
    visitDate: NativeDate;
    visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
    chiefComplaint: string;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    appointmentId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type VisitDocument = InferSchemaType<typeof visitSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const Visit: import("mongoose").Model<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "OPEN" | "COMPLETED" | "CANCELLED";
    patientId: import("mongoose").Types.ObjectId;
    visitCode: string;
    visitDate: NativeDate;
    visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
    chiefComplaint: string;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    appointmentId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "OPEN" | "COMPLETED" | "CANCELLED";
    patientId: import("mongoose").Types.ObjectId;
    visitCode: string;
    visitDate: NativeDate;
    visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
    chiefComplaint: string;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    appointmentId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    clinicId: import("mongoose").Types.ObjectId;
    status: "OPEN" | "COMPLETED" | "CANCELLED";
    patientId: import("mongoose").Types.ObjectId;
    visitCode: string;
    visitDate: NativeDate;
    visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
    chiefComplaint: string;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    appointmentId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "OPEN" | "COMPLETED" | "CANCELLED";
    patientId: import("mongoose").Types.ObjectId;
    visitCode: string;
    visitDate: NativeDate;
    visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
    chiefComplaint: string;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    appointmentId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "OPEN" | "COMPLETED" | "CANCELLED";
    patientId: import("mongoose").Types.ObjectId;
    visitCode: string;
    visitDate: NativeDate;
    visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
    chiefComplaint: string;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    appointmentId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "OPEN" | "COMPLETED" | "CANCELLED";
    patientId: import("mongoose").Types.ObjectId;
    visitCode: string;
    visitDate: NativeDate;
    visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
    chiefComplaint: string;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    appointmentId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
