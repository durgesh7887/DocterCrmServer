"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
const vitest_1 = require("vitest");
const database_js_1 = require("../src/config/database.js");
const seedPhase1_js_1 = require("../src/database/seedPhase1.js");
const Appointment_js_1 = require("../src/models/Appointment.js");
const AuditLog_js_1 = require("../src/models/AuditLog.js");
const ClinicSettings_js_1 = require("../src/models/ClinicSettings.js");
const Consultation_js_1 = require("../src/models/Consultation.js");
const Followup_js_1 = require("../src/models/Followup.js");
const Patient_js_1 = require("../src/models/Patient.js");
const Payment_js_1 = require("../src/models/Payment.js");
const Role_js_1 = require("../src/models/Role.js");
const User_js_1 = require("../src/models/User.js");
const Visit_js_1 = require("../src/models/Visit.js");
const assignment_service_js_1 = require("../src/services/assignment.service.js");
const patientIdentity_service_js_1 = require("../src/services/patientIdentity.service.js");
const followup_service_js_1 = require("../src/services/followup.service.js");
const visit_service_js_1 = require("../src/services/visit.service.js");
require("../src/models/index.js");
let mongod;
(0, vitest_1.beforeAll)(async () => {
    mongod = await mongodb_memory_server_1.MongoMemoryServer.create();
    await (0, database_js_1.connectDatabase)(mongod.getUri());
    await (0, database_js_1.syncIndexes)();
    await (0, seedPhase1_js_1.seedPhase1Scenario)();
});
(0, vitest_1.afterAll)(async () => {
    await (0, database_js_1.disconnectDatabase)();
    await mongod.stop();
});
(0, vitest_1.describe)("MedFlow Phase 1 database foundation", () => {
    (0, vitest_1.it)("seeds catalog, clinics, users, assignments, clinical data, payments and audit logs", async () => {
        (0, vitest_1.expect)(await Role_js_1.Role.countDocuments()).toBe(4);
        (0, vitest_1.expect)(await User_js_1.User.countDocuments({ isDeleted: false })).toBe(5);
        (0, vitest_1.expect)(await ClinicSettings_js_1.ClinicSettings.countDocuments()).toBe(2);
        (0, vitest_1.expect)(await AuditLog_js_1.AuditLog.countDocuments()).toBeGreaterThanOrEqual(3);
        (0, vitest_1.expect)(await Appointment_js_1.Appointment.countDocuments()).toBe(1);
        (0, vitest_1.expect)(await Payment_js_1.Payment.countDocuments()).toBe(2);
        const passwordOnDefaultQuery = await User_js_1.User.findOne({ email: "superadmin@medflow.local" });
        (0, vitest_1.expect)(passwordOnDefaultQuery?.passwordHash).toBeUndefined();
        const withSecret = await User_js_1.User.findOne({ email: "superadmin@medflow.local" }).select("+passwordHash");
        (0, vitest_1.expect)(withSecret?.passwordHash).toMatch(/^\$2[aby]\$/);
        (0, vitest_1.expect)(withSecret?.passwordHash).not.toContain("ChangeMe!MedFlow1");
        const followup = await Followup_js_1.Followup.findOne({ followUpAfterDays: 7 });
        const father = await Patient_js_1.Patient.findOne({ name: "Ramesh Sharma" });
        const daughter = await Patient_js_1.Patient.findOne({ name: "Ananya Sharma" });
        (0, vitest_1.expect)(followup?.followupDate.toISOString().startsWith("2026-08-16")).toBe(true);
        (0, vitest_1.expect)(followup?.status).toBe("UPCOMING");
        (0, vitest_1.expect)(father?._id.equals(daughter._id)).toBe(false);
        (0, vitest_1.expect)(father?.familyId).toBeTruthy();
        (0, vitest_1.expect)(father?.familyId?.equals(daughter.familyId)).toBe(true);
    });
    (0, vitest_1.it)("does not create a duplicate patient on repeat mobile lookup; preserves visit history", async () => {
        const clinicA = await mongoose_1.default.model("Clinic").findOne({ name: "MedFlow Clinic A" });
        const matches = await (0, patientIdentity_service_js_1.findPatientsByMobile)(clinicA._id, "+91 98765 43210");
        (0, vitest_1.expect)(matches.map((patient) => patient.name).sort()).toEqual(["Ananya Sharma", "Ramesh Sharma"]);
        const primary = matches.find((patient) => patient.isMobileOwner);
        (0, vitest_1.expect)(primary?.name).toBe("Ramesh Sharma");
        await (0, vitest_1.expect)((0, patientIdentity_service_js_1.createPatient)({
            clinicId: clinicA._id,
            name: "Duplicate Ramesh",
            mobileNumber: "9876543210",
        })).rejects.toThrow(/already exists/);
        const visits = await Visit_js_1.Visit.find({ clinicId: clinicA._id, patientId: primary._id, isDeleted: false }).sort({
            visitDate: 1,
        });
        (0, vitest_1.expect)(visits).toHaveLength(2);
        (0, vitest_1.expect)(visits[0]?.visitCode).not.toBe(visits[1]?.visitCode);
        const consultations = await Consultation_js_1.Consultation.find({ patientId: primary._id, isDeleted: false });
        (0, vitest_1.expect)(consultations).toHaveLength(2);
    });
    (0, vitest_1.it)("keeps clinic data isolated by clinicId and assignment", async () => {
        const clinicA = await mongoose_1.default.model("Clinic").findOne({ name: "MedFlow Clinic A" });
        const clinicB = await mongoose_1.default.model("Clinic").findOne({ name: "MedFlow Clinic B" });
        const adminA = await User_js_1.User.findOne({ email: "admin.a@medflow.local" });
        const adminB = await User_js_1.User.findOne({ email: "admin.b@medflow.local" });
        const adminAClinics = await (0, assignment_service_js_1.getAssignedClinicIds)("ADMIN", adminA._id);
        const adminBClinics = await (0, assignment_service_js_1.getAssignedClinicIds)("ADMIN", adminB._id);
        (0, vitest_1.expect)(adminAClinics).toHaveLength(1);
        (0, vitest_1.expect)(adminAClinics[0]?.equals(clinicA._id)).toBe(true);
        (0, vitest_1.expect)(() => (0, assignment_service_js_1.assertClinicAccess)(adminAClinics, clinicB._id)).toThrow(/Clinic access denied/);
        (0, vitest_1.expect)(() => (0, assignment_service_js_1.assertClinicAccess)(adminBClinics, clinicA._id)).toThrow(/Clinic access denied/);
        const clinicBMatches = await (0, patientIdentity_service_js_1.findPatientsByMobile)(clinicB._id, "9876543210");
        (0, vitest_1.expect)(clinicBMatches).toHaveLength(0);
        const leaked = await Patient_js_1.Patient.countDocuments({
            clinicId: clinicB._id,
            mobileNumber: "9876543210",
        });
        (0, vitest_1.expect)(leaked).toBe(0);
        await (0, patientIdentity_service_js_1.createPatient)({
            clinicId: clinicB._id,
            name: "Ramesh Sharma",
            mobileNumber: "9876543210",
        });
        (0, vitest_1.expect)(await Patient_js_1.Patient.countDocuments({ mobileNumber: "9876543210", isDeleted: false })).toBe(3);
    });
    (0, vitest_1.it)("classifies follow-ups and keeps payment history append-only", async () => {
        (0, vitest_1.expect)((0, followup_service_js_1.calculateFollowupDate)(new Date("2026-08-09T10:00:00.000Z"), 7).toISOString()).toBe("2026-08-16T00:00:00.000Z");
        (0, vitest_1.expect)((0, followup_service_js_1.classifyFollowupStatus)({
            storedStatus: "UPCOMING",
            followupDate: new Date("2026-08-16T00:00:00.000Z"),
            now: new Date("2026-08-16T08:00:00.000Z"),
        })).toBe("DUE");
        (0, vitest_1.expect)((0, followup_service_js_1.classifyFollowupStatus)({
            storedStatus: "UPCOMING",
            followupDate: new Date("2026-08-16T00:00:00.000Z"),
            now: new Date("2026-08-20T08:00:00.000Z"),
        })).toBe("MISSED");
        (0, vitest_1.expect)((0, followup_service_js_1.classifyFollowupStatus)({
            storedStatus: "COMPLETED",
            followupDate: new Date("2026-08-16T00:00:00.000Z"),
            now: new Date("2026-08-20T08:00:00.000Z"),
        })).toBe("COMPLETED");
        const pending = await Payment_js_1.Payment.findOne({ status: "PENDING" });
        (0, vitest_1.expect)(pending).toBeTruthy();
        await Payment_js_1.Payment.create({
            clinicId: pending.clinicId,
            subscriptionId: pending.subscriptionId,
            amount: pending.amount,
            paidAmount: 2000,
            status: "PARTIAL",
            dueDate: pending.dueDate,
            notes: "Partial collection — original PENDING row retained",
        });
        (0, vitest_1.expect)(await Payment_js_1.Payment.countDocuments()).toBe(3);
        const settings = await ClinicSettings_js_1.ClinicSettings.findOne({ receptionEnabled: false }).populate("clinicId");
        (0, vitest_1.expect)(settings).toBeTruthy();
    });
    (0, vitest_1.it)("creates a new visit under the same patient without overwriting the first visit", async () => {
        const clinicA = await mongoose_1.default.model("Clinic").findOne({ name: "MedFlow Clinic A" });
        const [primary] = await (0, patientIdentity_service_js_1.findPatientsByMobile)(clinicA._id, "9876543210");
        const before = await Visit_js_1.Visit.findById((await Visit_js_1.Visit.find({ patientId: primary._id }).sort({ visitDate: 1 }).limit(1))[0]?._id);
        await (0, visit_service_js_1.createVisit)({
            clinicId: clinicA._id,
            patientId: primary._id,
            visitDate: new Date("2026-08-25T04:00:00.000Z"),
            chiefComplaint: "New complaint",
        });
        const after = await Visit_js_1.Visit.findById(before._id);
        (0, vitest_1.expect)(after?.chiefComplaint).toBe(before?.chiefComplaint);
        (0, vitest_1.expect)(await Visit_js_1.Visit.countDocuments({ patientId: primary._id, isDeleted: false })).toBe(3);
        (0, vitest_1.expect)(await Followup_js_1.Followup.countDocuments({ patientId: primary._id })).toBe(1);
    });
});
//# sourceMappingURL=phase1.database.test.js.map