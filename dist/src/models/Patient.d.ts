import { Schema, type InferSchemaType } from "mongoose";
declare const patientSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    email: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
    };
    patientCode: string;
    nameNormalized: string;
    isMobileOwner: boolean;
    gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
    bloodGroup: string;
    familyId?: import("mongoose").Types.ObjectId | null | undefined;
    mobileNumber?: string | null | undefined;
    dateOfBirth?: NativeDate | null | undefined;
    lastVisitAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    email: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
    };
    patientCode: string;
    nameNormalized: string;
    isMobileOwner: boolean;
    gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
    bloodGroup: string;
    familyId?: import("mongoose").Types.ObjectId | null | undefined;
    mobileNumber?: string | null | undefined;
    dateOfBirth?: NativeDate | null | undefined;
    lastVisitAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    email: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
    };
    patientCode: string;
    nameNormalized: string;
    isMobileOwner: boolean;
    gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
    bloodGroup: string;
    familyId?: import("mongoose").Types.ObjectId | null | undefined;
    mobileNumber?: string | null | undefined;
    dateOfBirth?: NativeDate | null | undefined;
    lastVisitAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type PatientDocument = InferSchemaType<typeof patientSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const Patient: import("mongoose").Model<{
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    email: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
    };
    patientCode: string;
    nameNormalized: string;
    isMobileOwner: boolean;
    gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
    bloodGroup: string;
    familyId?: import("mongoose").Types.ObjectId | null | undefined;
    mobileNumber?: string | null | undefined;
    dateOfBirth?: NativeDate | null | undefined;
    lastVisitAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    email: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
    };
    patientCode: string;
    nameNormalized: string;
    isMobileOwner: boolean;
    gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
    bloodGroup: string;
    familyId?: import("mongoose").Types.ObjectId | null | undefined;
    mobileNumber?: string | null | undefined;
    dateOfBirth?: NativeDate | null | undefined;
    lastVisitAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    email: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
    };
    patientCode: string;
    nameNormalized: string;
    isMobileOwner: boolean;
    gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
    bloodGroup: string;
    familyId?: import("mongoose").Types.ObjectId | null | undefined;
    mobileNumber?: string | null | undefined;
    dateOfBirth?: NativeDate | null | undefined;
    lastVisitAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    email: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
    };
    patientCode: string;
    nameNormalized: string;
    isMobileOwner: boolean;
    gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
    bloodGroup: string;
    familyId?: import("mongoose").Types.ObjectId | null | undefined;
    mobileNumber?: string | null | undefined;
    dateOfBirth?: NativeDate | null | undefined;
    lastVisitAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    email: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
    };
    patientCode: string;
    nameNormalized: string;
    isMobileOwner: boolean;
    gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
    bloodGroup: string;
    familyId?: import("mongoose").Types.ObjectId | null | undefined;
    mobileNumber?: string | null | undefined;
    dateOfBirth?: NativeDate | null | undefined;
    lastVisitAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    email: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
    };
    patientCode: string;
    nameNormalized: string;
    isMobileOwner: boolean;
    gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
    bloodGroup: string;
    familyId?: import("mongoose").Types.ObjectId | null | undefined;
    mobileNumber?: string | null | undefined;
    dateOfBirth?: NativeDate | null | undefined;
    lastVisitAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
