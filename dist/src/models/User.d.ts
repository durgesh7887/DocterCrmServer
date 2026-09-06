import { Schema, type InferSchemaType } from "mongoose";
declare const userSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    name: string;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    email: string;
    passwordHash: string;
    role: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    mobileNumber?: string | null | undefined;
    lastLoginAt?: NativeDate | null | undefined;
    doctorProfile?: {
        specialization: string;
        registrationNumber: string;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name: string;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    email: string;
    passwordHash: string;
    role: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    mobileNumber?: string | null | undefined;
    lastLoginAt?: NativeDate | null | undefined;
    doctorProfile?: {
        specialization: string;
        registrationNumber: string;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    name: string;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    email: string;
    passwordHash: string;
    role: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    mobileNumber?: string | null | undefined;
    lastLoginAt?: NativeDate | null | undefined;
    doctorProfile?: {
        specialization: string;
        registrationNumber: string;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type UserDocument = InferSchemaType<typeof userSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const User: import("mongoose").Model<{
    name: string;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    email: string;
    passwordHash: string;
    role: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    mobileNumber?: string | null | undefined;
    lastLoginAt?: NativeDate | null | undefined;
    doctorProfile?: {
        specialization: string;
        registrationNumber: string;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    name: string;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    email: string;
    passwordHash: string;
    role: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    mobileNumber?: string | null | undefined;
    lastLoginAt?: NativeDate | null | undefined;
    doctorProfile?: {
        specialization: string;
        registrationNumber: string;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    name: string;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    email: string;
    passwordHash: string;
    role: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    mobileNumber?: string | null | undefined;
    lastLoginAt?: NativeDate | null | undefined;
    doctorProfile?: {
        specialization: string;
        registrationNumber: string;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    name: string;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    email: string;
    passwordHash: string;
    role: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    mobileNumber?: string | null | undefined;
    lastLoginAt?: NativeDate | null | undefined;
    doctorProfile?: {
        specialization: string;
        registrationNumber: string;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name: string;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    email: string;
    passwordHash: string;
    role: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    mobileNumber?: string | null | undefined;
    lastLoginAt?: NativeDate | null | undefined;
    doctorProfile?: {
        specialization: string;
        registrationNumber: string;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    name: string;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    email: string;
    passwordHash: string;
    role: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    mobileNumber?: string | null | undefined;
    lastLoginAt?: NativeDate | null | undefined;
    doctorProfile?: {
        specialization: string;
        registrationNumber: string;
    } | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
