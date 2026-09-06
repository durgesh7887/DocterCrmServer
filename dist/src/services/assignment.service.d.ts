import { Types } from "mongoose";
import type { UserRole } from "../types/enums.js";
export declare function assignUserToClinic(params: {
    role: Exclude<UserRole, "SUPER_ADMIN">;
    userId: Types.ObjectId;
    clinicId: Types.ObjectId;
    actorUserId?: Types.ObjectId | null;
    isPrimary?: boolean;
}): Promise<import("mongoose").Document<unknown, {}, {
    clinicId: Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
    collection: string;
}> & {
    clinicId: Types.ObjectId;
    status: "ACTIVE" | "INACTIVE";
    userId: Types.ObjectId;
    isPrimary: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare function getAssignedClinicIds(role: Exclude<UserRole, "SUPER_ADMIN">, userId: Types.ObjectId): Promise<Types.ObjectId[]>;
export declare function assertClinicAccess(assignedClinicIds: Types.ObjectId[], clinicId: Types.ObjectId): void;
export declare function getAccessibleClinicIds(role: UserRole, userId: Types.ObjectId): Promise<Types.ObjectId[]>;
