import { Schema, type InferSchemaType } from "mongoose";
declare const clinicSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
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
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
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
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
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
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type ClinicDocument = InferSchemaType<typeof clinicSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const Clinic: import("mongoose").Model<{
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
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
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
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
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
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
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
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
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
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
