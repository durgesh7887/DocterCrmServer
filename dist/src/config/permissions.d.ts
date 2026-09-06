export declare const DEFAULT_PERMISSIONS: readonly [{
    readonly key: "clinics.create";
    readonly module: "CLINIC";
    readonly description: "Create clinics";
}, {
    readonly key: "clinics.read";
    readonly module: "CLINIC";
    readonly description: "Read clinics";
}, {
    readonly key: "clinics.update";
    readonly module: "CLINIC";
    readonly description: "Update clinics";
}, {
    readonly key: "clinics.activate";
    readonly module: "CLINIC";
    readonly description: "Activate or deactivate clinics";
}, {
    readonly key: "users.manage";
    readonly module: "USER";
    readonly description: "Manage all users";
}, {
    readonly key: "admins.manage";
    readonly module: "USER";
    readonly description: "Create and assign admins";
}, {
    readonly key: "doctors.manage";
    readonly module: "USER";
    readonly description: "Create and assign doctors";
}, {
    readonly key: "reception.manage";
    readonly module: "USER";
    readonly description: "Create and assign reception staff";
}, {
    readonly key: "patients.read";
    readonly module: "PATIENT";
    readonly description: "Read patients";
}, {
    readonly key: "patients.write";
    readonly module: "PATIENT";
    readonly description: "Create and update patients";
}, {
    readonly key: "visits.write";
    readonly module: "VISIT";
    readonly description: "Create visits and consultations";
}, {
    readonly key: "followups.write";
    readonly module: "FOLLOWUP";
    readonly description: "Manage follow-ups";
}, {
    readonly key: "appointments.write";
    readonly module: "APPOINTMENT";
    readonly description: "Manage appointments";
}, {
    readonly key: "reports.read";
    readonly module: "SYSTEM";
    readonly description: "Read reports";
}, {
    readonly key: "payments.manage";
    readonly module: "PAYMENT";
    readonly description: "Manage subscriptions and payments";
}, {
    readonly key: "audit.read";
    readonly module: "SYSTEM";
    readonly description: "Read audit logs";
}, {
    readonly key: "settings.manage";
    readonly module: "SETTINGS";
    readonly description: "Manage system and clinic settings";
}];
export declare const ROLE_PERMISSIONS: Record<string, readonly string[]>;
