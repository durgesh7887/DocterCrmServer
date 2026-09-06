"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clinicReports = exports.listClinicDoctors = exports.createAppointmentHandler = exports.listAppointments = exports.completeFollowup = exports.createFollowupHandler = exports.listFollowups = exports.createConsultationHandler = exports.createVisitHandler = exports.getPatient = exports.createPatientHandler = exports.listPatients = exports.lookupPatients = void 0;
const mongoose_1 = require("mongoose");
const Appointment_js_1 = require("../models/Appointment.js");
const Consultation_js_1 = require("../models/Consultation.js");
const Family_js_1 = require("../models/Family.js");
const Followup_js_1 = require("../models/Followup.js");
const Patient_js_1 = require("../models/Patient.js");
const Visit_js_1 = require("../models/Visit.js");
const User_js_1 = require("../models/User.js");
const errorHandler_js_1 = require("../middleware/errorHandler.js");
const patientIdentity_service_js_1 = require("../services/patientIdentity.service.js");
const visit_service_js_1 = require("../services/visit.service.js");
const audit_service_js_1 = require("../services/audit.service.js");
const apiResponse_js_1 = require("../utils/apiResponse.js");
const AppError_js_1 = require("../utils/AppError.js");
function clinicId(req) {
    return new mongoose_1.Types.ObjectId((0, apiResponse_js_1.param)(req, "clinicId"));
}
function actorId(req) {
    return new mongoose_1.Types.ObjectId(req.authUser.id);
}
exports.lookupPatients = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    try {
        const mobile = String(req.query.mobile ?? "");
        const patients = await (0, patientIdentity_service_js_1.findPatientsByMobile)(clinicId(req), mobile);
        return (0, apiResponse_js_1.ok)(res, "Patient lookup completed", { patients });
    }
    catch (error) {
        throw new AppError_js_1.AppError(error.message, 400, "VALIDATION_ERROR");
    }
});
exports.listPatients = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const { skip, limit, page } = (0, apiResponse_js_1.parsePagination)(req.query);
    const result = await (0, patientIdentity_service_js_1.searchPatients)({
        clinicId: clinicId(req),
        query: String(req.query.q ?? ""),
        limit,
        skip,
    });
    return (0, apiResponse_js_1.ok)(res, "Patients retrieved successfully", { ...result, page });
});
exports.createPatientHandler = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    try {
        const patient = await (0, patientIdentity_service_js_1.createPatient)({
            clinicId: clinicId(req),
            name: req.body.name,
            mobileNumber: req.body.mobileNumber,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth ? new Date(req.body.dateOfBirth) : null,
            familyId: req.body.familyId ? new mongoose_1.Types.ObjectId(req.body.familyId) : null,
            isMobileOwner: req.body.isMobileOwner,
            allowDuplicateMobile: req.body.allowDuplicateMobile,
            actorUserId: actorId(req),
        });
        if (req.body.notes) {
            patient.notes = req.body.notes;
            await patient.save();
        }
        await (0, audit_service_js_1.writeAuditLog)({
            actorUserId: actorId(req),
            action: "Created Patient",
            module: "PATIENT",
            clinicId: clinicId(req),
            recordType: "Patient",
            recordId: patient._id,
            ipAddress: req.ip ?? "",
        });
        return (0, apiResponse_js_1.ok)(res, "Patient created successfully", { patient }, 201);
    }
    catch (error) {
        throw new AppError_js_1.AppError(error.message, 409, "CONFLICT");
    }
});
exports.getPatient = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const patient = await Patient_js_1.Patient.findOne({
        _id: (0, apiResponse_js_1.param)(req, "patientId"),
        clinicId: clinicId(req),
        isDeleted: false,
    }).lean();
    if (!patient)
        throw new AppError_js_1.AppError("Patient not found", 404, "NOT_FOUND");
    const [family, visits, consultations, followups, appointments] = await Promise.all([
        patient.familyId ? Family_js_1.Family.findById(patient.familyId).lean() : null,
        Visit_js_1.Visit.find({ clinicId: clinicId(req), patientId: patient._id, isDeleted: false })
            .sort({ visitDate: -1 })
            .lean(),
        Consultation_js_1.Consultation.find({ clinicId: clinicId(req), patientId: patient._id, isDeleted: false })
            .sort({ createdAt: -1 })
            .lean(),
        Followup_js_1.Followup.find({ clinicId: clinicId(req), patientId: patient._id, isDeleted: false })
            .sort({ followupDate: -1 })
            .lean(),
        Appointment_js_1.Appointment.find({ clinicId: clinicId(req), patientId: patient._id, isDeleted: false })
            .sort({ appointmentDate: -1 })
            .lean(),
    ]);
    return (0, apiResponse_js_1.ok)(res, "Patient retrieved successfully", {
        patient,
        family,
        visits,
        consultations,
        followups,
        appointments,
    });
});
exports.createVisitHandler = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const patient = await Patient_js_1.Patient.findOne({
        _id: (0, apiResponse_js_1.param)(req, "patientId"),
        clinicId: clinicId(req),
        isDeleted: false,
    });
    if (!patient)
        throw new AppError_js_1.AppError("Patient not found", 404, "NOT_FOUND");
    const visit = await (0, visit_service_js_1.createVisit)({
        clinicId: clinicId(req),
        patientId: patient._id,
        doctorId: req.body.doctorId ? new mongoose_1.Types.ObjectId(req.body.doctorId) : null,
        visitDate: req.body.visitDate ? new Date(req.body.visitDate) : new Date(),
        visitType: req.body.visitType,
        chiefComplaint: req.body.chiefComplaint,
        actorUserId: actorId(req),
    });
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: actorId(req),
        action: "Created Visit",
        module: "VISIT",
        clinicId: clinicId(req),
        recordType: "Visit",
        recordId: visit._id,
        ipAddress: req.ip ?? "",
    });
    return (0, apiResponse_js_1.ok)(res, "Visit created successfully", { visit }, 201);
});
exports.createConsultationHandler = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const result = await (0, visit_service_js_1.createConsultationWithFollowup)({
        clinicId: clinicId(req),
        patientId: new mongoose_1.Types.ObjectId(req.body.patientId),
        visitId: new mongoose_1.Types.ObjectId((0, apiResponse_js_1.param)(req, "visitId")),
        doctorId: req.body.doctorId ? new mongoose_1.Types.ObjectId(req.body.doctorId) : null,
        chiefComplaint: req.body.chiefComplaint,
        symptoms: req.body.symptoms,
        problemDetails: req.body.problemDetails,
        diagnosis: req.body.diagnosis,
        notes: req.body.notes,
        followUpRequired: req.body.followUpRequired,
        followUpAfterDays: req.body.followUpAfterDays,
        actorUserId: actorId(req),
    });
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: actorId(req),
        action: "Created Consultation",
        module: "CONSULTATION",
        clinicId: clinicId(req),
        recordType: "Consultation",
        recordId: result.consultation._id,
        ipAddress: req.ip ?? "",
    });
    return (0, apiResponse_js_1.ok)(res, "Consultation created successfully", result, 201);
});
exports.listFollowups = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const { skip, limit, page } = (0, apiResponse_js_1.parsePagination)(req.query);
    const filter = { clinicId: clinicId(req), isDeleted: false };
    if (req.query.status)
        filter.status = req.query.status;
    const [items, total] = await Promise.all([
        Followup_js_1.Followup.find(filter)
            .sort({ followupDate: 1 })
            .skip(skip)
            .limit(limit)
            .populate("patientId", "name mobileNumber patientCode")
            .lean(),
        Followup_js_1.Followup.countDocuments(filter),
    ]);
    return (0, apiResponse_js_1.ok)(res, "Follow-ups retrieved successfully", { items, total, page, limit });
});
exports.createFollowupHandler = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const cid = clinicId(req);
    const patient = await Patient_js_1.Patient.findOne({ _id: req.body.patientId, clinicId: cid, isDeleted: false });
    if (!patient)
        throw new AppError_js_1.AppError("Patient not found", 404, "NOT_FOUND");
    // Get a valid visitId — either provided or use the patient's last visit
    let visitId;
    if (req.body.visitId) {
        visitId = new mongoose_1.Types.ObjectId(req.body.visitId);
    }
    else {
        const lastVisit = await Visit_js_1.Visit.findOne({ clinicId: cid, patientId: patient._id, isDeleted: false })
            .sort({ visitDate: -1 })
            .lean();
        if (!lastVisit)
            throw new AppError_js_1.AppError("No visit found for patient — create a visit first", 400, "VALIDATION_ERROR");
        visitId = lastVisit._id;
    }
    const followupDate = new Date(req.body.followupDate);
    const followUpAfterDays = req.body.followUpAfterDays ?? 7;
    const followup = await Followup_js_1.Followup.create({
        clinicId: cid,
        patientId: patient._id,
        visitId,
        doctorId: req.body.doctorId ? new mongoose_1.Types.ObjectId(req.body.doctorId) : null,
        followupDate,
        followUpAfterDays,
        notes: req.body.notes ?? "",
        status: followupDate <= new Date() ? "DUE" : "UPCOMING",
        createdBy: actorId(req),
    });
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: actorId(req),
        action: "Scheduled Follow-up",
        module: "FOLLOWUP",
        clinicId: cid,
        recordType: "Followup",
        recordId: followup._id,
        ipAddress: req.ip ?? "",
    });
    return (0, apiResponse_js_1.ok)(res, "Follow-up scheduled successfully", { followup }, 201);
});
exports.completeFollowup = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const followup = await Followup_js_1.Followup.findOne({
        _id: (0, apiResponse_js_1.param)(req, "followupId"),
        clinicId: clinicId(req),
        isDeleted: false,
    });
    if (!followup)
        throw new AppError_js_1.AppError("Follow-up not found", 404, "NOT_FOUND");
    let visit = null;
    if (req.body.createVisit) {
        visit = await (0, visit_service_js_1.createVisit)({
            clinicId: clinicId(req),
            patientId: followup.patientId,
            doctorId: followup.doctorId,
            visitType: "FOLLOW_UP",
            chiefComplaint: "Follow-up visit",
            actorUserId: actorId(req),
        });
    }
    followup.status = "COMPLETED";
    followup.completedAt = new Date();
    followup.completedVisitId = visit?._id ?? null;
    await followup.save();
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: actorId(req),
        action: "Completed Follow-up",
        module: "FOLLOWUP",
        clinicId: clinicId(req),
        recordType: "Followup",
        recordId: followup._id,
        ipAddress: req.ip ?? "",
    });
    return (0, apiResponse_js_1.ok)(res, "Follow-up completed", { followup, visit });
});
exports.listAppointments = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const { skip, limit, page } = (0, apiResponse_js_1.parsePagination)(req.query);
    const filter = { clinicId: clinicId(req), isDeleted: false };
    if (req.query.status)
        filter.status = req.query.status;
    const [items, total] = await Promise.all([
        Appointment_js_1.Appointment.find(filter)
            .sort({ appointmentDate: 1 })
            .skip(skip)
            .limit(limit)
            .populate("patientId", "name mobileNumber patientCode")
            .populate("doctorId", "name")
            .lean(),
        Appointment_js_1.Appointment.countDocuments(filter),
    ]);
    return (0, apiResponse_js_1.ok)(res, "Appointments retrieved successfully", { items, total, page, limit });
});
exports.createAppointmentHandler = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const appointment = await Appointment_js_1.Appointment.create({
        clinicId: clinicId(req),
        patientId: req.body.patientId,
        doctorId: req.body.doctorId,
        appointmentDate: new Date(req.body.appointmentDate),
        notes: req.body.notes ?? "",
        durationMinutes: req.body.durationMinutes ?? 15,
        createdBy: actorId(req),
    });
    return (0, apiResponse_js_1.ok)(res, "Appointment created successfully", { appointment }, 201);
});
exports.listClinicDoctors = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const { DoctorClinicAssignment } = await import("../models/ClinicAssignments.js");
    const rows = await DoctorClinicAssignment.find({
        clinicId: clinicId(req),
        isDeleted: false,
        status: "ACTIVE",
    }).lean();
    const doctors = await User_js_1.User.find({
        _id: { $in: rows.map((row) => row.userId) },
        isDeleted: false,
    })
        .select("name email doctorProfile status")
        .lean();
    return (0, apiResponse_js_1.ok)(res, "Doctors retrieved successfully", { items: doctors });
});
exports.clinicReports = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const id = clinicId(req);
    const [patients, visits, followups, appointments] = await Promise.all([
        Patient_js_1.Patient.countDocuments({ clinicId: id, isDeleted: false }),
        Visit_js_1.Visit.countDocuments({ clinicId: id, isDeleted: false }),
        Followup_js_1.Followup.aggregate([
            { $match: { clinicId: id, isDeleted: false } },
            { $group: { _id: "$status", count: { $sum: 1 } } },
        ]),
        Appointment_js_1.Appointment.aggregate([
            { $match: { clinicId: id, isDeleted: false } },
            { $group: { _id: "$status", count: { $sum: 1 } } },
        ]),
    ]);
    return (0, apiResponse_js_1.ok)(res, "Reports retrieved successfully", { patients, visits, followups, appointments });
});
//# sourceMappingURL=clinicOps.controller.js.map