import { z } from "zod";
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const clinicCreateSchema: z.ZodObject<{
    name: z.ZodString;
    ownerName: z.ZodString;
    mobile: z.ZodString;
    whatsappNumber: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    city: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    gstin: z.ZodOptional<z.ZodString>;
    receptionEnabled: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    ownerName: string;
    mobile: string;
    email: string;
    city?: string | undefined;
    state?: string | undefined;
    whatsappNumber?: string | undefined;
    gstin?: string | undefined;
    receptionEnabled?: boolean | undefined;
}, {
    name: string;
    ownerName: string;
    mobile: string;
    email: string;
    city?: string | undefined;
    state?: string | undefined;
    whatsappNumber?: string | undefined;
    gstin?: string | undefined;
    receptionEnabled?: boolean | undefined;
}>;
export declare const clinicUpdateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    ownerName: z.ZodOptional<z.ZodString>;
    mobile: z.ZodOptional<z.ZodString>;
    whatsappNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    email: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    state: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    gstin: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    receptionEnabled: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    ownerName?: string | undefined;
    mobile?: string | undefined;
    whatsappNumber?: string | undefined;
    email?: string | undefined;
    gstin?: string | undefined;
    receptionEnabled?: boolean | undefined;
}, {
    name?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    ownerName?: string | undefined;
    mobile?: string | undefined;
    whatsappNumber?: string | undefined;
    email?: string | undefined;
    gstin?: string | undefined;
    receptionEnabled?: boolean | undefined;
}>;
export declare const settingsUpdateSchema: z.ZodObject<{
    receptionEnabled: z.ZodOptional<z.ZodBoolean>;
    appointmentsEnabled: z.ZodOptional<z.ZodBoolean>;
    followupsEnabled: z.ZodOptional<z.ZodBoolean>;
    whatsappEnabled: z.ZodOptional<z.ZodBoolean>;
    reportsEnabled: z.ZodOptional<z.ZodBoolean>;
    multipleDoctorsEnabled: z.ZodOptional<z.ZodBoolean>;
    subscriptionsEnabled: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    receptionEnabled?: boolean | undefined;
    appointmentsEnabled?: boolean | undefined;
    followupsEnabled?: boolean | undefined;
    whatsappEnabled?: boolean | undefined;
    reportsEnabled?: boolean | undefined;
    multipleDoctorsEnabled?: boolean | undefined;
    subscriptionsEnabled?: boolean | undefined;
}, {
    receptionEnabled?: boolean | undefined;
    appointmentsEnabled?: boolean | undefined;
    followupsEnabled?: boolean | undefined;
    whatsappEnabled?: boolean | undefined;
    reportsEnabled?: boolean | undefined;
    multipleDoctorsEnabled?: boolean | undefined;
    subscriptionsEnabled?: boolean | undefined;
}>;
export declare const userCreateSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodEnum<["ADMIN", "RECEPTION", "DOCTOR"]>;
    mobileNumber: z.ZodOptional<z.ZodString>;
    clinicId: z.ZodOptional<z.ZodString>;
    specialization: z.ZodOptional<z.ZodString>;
    registrationNumber: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    role: "ADMIN" | "RECEPTION" | "DOCTOR";
    password: string;
    clinicId?: string | undefined;
    mobileNumber?: string | undefined;
    specialization?: string | undefined;
    registrationNumber?: string | undefined;
}, {
    name: string;
    email: string;
    role: "ADMIN" | "RECEPTION" | "DOCTOR";
    password: string;
    clinicId?: string | undefined;
    mobileNumber?: string | undefined;
    specialization?: string | undefined;
    registrationNumber?: string | undefined;
}>;
export declare const passwordResetSchema: z.ZodObject<{
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
}, {
    password: string;
}>;
export declare const patientCreateSchema: z.ZodObject<{
    name: z.ZodString;
    mobileNumber: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodEnum<["MALE", "FEMALE", "OTHER", "UNSPECIFIED"]>>;
    dateOfBirth: z.ZodOptional<z.ZodString>;
    familyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isMobileOwner: z.ZodOptional<z.ZodBoolean>;
    allowDuplicateMobile: z.ZodOptional<z.ZodBoolean>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    notes?: string | undefined;
    familyId?: string | null | undefined;
    mobileNumber?: string | undefined;
    isMobileOwner?: boolean | undefined;
    gender?: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED" | undefined;
    dateOfBirth?: string | undefined;
    allowDuplicateMobile?: boolean | undefined;
}, {
    name: string;
    notes?: string | undefined;
    familyId?: string | null | undefined;
    mobileNumber?: string | undefined;
    isMobileOwner?: boolean | undefined;
    gender?: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED" | undefined;
    dateOfBirth?: string | undefined;
    allowDuplicateMobile?: boolean | undefined;
}>;
export declare const visitCreateSchema: z.ZodObject<{
    doctorId: z.ZodOptional<z.ZodString>;
    visitDate: z.ZodOptional<z.ZodString>;
    visitType: z.ZodOptional<z.ZodEnum<["WALK_IN", "FOLLOW_UP", "APPOINTMENT"]>>;
    chiefComplaint: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    doctorId?: string | undefined;
    visitDate?: string | undefined;
    visitType?: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT" | undefined;
    chiefComplaint?: string | undefined;
}, {
    doctorId?: string | undefined;
    visitDate?: string | undefined;
    visitType?: "WALK_IN" | "FOLLOW_UP" | "APPOINTMENT" | undefined;
    chiefComplaint?: string | undefined;
}>;
export declare const consultationCreateSchema: z.ZodObject<{
    patientId: z.ZodString;
    doctorId: z.ZodOptional<z.ZodString>;
    chiefComplaint: z.ZodOptional<z.ZodString>;
    symptoms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    problemDetails: z.ZodOptional<z.ZodString>;
    diagnosis: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
    followUpRequired: z.ZodOptional<z.ZodBoolean>;
    followUpAfterDays: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    patientId: string;
    notes?: string | undefined;
    doctorId?: string | undefined;
    followUpAfterDays?: number | undefined;
    chiefComplaint?: string | undefined;
    symptoms?: string[] | undefined;
    problemDetails?: string | undefined;
    diagnosis?: string | undefined;
    followUpRequired?: boolean | undefined;
}, {
    patientId: string;
    notes?: string | undefined;
    doctorId?: string | undefined;
    followUpAfterDays?: number | undefined;
    chiefComplaint?: string | undefined;
    symptoms?: string[] | undefined;
    problemDetails?: string | undefined;
    diagnosis?: string | undefined;
    followUpRequired?: boolean | undefined;
}>;
export declare const appointmentCreateSchema: z.ZodObject<{
    patientId: z.ZodString;
    doctorId: z.ZodString;
    appointmentDate: z.ZodString;
    notes: z.ZodOptional<z.ZodString>;
    durationMinutes: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    patientId: string;
    doctorId: string;
    appointmentDate: string;
    notes?: string | undefined;
    durationMinutes?: number | undefined;
}, {
    patientId: string;
    doctorId: string;
    appointmentDate: string;
    notes?: string | undefined;
    durationMinutes?: number | undefined;
}>;
export declare const paymentCreateSchema: z.ZodObject<{
    clinicId: z.ZodString;
    subscriptionId: z.ZodString;
    amount: z.ZodNumber;
    paidAmount: z.ZodNumber;
    status: z.ZodEnum<["PAID", "PENDING", "OVERDUE", "PARTIAL"]>;
    dueDate: z.ZodString;
    method: z.ZodOptional<z.ZodString>;
    reference: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    clinicId: string;
    subscriptionId: string;
    amount: number;
    paidAmount: number;
    status: "PAID" | "PENDING" | "OVERDUE" | "PARTIAL";
    dueDate: string;
    method?: string | undefined;
    reference?: string | undefined;
    notes?: string | undefined;
}, {
    clinicId: string;
    subscriptionId: string;
    amount: number;
    paidAmount: number;
    status: "PAID" | "PENDING" | "OVERDUE" | "PARTIAL";
    dueDate: string;
    method?: string | undefined;
    reference?: string | undefined;
    notes?: string | undefined;
}>;
export declare const followupCreateSchema: z.ZodObject<{
    patientId: z.ZodString;
    visitId: z.ZodString;
    doctorId: z.ZodOptional<z.ZodString>;
    followupDate: z.ZodString;
    followUpAfterDays: z.ZodDefault<z.ZodNumber>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    patientId: string;
    visitId: string;
    followupDate: string;
    followUpAfterDays: number;
    notes?: string | undefined;
    doctorId?: string | undefined;
}, {
    patientId: string;
    visitId: string;
    followupDate: string;
    notes?: string | undefined;
    doctorId?: string | undefined;
    followUpAfterDays?: number | undefined;
}>;
