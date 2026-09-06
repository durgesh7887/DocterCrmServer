import { Schema, type InferSchemaType } from "mongoose";
declare const refreshTokenSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    ipAddress: string;
    userAgent: string;
    userId: import("mongoose").Types.ObjectId;
    tokenHash: string;
    expiresAt: NativeDate;
    revokedAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    ipAddress: string;
    userAgent: string;
    userId: import("mongoose").Types.ObjectId;
    tokenHash: string;
    expiresAt: NativeDate;
    revokedAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    ipAddress: string;
    userAgent: string;
    userId: import("mongoose").Types.ObjectId;
    tokenHash: string;
    expiresAt: NativeDate;
    revokedAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type RefreshTokenDocument = InferSchemaType<typeof refreshTokenSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const RefreshToken: import("mongoose").Model<{
    ipAddress: string;
    userAgent: string;
    userId: import("mongoose").Types.ObjectId;
    tokenHash: string;
    expiresAt: NativeDate;
    revokedAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    ipAddress: string;
    userAgent: string;
    userId: import("mongoose").Types.ObjectId;
    tokenHash: string;
    expiresAt: NativeDate;
    revokedAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    ipAddress: string;
    userAgent: string;
    userId: import("mongoose").Types.ObjectId;
    tokenHash: string;
    expiresAt: NativeDate;
    revokedAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    ipAddress: string;
    userAgent: string;
    userId: import("mongoose").Types.ObjectId;
    tokenHash: string;
    expiresAt: NativeDate;
    revokedAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    ipAddress: string;
    userAgent: string;
    userId: import("mongoose").Types.ObjectId;
    tokenHash: string;
    expiresAt: NativeDate;
    revokedAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    ipAddress: string;
    userAgent: string;
    userId: import("mongoose").Types.ObjectId;
    tokenHash: string;
    expiresAt: NativeDate;
    revokedAt?: NativeDate | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
