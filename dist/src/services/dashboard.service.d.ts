import { Types } from "mongoose";
import { classifyFollowupStatus } from "./followup.service.js";
export declare function superAdminDashboard(): Promise<{
    totalClinics: number;
    activeClinics: number;
    inactiveClinics: number;
    totalPatients: number;
    totalDoctors: number;
    totalAdmins: number;
    totalReception: number;
    pendingFollowups: number;
    todayRange: {
        todayStart: Date;
        todayEnd: Date;
    };
    revenue: {
        total: any;
        pendingPayments: number;
        overduePayments: number;
    };
    recentPayments: (import("mongoose").FlattenMaps<{
        clinicId: Types.ObjectId;
        method: string;
        subscriptionId: Types.ObjectId;
        amount: number;
        paidAmount: number;
        status: "PAID" | "PENDING" | "OVERDUE" | "PARTIAL";
        dueDate: NativeDate;
        reference: string;
        notes: string;
        paidAt?: NativeDate | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }> & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[];
    recentClinics: (import("mongoose").FlattenMaps<{
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
        currentSubscriptionId?: Types.ObjectId | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }> & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[];
}>;
export declare function clinicDashboard(clinicId: Types.ObjectId): Promise<{
    totalPatients: number;
    todayPatients: number;
    todayAppointments: number;
    pendingAppointments: number;
    todayFollowups: number;
    doctors: number;
    receptionStaff: number;
}>;
export declare function followupMetrics(clinicId: Types.ObjectId): Promise<{
    today: number;
    pending: number;
    overdue: number;
    completed: number;
}>;
export { classifyFollowupStatus };
