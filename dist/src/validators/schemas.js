"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.followupCreateSchema = exports.paymentCreateSchema = exports.appointmentCreateSchema = exports.consultationCreateSchema = exports.visitCreateSchema = exports.patientCreateSchema = exports.passwordResetSchema = exports.userCreateSchema = exports.settingsUpdateSchema = exports.clinicUpdateSchema = exports.clinicCreateSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
});
exports.clinicCreateSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    ownerName: zod_1.z.string().min(2),
    mobile: zod_1.z.string().min(10),
    whatsappNumber: zod_1.z.string().optional(),
    email: zod_1.z.string().email(),
    city: zod_1.z.string().optional(),
    state: zod_1.z.string().optional(),
    gstin: zod_1.z.string().optional(),
    receptionEnabled: zod_1.z.boolean().optional(),
});
exports.clinicUpdateSchema = exports.clinicCreateSchema.partial();
exports.settingsUpdateSchema = zod_1.z.object({
    receptionEnabled: zod_1.z.boolean().optional(),
    appointmentsEnabled: zod_1.z.boolean().optional(),
    followupsEnabled: zod_1.z.boolean().optional(),
    whatsappEnabled: zod_1.z.boolean().optional(),
    reportsEnabled: zod_1.z.boolean().optional(),
    multipleDoctorsEnabled: zod_1.z.boolean().optional(),
    subscriptionsEnabled: zod_1.z.boolean().optional(),
});
exports.userCreateSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
    role: zod_1.z.enum(["ADMIN", "RECEPTION", "DOCTOR"]),
    mobileNumber: zod_1.z.string().optional(),
    clinicId: zod_1.z.string().optional(),
    specialization: zod_1.z.string().optional(),
    registrationNumber: zod_1.z.string().optional(),
});
exports.passwordResetSchema = zod_1.z.object({
    password: zod_1.z.string().min(8),
});
exports.patientCreateSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    mobileNumber: zod_1.z.string().optional(),
    gender: zod_1.z.enum(["MALE", "FEMALE", "OTHER", "UNSPECIFIED"]).optional(),
    dateOfBirth: zod_1.z.string().optional(),
    familyId: zod_1.z.string().nullable().optional(),
    isMobileOwner: zod_1.z.boolean().optional(),
    allowDuplicateMobile: zod_1.z.boolean().optional(),
    notes: zod_1.z.string().optional(),
});
exports.visitCreateSchema = zod_1.z.object({
    doctorId: zod_1.z.string().optional(),
    visitDate: zod_1.z.string().optional(),
    visitType: zod_1.z.enum(["WALK_IN", "FOLLOW_UP", "APPOINTMENT"]).optional(),
    chiefComplaint: zod_1.z.string().optional(),
});
exports.consultationCreateSchema = zod_1.z.object({
    patientId: zod_1.z.string(),
    doctorId: zod_1.z.string().optional(),
    chiefComplaint: zod_1.z.string().optional(),
    symptoms: zod_1.z.array(zod_1.z.string()).optional(),
    problemDetails: zod_1.z.string().optional(),
    diagnosis: zod_1.z.string().optional(),
    notes: zod_1.z.string().optional(),
    followUpRequired: zod_1.z.boolean().optional(),
    followUpAfterDays: zod_1.z.number().int().min(1).optional(),
});
exports.appointmentCreateSchema = zod_1.z.object({
    patientId: zod_1.z.string(),
    doctorId: zod_1.z.string(),
    appointmentDate: zod_1.z.string(),
    notes: zod_1.z.string().optional(),
    durationMinutes: zod_1.z.number().optional(),
});
exports.paymentCreateSchema = zod_1.z.object({
    clinicId: zod_1.z.string(),
    subscriptionId: zod_1.z.string(),
    amount: zod_1.z.number().min(0),
    paidAmount: zod_1.z.number().min(0),
    status: zod_1.z.enum(["PAID", "PENDING", "OVERDUE", "PARTIAL"]),
    dueDate: zod_1.z.string(),
    method: zod_1.z.string().optional(),
    reference: zod_1.z.string().optional(),
    notes: zod_1.z.string().optional(),
});
exports.followupCreateSchema = zod_1.z.object({
    patientId: zod_1.z.string(),
    visitId: zod_1.z.string(),
    doctorId: zod_1.z.string().optional(),
    followupDate: zod_1.z.string(),
    followUpAfterDays: zod_1.z.number().int().min(1).default(7),
    notes: zod_1.z.string().optional(),
});
//# sourceMappingURL=schemas.js.map