"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLE_PERMISSIONS = exports.DEFAULT_PERMISSIONS = void 0;
exports.DEFAULT_PERMISSIONS = [
    { key: "clinics.create", module: "CLINIC", description: "Create clinics" },
    { key: "clinics.read", module: "CLINIC", description: "Read clinics" },
    { key: "clinics.update", module: "CLINIC", description: "Update clinics" },
    { key: "clinics.activate", module: "CLINIC", description: "Activate or deactivate clinics" },
    { key: "users.manage", module: "USER", description: "Manage all users" },
    { key: "admins.manage", module: "USER", description: "Create and assign admins" },
    { key: "doctors.manage", module: "USER", description: "Create and assign doctors" },
    { key: "reception.manage", module: "USER", description: "Create and assign reception staff" },
    { key: "patients.read", module: "PATIENT", description: "Read patients" },
    { key: "patients.write", module: "PATIENT", description: "Create and update patients" },
    { key: "visits.write", module: "VISIT", description: "Create visits and consultations" },
    { key: "followups.write", module: "FOLLOWUP", description: "Manage follow-ups" },
    { key: "appointments.write", module: "APPOINTMENT", description: "Manage appointments" },
    { key: "reports.read", module: "SYSTEM", description: "Read reports" },
    { key: "payments.manage", module: "PAYMENT", description: "Manage subscriptions and payments" },
    { key: "audit.read", module: "SYSTEM", description: "Read audit logs" },
    { key: "settings.manage", module: "SETTINGS", description: "Manage system and clinic settings" },
];
exports.ROLE_PERMISSIONS = {
    SUPER_ADMIN: exports.DEFAULT_PERMISSIONS.map((permission) => permission.key),
    ADMIN: [
        "clinics.read",
        "patients.read",
        "patients.write",
        "visits.write",
        "followups.write",
        "appointments.write",
        "reports.read",
        "settings.manage",
        "doctors.manage",
        "reception.manage",
    ],
    RECEPTION: [
        "patients.read",
        "patients.write",
        "visits.write",
        "followups.write",
        "appointments.write",
        "reports.read",
    ],
    DOCTOR: [
        "clinics.read",
        "patients.read",
        "visits.write",
        "followups.write",
        "appointments.write",
        "reports.read",
    ],
};
//# sourceMappingURL=permissions.js.map