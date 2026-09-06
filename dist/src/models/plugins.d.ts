import { Schema } from "mongoose";
export declare const addressSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
}, {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
}>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    _id: false;
}>> & import("mongoose").FlatRecord<{
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare function applySoftDelete(schema: Schema): void;
export declare function applyActorFields(schema: Schema): void;
