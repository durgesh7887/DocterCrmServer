import { Schema, type InferSchemaType } from "mongoose";
declare const familySchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    primaryMobile?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    primaryMobile?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    primaryMobile?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type FamilyDocument = InferSchemaType<typeof familySchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const Family: import("mongoose").Model<{
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    primaryMobile?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    primaryMobile?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    primaryMobile?: string | null | undefined;
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
    primaryMobile?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    primaryMobile?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    name: string;
    clinicId: import("mongoose").Types.ObjectId;
    notes: string;
    primaryMobile?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
