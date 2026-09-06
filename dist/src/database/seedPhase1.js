"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedPhase1Scenario = seedPhase1Scenario;
const Appointment_js_1 = require("../models/Appointment.js");
const Payment_js_1 = require("../models/Payment.js");
const Subscription_js_1 = require("../models/Subscription.js");
const audit_service_js_1 = require("../services/audit.service.js");
const assignment_service_js_1 = require("../services/assignment.service.js");
const patientIdentity_service_js_1 = require("../services/patientIdentity.service.js");
const visit_service_js_1 = require("../services/visit.service.js");
const factories_js_1 = require("../test/factories.js");
const seedCatalog_js_1 = require("./seedCatalog.js");
async function seedPhase1Scenario(password = "ChangeMe!MedFlow1") {
    await (0, seedCatalog_js_1.seedCatalog)();
    const superAdmin = await (0, factories_js_1.createUser)({
        name: "Super Admin",
        email: "superadmin@medflow.local",
        password,
        role: "SUPER_ADMIN",
        mobileNumber: "9000000001",
    });
    const clinicA = await (0, factories_js_1.createClinic)({
        name: "MedFlow Clinic A",
        ownerName: "Dr. Asha Rao",
        mobile: "9800000001",
        email: "clinica@medflow.local",
        city: "Bengaluru",
        state: "Karnataka",
        receptionEnabled: true,
    });
    const clinicB = await (0, factories_js_1.createClinic)({
        name: "MedFlow Clinic B",
        ownerName: "Dr. Bharat Shah",
        mobile: "9800000002",
        email: "clinicb@medflow.local",
        city: "Pune",
        state: "Maharashtra",
        receptionEnabled: false,
    });
    const adminA = await (0, factories_js_1.createUser)({
        name: "Admin A",
        email: "admin.a@medflow.local",
        password,
        role: "ADMIN",
        mobileNumber: "9000000011",
    });
    const adminB = await (0, factories_js_1.createUser)({
        name: "Admin B",
        email: "admin.b@medflow.local",
        password,
        role: "ADMIN",
        mobileNumber: "9000000012",
    });
    const doctorA = await (0, factories_js_1.createUser)({
        name: "Dr. Kavya Menon",
        email: "doctor.a@medflow.local",
        password,
        role: "DOCTOR",
        mobileNumber: "9000000021",
        specialization: "General Medicine",
        registrationNumber: "KMC-10021",
    });
    const receptionA = await (0, factories_js_1.createUser)({
        name: "Reception A",
        email: "reception.a@medflow.local",
        password,
        role: "RECEPTION",
        mobileNumber: "9000000031",
    });
    await (0, assignment_service_js_1.assignUserToClinic)({
        role: "ADMIN",
        userId: adminA._id,
        clinicId: clinicA._id,
        actorUserId: superAdmin._id,
        isPrimary: true,
    });
    await (0, assignment_service_js_1.assignUserToClinic)({
        role: "ADMIN",
        userId: adminB._id,
        clinicId: clinicB._id,
        actorUserId: superAdmin._id,
        isPrimary: true,
    });
    await (0, assignment_service_js_1.assignUserToClinic)({
        role: "DOCTOR",
        userId: doctorA._id,
        clinicId: clinicA._id,
        actorUserId: superAdmin._id,
        isPrimary: true,
    });
    await (0, assignment_service_js_1.assignUserToClinic)({
        role: "RECEPTION",
        userId: receptionA._id,
        clinicId: clinicA._id,
        actorUserId: superAdmin._id,
        isPrimary: true,
    });
    const family = await (0, patientIdentity_service_js_1.createFamily)({
        clinicId: clinicA._id,
        name: "Sharma Family",
        primaryMobile: "9876543210",
        actorUserId: receptionA._id,
    });
    const father = await (0, patientIdentity_service_js_1.createPatient)({
        clinicId: clinicA._id,
        name: "Ramesh Sharma",
        mobileNumber: "9876543210",
        gender: "MALE",
        familyId: family._id,
        actorUserId: receptionA._id,
    });
    const daughter = await (0, patientIdentity_service_js_1.createPatient)({
        clinicId: clinicA._id,
        name: "Ananya Sharma",
        mobileNumber: "9876543210",
        gender: "FEMALE",
        familyId: family._id,
        isMobileOwner: false,
        allowDuplicateMobile: true,
        actorUserId: receptionA._id,
    });
    const visit1 = await (0, visit_service_js_1.createVisit)({
        clinicId: clinicA._id,
        patientId: father._id,
        doctorId: doctorA._id,
        visitDate: new Date("2026-08-09T04:00:00.000Z"),
        chiefComplaint: "Fever",
        actorUserId: receptionA._id,
    });
    const consult1 = await (0, visit_service_js_1.createConsultationWithFollowup)({
        clinicId: clinicA._id,
        patientId: father._id,
        visitId: visit1._id,
        doctorId: doctorA._id,
        chiefComplaint: "Fever",
        symptoms: ["fever", "body ache"],
        problemDetails: "3 days of fever",
        diagnosis: "Viral fever",
        notes: "Rest and fluids",
        followUpRequired: true,
        followUpAfterDays: 7,
        actorUserId: receptionA._id,
        now: new Date("2026-08-09T04:00:00.000Z"),
    });
    const existing = await (0, patientIdentity_service_js_1.findPatientsByMobile)(clinicA._id, "9876543210");
    const returning = existing[0];
    const visit2 = await (0, visit_service_js_1.createVisit)({
        clinicId: clinicA._id,
        patientId: returning._id,
        doctorId: doctorA._id,
        visitDate: new Date("2026-08-20T04:00:00.000Z"),
        visitType: "FOLLOW_UP",
        chiefComplaint: "Follow-up after fever",
        actorUserId: receptionA._id,
    });
    await (0, visit_service_js_1.createConsultationWithFollowup)({
        clinicId: clinicA._id,
        patientId: returning._id,
        visitId: visit2._id,
        doctorId: doctorA._id,
        diagnosis: "Recovered",
        followUpRequired: false,
        actorUserId: receptionA._id,
    });
    await Appointment_js_1.Appointment.create({
        clinicId: clinicA._id,
        patientId: father._id,
        doctorId: doctorA._id,
        appointmentDate: new Date("2026-08-28T04:30:00.000Z"),
        status: "SCHEDULED",
        notes: "Review",
        createdBy: receptionA._id,
    });
    const subscription = await Subscription_js_1.Subscription.create({
        clinicId: clinicA._id,
        planName: "Standard",
        planCode: "STD",
        amount: 4999,
        billingCycle: "MONTHLY",
        startDate: new Date("2026-08-01T00:00:00.000Z"),
        nextDueDate: new Date("2026-09-01T00:00:00.000Z"),
        status: "ACTIVE",
        createdBy: superAdmin._id,
    });
    clinicA.currentSubscriptionId = subscription._id;
    await clinicA.save();
    await Payment_js_1.Payment.create({
        clinicId: clinicA._id,
        subscriptionId: subscription._id,
        amount: 4999,
        paidAmount: 4999,
        status: "PAID",
        dueDate: new Date("2026-08-01T00:00:00.000Z"),
        paidAt: new Date("2026-08-01T06:00:00.000Z"),
        method: "UPI",
        reference: "PAY-SEED-001",
        createdBy: superAdmin._id,
    });
    await Payment_js_1.Payment.create({
        clinicId: clinicA._id,
        subscriptionId: subscription._id,
        amount: 4999,
        paidAmount: 0,
        status: "PENDING",
        dueDate: new Date("2026-09-01T00:00:00.000Z"),
        createdBy: superAdmin._id,
    });
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: superAdmin._id,
        action: "Created Clinic",
        module: "CLINIC",
        clinicId: clinicA._id,
        recordType: "Clinic",
        recordId: clinicA._id,
    });
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: receptionA._id,
        action: "Created Patient",
        module: "PATIENT",
        clinicId: clinicA._id,
        recordType: "Patient",
        recordId: father._id,
    });
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: receptionA._id,
        action: "Created Consultation",
        module: "CONSULTATION",
        clinicId: clinicA._id,
        recordType: "Consultation",
        recordId: consult1.consultation._id,
    });
    return {
        superAdmin,
        clinicA,
        clinicB,
        adminA,
        adminB,
        doctorA,
        receptionA,
        family,
        father,
        daughter,
        visit1,
        visit2,
        followup: consult1.followup,
        subscription,
    };
}
//# sourceMappingURL=seedPhase1.js.map