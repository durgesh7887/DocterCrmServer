import type { UserRole } from "../types/enums.js";
import { hashPassword } from "../utils/password.js";
export { hashPassword };
export declare function createUser(params: {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    mobileNumber?: string;
    specialization?: string;
    registrationNumber?: string;
}): Promise<import("mongoose").Document<unknown, {}, {
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
}>;
export declare function createClinic(params: {
    name: string;
    ownerName: string;
    mobile: string;
    email: string;
    city?: string;
    state?: string;
    receptionEnabled?: boolean;
}): Promise<import("mongoose").Document<unknown, {}, {
    name: string;
    status: "ACTIVE" | "INACTIVE";
    ownerName: string;
    mobile: string;
    whatsappNumber: string;
    email: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
    };
    timezone: string;
    tax?: {
        gstin: string;
        pan: string;
        legalName: string;
    } | null | undefined;
    currentSubscriptionId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    name: string;
    status: "ACTIVE" | "INACTIVE";
    ownerName: string;
    mobile: string;
    whatsappNumber: string;
    email: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
    };
    timezone: string;
    tax?: {
        gstin: string;
        pan: string;
        legalName: string;
    } | null | undefined;
    currentSubscriptionId?: import("mongoose").Types.ObjectId | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
