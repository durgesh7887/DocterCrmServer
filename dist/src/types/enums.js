"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUDIT_MODULES = exports.WHATSAPP_MESSAGE_STATUSES = exports.NOTIFICATION_STATUSES = exports.NOTIFICATION_CHANNELS = exports.PAYMENT_STATUSES = exports.SUBSCRIPTION_STATUSES = exports.BILLING_CYCLES = exports.APPOINTMENT_STATUSES = exports.FOLLOWUP_STATUSES = exports.VISIT_STATUSES = exports.VISIT_TYPES = exports.GENDERS = exports.CLINIC_STATUSES = exports.USER_STATUSES = exports.USER_ROLES = void 0;
exports.USER_ROLES = ["SUPER_ADMIN", "ADMIN", "RECEPTION", "DOCTOR"];
exports.USER_STATUSES = ["ACTIVE", "INACTIVE", "SUSPENDED"];
exports.CLINIC_STATUSES = ["ACTIVE", "INACTIVE"];
exports.GENDERS = ["MALE", "FEMALE", "OTHER", "UNSPECIFIED"];
exports.VISIT_TYPES = ["WALK_IN", "FOLLOW_UP", "APPOINTMENT"];
exports.VISIT_STATUSES = ["OPEN", "COMPLETED", "CANCELLED"];
exports.FOLLOWUP_STATUSES = [
    "UPCOMING",
    "DUE",
    "COMPLETED",
    "MISSED",
    "CANCELLED",
];
exports.APPOINTMENT_STATUSES = [
    "SCHEDULED",
    "CONFIRMED",
    "COMPLETED",
    "CANCELLED",
    "MISSED",
];
exports.BILLING_CYCLES = ["MONTHLY", "QUARTERLY", "YEARLY"];
exports.SUBSCRIPTION_STATUSES = [
    "TRIAL",
    "ACTIVE",
    "PAST_DUE",
    "EXPIRED",
    "CANCELLED",
];
exports.PAYMENT_STATUSES = ["PAID", "PENDING", "OVERDUE", "PARTIAL"];
exports.NOTIFICATION_CHANNELS = ["WHATSAPP", "EMAIL", "SMS", "IN_APP"];
exports.NOTIFICATION_STATUSES = [
    "QUEUED",
    "SENT",
    "FAILED",
    "CANCELLED",
];
exports.WHATSAPP_MESSAGE_STATUSES = [
    "QUEUED",
    "SENT",
    "DELIVERED",
    "READ",
    "FAILED",
];
exports.AUDIT_MODULES = [
    "AUTH",
    "CLINIC",
    "USER",
    "ASSIGNMENT",
    "PATIENT",
    "FAMILY",
    "VISIT",
    "CONSULTATION",
    "FOLLOWUP",
    "APPOINTMENT",
    "SUBSCRIPTION",
    "PAYMENT",
    "SETTINGS",
    "SYSTEM",
];
//# sourceMappingURL=enums.js.map