export type Phase1SeedResult = Awaited<ReturnType<typeof seedPhase1Scenario>>;
export declare function seedPhase1Scenario(password?: string): Promise<{
    superAdmin: import("mongoose").Document<unknown, {}, {
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
    };
    clinicA: import("mongoose").Document<unknown, {}, {
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
    };
    clinicB: import("mongoose").Document<unknown, {}, {
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
    };
    adminA: import("mongoose").Document<unknown, {}, {
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
    };
    adminB: import("mongoose").Document<unknown, {}, {
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
    };
    doctorA: import("mongoose").Document<unknown, {}, {
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
    };
    receptionA: import("mongoose").Document<unknown, {}, {
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
    };
    family: import("mongoose").Document<unknown, {}, {
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
    };
    father: import("mongoose").Document<unknown, {}, {
        name: string;
        clinicId: import("mongoose").Types.ObjectId;
        notes: string;
        email: string;
        address: {
            line1: string;
            line2: string;
            city: string;
            state: string;
            pincode: string;
            country: string;
        };
        patientCode: string;
        nameNormalized: string;
        isMobileOwner: boolean;
        gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
        bloodGroup: string;
        familyId?: import("mongoose").Types.ObjectId | null | undefined;
        mobileNumber?: string | null | undefined;
        dateOfBirth?: NativeDate | null | undefined;
        lastVisitAt?: NativeDate | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
        collection: string;
    }> & {
        name: string;
        clinicId: import("mongoose").Types.ObjectId;
        notes: string;
        email: string;
        address: {
            line1: string;
            line2: string;
            city: string;
            state: string;
            pincode: string;
            country: string;
        };
        patientCode: string;
        nameNormalized: string;
        isMobileOwner: boolean;
        gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
        bloodGroup: string;
        familyId?: import("mongoose").Types.ObjectId | null | undefined;
        mobileNumber?: string | null | undefined;
        dateOfBirth?: NativeDate | null | undefined;
        lastVisitAt?: NativeDate | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    };
    daughter: import("mongoose").Document<unknown, {}, {
        name: string;
        clinicId: import("mongoose").Types.ObjectId;
        notes: string;
        email: string;
        address: {
            line1: string;
            line2: string;
            city: string;
            state: string;
            pincode: string;
            country: string;
        };
        patientCode: string;
        nameNormalized: string;
        isMobileOwner: boolean;
        gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
        bloodGroup: string;
        familyId?: import("mongoose").Types.ObjectId | null | undefined;
        mobileNumber?: string | null | undefined;
        dateOfBirth?: NativeDate | null | undefined;
        lastVisitAt?: NativeDate | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
        collection: string;
    }> & {
        name: string;
        clinicId: import("mongoose").Types.ObjectId;
        notes: string;
        email: string;
        address: {
            line1: string;
            line2: string;
            city: string;
            state: string;
            pincode: string;
            country: string;
        };
        patientCode: string;
        nameNormalized: string;
        isMobileOwner: boolean;
        gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
        bloodGroup: string;
        familyId?: import("mongoose").Types.ObjectId | null | undefined;
        mobileNumber?: string | null | undefined;
        dateOfBirth?: NativeDate | null | undefined;
        lastVisitAt?: NativeDate | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    };
    visit1: import("mongoose").Document<unknown, {}, {
        clinicId: import("mongoose").Types.ObjectId;
        status: "OPEN" | "COMPLETED" | "CANCELLED";
        patientId: import("mongoose").Types.ObjectId;
        visitCode: string;
        visitDate: NativeDate;
        visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
        chiefComplaint: string;
        doctorId?: import("mongoose").Types.ObjectId | null | undefined;
        appointmentId?: import("mongoose").Types.ObjectId | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
        collection: string;
    }> & {
        clinicId: import("mongoose").Types.ObjectId;
        status: "OPEN" | "COMPLETED" | "CANCELLED";
        patientId: import("mongoose").Types.ObjectId;
        visitCode: string;
        visitDate: NativeDate;
        visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
        chiefComplaint: string;
        doctorId?: import("mongoose").Types.ObjectId | null | undefined;
        appointmentId?: import("mongoose").Types.ObjectId | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    };
    visit2: import("mongoose").Document<unknown, {}, {
        clinicId: import("mongoose").Types.ObjectId;
        status: "OPEN" | "COMPLETED" | "CANCELLED";
        patientId: import("mongoose").Types.ObjectId;
        visitCode: string;
        visitDate: NativeDate;
        visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
        chiefComplaint: string;
        doctorId?: import("mongoose").Types.ObjectId | null | undefined;
        appointmentId?: import("mongoose").Types.ObjectId | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
        collection: string;
    }> & {
        clinicId: import("mongoose").Types.ObjectId;
        status: "OPEN" | "COMPLETED" | "CANCELLED";
        patientId: import("mongoose").Types.ObjectId;
        visitCode: string;
        visitDate: NativeDate;
        visitType: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT";
        chiefComplaint: string;
        doctorId?: import("mongoose").Types.ObjectId | null | undefined;
        appointmentId?: import("mongoose").Types.ObjectId | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    };
    followup: (import("mongoose").Document<unknown, {}, {
        clinicId: import("mongoose").Types.ObjectId;
        status: "COMPLETED" | "CANCELLED" | "UPCOMING" | "DUE" | "MISSED";
        notes: string;
        patientId: import("mongoose").Types.ObjectId;
        visitId: import("mongoose").Types.ObjectId;
        followupDate: NativeDate;
        followUpAfterDays: number;
        doctorId?: import("mongoose").Types.ObjectId | null | undefined;
        consultationId?: import("mongoose").Types.ObjectId | null | undefined;
        completedAt?: NativeDate | null | undefined;
        completedVisitId?: import("mongoose").Types.ObjectId | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
        collection: string;
    }> & {
        clinicId: import("mongoose").Types.ObjectId;
        status: "COMPLETED" | "CANCELLED" | "UPCOMING" | "DUE" | "MISSED";
        notes: string;
        patientId: import("mongoose").Types.ObjectId;
        visitId: import("mongoose").Types.ObjectId;
        followupDate: NativeDate;
        followUpAfterDays: number;
        doctorId?: import("mongoose").Types.ObjectId | null | undefined;
        consultationId?: import("mongoose").Types.ObjectId | null | undefined;
        completedAt?: NativeDate | null | undefined;
        completedVisitId?: import("mongoose").Types.ObjectId | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null;
    subscription: import("mongoose").Document<unknown, {}, {
        clinicId: import("mongoose").Types.ObjectId;
        amount: number;
        status: "ACTIVE" | "CANCELLED" | "TRIAL" | "PAST_DUE" | "EXPIRED";
        notes: string;
        planName: string;
        planCode: string;
        billingCycle: "MONTHLY" | "QUARTERLY" | "YEARLY";
        startDate: NativeDate;
        nextDueDate: NativeDate;
        endDate?: NativeDate | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
        collection: string;
    }> & {
        clinicId: import("mongoose").Types.ObjectId;
        amount: number;
        status: "ACTIVE" | "CANCELLED" | "TRIAL" | "PAST_DUE" | "EXPIRED";
        notes: string;
        planName: string;
        planCode: string;
        billingCycle: "MONTHLY" | "QUARTERLY" | "YEARLY";
        startDate: NativeDate;
        nextDueDate: NativeDate;
        endDate?: NativeDate | null | undefined;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    };
}>;
