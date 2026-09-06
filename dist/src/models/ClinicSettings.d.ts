import { Schema, type InferSchemaType } from "mongoose";
declare const clinicSettingsSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    receptionEnabled: boolean;
    appointmentsEnabled: boolean;
    followupsEnabled: boolean;
    whatsappEnabled: boolean;
    reportsEnabled: boolean;
    multipleDoctorsEnabled: boolean;
    subscriptionsEnabled: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    receptionEnabled: boolean;
    appointmentsEnabled: boolean;
    followupsEnabled: boolean;
    whatsappEnabled: boolean;
    reportsEnabled: boolean;
    multipleDoctorsEnabled: boolean;
    subscriptionsEnabled: boolean;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    receptionEnabled: boolean;
    appointmentsEnabled: boolean;
    followupsEnabled: boolean;
    whatsappEnabled: boolean;
    reportsEnabled: boolean;
    multipleDoctorsEnabled: boolean;
    subscriptionsEnabled: boolean;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type ClinicSettingsDocument = InferSchemaType<typeof clinicSettingsSchema> & {
    _id: Schema.Types.ObjectId;
};
export declare const ClinicSettings: import("mongoose").Model<{
    clinicId: import("mongoose").Types.ObjectId;
    receptionEnabled: boolean;
    appointmentsEnabled: boolean;
    followupsEnabled: boolean;
    whatsappEnabled: boolean;
    reportsEnabled: boolean;
    multipleDoctorsEnabled: boolean;
    subscriptionsEnabled: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    clinicId: import("mongoose").Types.ObjectId;
    receptionEnabled: boolean;
    appointmentsEnabled: boolean;
    followupsEnabled: boolean;
    whatsappEnabled: boolean;
    reportsEnabled: boolean;
    multipleDoctorsEnabled: boolean;
    subscriptionsEnabled: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    clinicId: import("mongoose").Types.ObjectId;
    receptionEnabled: boolean;
    appointmentsEnabled: boolean;
    followupsEnabled: boolean;
    whatsappEnabled: boolean;
    reportsEnabled: boolean;
    multipleDoctorsEnabled: boolean;
    subscriptionsEnabled: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    clinicId: import("mongoose").Types.ObjectId;
    receptionEnabled: boolean;
    appointmentsEnabled: boolean;
    followupsEnabled: boolean;
    whatsappEnabled: boolean;
    reportsEnabled: boolean;
    multipleDoctorsEnabled: boolean;
    subscriptionsEnabled: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    receptionEnabled: boolean;
    appointmentsEnabled: boolean;
    followupsEnabled: boolean;
    whatsappEnabled: boolean;
    reportsEnabled: boolean;
    multipleDoctorsEnabled: boolean;
    subscriptionsEnabled: boolean;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & import("mongoose").FlatRecord<{
    clinicId: import("mongoose").Types.ObjectId;
    receptionEnabled: boolean;
    appointmentsEnabled: boolean;
    followupsEnabled: boolean;
    whatsappEnabled: boolean;
    reportsEnabled: boolean;
    multipleDoctorsEnabled: boolean;
    subscriptionsEnabled: boolean;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export {};
