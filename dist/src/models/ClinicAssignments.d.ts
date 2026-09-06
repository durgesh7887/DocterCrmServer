import { Schema, type InferSchemaType } from "mongoose";
declare const adminClinicAssignmentSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const doctorClinicAssignmentSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const receptionClinicAssignmentSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type AdminClinicAssignmentDocument = InferSchemaType<typeof adminClinicAssignmentSchema> & {
    _id: Schema.Types.ObjectId;
};
export type DoctorClinicAssignmentDocument = InferSchemaType<typeof doctorClinicAssignmentSchema> & {
    _id: Schema.Types.ObjectId;
};
export type ReceptionClinicAssignmentDocument = InferSchemaType<typeof receptionClinicAssignmentSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const AdminClinicAssignment: import("mongoose").Model<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const DoctorClinicAssignment: import("mongoose").Model<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const ReceptionClinicAssignment: import("mongoose").Model<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: import("mongoose").Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
