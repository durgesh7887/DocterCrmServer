import { Schema, type InferSchemaType } from "mongoose";
declare const consultationSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    chiefComplaint: string;
    symptoms: string[];
    problemDetails: string;
    diagnosis: string;
    followUpRequired: boolean;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    followUpAfterDays?: number | null | undefined;
    vitals?: {
        bloodPressure: string;
        pulse?: number | null | undefined;
        temperatureC?: number | null | undefined;
        weightKg?: number | null | undefined;
        heightCm?: number | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    chiefComplaint: string;
    symptoms: string[];
    problemDetails: string;
    diagnosis: string;
    followUpRequired: boolean;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    followUpAfterDays?: number | null | undefined;
    vitals?: {
        bloodPressure: string;
        pulse?: number | null | undefined;
        temperatureC?: number | null | undefined;
        weightKg?: number | null | undefined;
        heightCm?: number | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    chiefComplaint: string;
    symptoms: string[];
    problemDetails: string;
    diagnosis: string;
    followUpRequired: boolean;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    followUpAfterDays?: number | null | undefined;
    vitals?: {
        bloodPressure: string;
        pulse?: number | null | undefined;
        temperatureC?: number | null | undefined;
        weightKg?: number | null | undefined;
        heightCm?: number | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type ConsultationDocument = InferSchemaType<typeof consultationSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const Consultation: import("mongoose").Model<{
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    chiefComplaint: string;
    symptoms: string[];
    problemDetails: string;
    diagnosis: string;
    followUpRequired: boolean;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    followUpAfterDays?: number | null | undefined;
    vitals?: {
        bloodPressure: string;
        pulse?: number | null | undefined;
        temperatureC?: number | null | undefined;
        weightKg?: number | null | undefined;
        heightCm?: number | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    chiefComplaint: string;
    symptoms: string[];
    problemDetails: string;
    diagnosis: string;
    followUpRequired: boolean;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
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
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    chiefComplaint: string;
    symptoms: string[];
    problemDetails: string;
    diagnosis: string;
    followUpRequired: boolean;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    followUpAfterDays?: number | null | undefined;
    vitals?: {
        bloodPressure: string;
        pulse?: number | null | undefined;
        temperatureC?: number | null | undefined;
        weightKg?: number | null | undefined;
        heightCm?: number | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    chiefComplaint: string;
    symptoms: string[];
    problemDetails: string;
    diagnosis: string;
    followUpRequired: boolean;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    followUpAfterDays?: number | null | undefined;
    vitals?: {
        bloodPressure: string;
        pulse?: number | null | undefined;
        temperatureC?: number | null | undefined;
        weightKg?: number | null | undefined;
        heightCm?: number | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    chiefComplaint: string;
    symptoms: string[];
    problemDetails: string;
    diagnosis: string;
    followUpRequired: boolean;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    followUpAfterDays?: number | null | undefined;
    vitals?: {
        bloodPressure: string;
        pulse?: number | null | undefined;
        temperatureC?: number | null | undefined;
        weightKg?: number | null | undefined;
        heightCm?: number | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    patientId: import("mongoose").Types.ObjectId;
    visitId: import("mongoose").Types.ObjectId;
    chiefComplaint: string;
    symptoms: string[];
    problemDetails: string;
    diagnosis: string;
    followUpRequired: boolean;
    doctorId?: import("mongoose").Types.ObjectId | null | undefined;
    followUpAfterDays?: number | null | undefined;
    vitals?: {
        bloodPressure: string;
        pulse?: number | null | undefined;
        temperatureC?: number | null | undefined;
        weightKg?: number | null | undefined;
        heightCm?: number | null | undefined;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
