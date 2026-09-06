import { Schema, type InferSchemaType } from "mongoose";
declare const roleSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    name: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    description: string;
    permissions: string[];
    isSystem: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    description: string;
    permissions: string[];
    isSystem: boolean;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    name: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    description: string;
    permissions: string[];
    isSystem: boolean;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type RoleDocument = InferSchemaType<typeof roleSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const Role: import("mongoose").Model<{
    name: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    description: string;
    permissions: string[];
    isSystem: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    name: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    description: string;
    permissions: string[];
    isSystem: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    name: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    description: string;
    permissions: string[];
    isSystem: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    name: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    description: string;
    permissions: string[];
    isSystem: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    description: string;
    permissions: string[];
    isSystem: boolean;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    name: "SUPER_ADMIN" | "ADMIN" | "RECEPTION" | "DOCTOR";
    description: string;
    permissions: string[];
    isSystem: boolean;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
