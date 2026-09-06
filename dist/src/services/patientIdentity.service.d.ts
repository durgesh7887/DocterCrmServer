import { Types } from "mongoose";
import type { Gender } from "../types/enums.js";
export declare function findPatientsByMobile(clinicId: Types.ObjectId, mobile: string): Promise<(import("mongoose").Document<unknown, {}, {
    name: string;
    clinicId: Types.ObjectId;
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
    familyId?: Types.ObjectId | null | undefined;
    mobileNumber?: string | null | undefined;
    dateOfBirth?: NativeDate | null | undefined;
    lastVisitAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    name: string;
    clinicId: Types.ObjectId;
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
    familyId?: Types.ObjectId | null | undefined;
    mobileNumber?: string | null | undefined;
    dateOfBirth?: NativeDate | null | undefined;
    lastVisitAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
})[]>;
export declare function searchPatients(params: {
    clinicId: Types.ObjectId;
    query?: string;
    familyId?: Types.ObjectId;
    limit?: number;
    skip?: number;
}): Promise<{
    items: (import("mongoose").FlattenMaps<{
        name: string;
        clinicId: Types.ObjectId;
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
        familyId?: Types.ObjectId | null | undefined;
        mobileNumber?: string | null | undefined;
        dateOfBirth?: NativeDate | null | undefined;
        lastVisitAt?: NativeDate | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }> & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[];
    total: number;
    limit: number;
    skip: number;
}>;
export declare function createPatient(params: {
    clinicId: Types.ObjectId;
    name: string;
    mobileNumber?: string | null;
    isMobileOwner?: boolean;
    gender?: Gender;
    dateOfBirth?: Date | null;
    familyId?: Types.ObjectId | null;
    actorUserId?: Types.ObjectId | null;
    allowDuplicateMobile?: boolean;
}): Promise<import("mongoose").Document<unknown, {}, {
    name: string;
    clinicId: Types.ObjectId;
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
    familyId?: Types.ObjectId | null | undefined;
    mobileNumber?: string | null | undefined;
    dateOfBirth?: NativeDate | null | undefined;
    lastVisitAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    name: string;
    clinicId: Types.ObjectId;
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
    familyId?: Types.ObjectId | null | undefined;
    mobileNumber?: string | null | undefined;
    dateOfBirth?: NativeDate | null | undefined;
    lastVisitAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare function createFamily(params: {
    clinicId: Types.ObjectId;
    name: string;
    primaryMobile?: string | null;
    actorUserId?: Types.ObjectId | null;
}): Promise<import("mongoose").Document<unknown, {}, {
    name: string;
    clinicId: Types.ObjectId;
    notes: string;
    primaryMobile?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    name: string;
    clinicId: Types.ObjectId;
    notes: string;
    primaryMobile?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
