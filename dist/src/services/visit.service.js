"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVisit = createVisit;
exports.createConsultationWithFollowup = createConsultationWithFollowup;
const Consultation_js_1 = require("../models/Consultation.js");
const Followup_js_1 = require("../models/Followup.js");
const Patient_js_1 = require("../models/Patient.js");
const Visit_js_1 = require("../models/Visit.js");
const followup_service_js_1 = require("./followup.service.js");
const counter_service_js_1 = require("./counter.service.js");
async function createVisit(params) {
    const visitDate = params.visitDate ?? new Date();
    const visit = await Visit_js_1.Visit.create({
        clinicId: params.clinicId,
        patientId: params.patientId,
        doctorId: params.doctorId ?? null,
        appointmentId: params.appointmentId ?? null,
        visitCode: await (0, counter_service_js_1.nextCode)("V", params.clinicId),
        visitDate,
        visitType: params.visitType ?? "WALK_IN",
        status: "OPEN",
        chiefComplaint: params.chiefComplaint ?? "",
        createdBy: params.actorUserId ?? null,
    });
    await Patient_js_1.Patient.updateOne({ _id: params.patientId, clinicId: params.clinicId }, { $set: { lastVisitAt: visitDate } });
    return visit;
}
async function createConsultationWithFollowup(params) {
    const visit = await Visit_js_1.Visit.findOne({
        _id: params.visitId,
        clinicId: params.clinicId,
        patientId: params.patientId,
        isDeleted: false,
    });
    if (!visit) {
        throw new Error("Visit not found in clinic");
    }
    const consultation = await Consultation_js_1.Consultation.create({
        clinicId: params.clinicId,
        patientId: params.patientId,
        visitId: params.visitId,
        doctorId: params.doctorId ?? visit.doctorId,
        chiefComplaint: params.chiefComplaint ?? visit.chiefComplaint,
        symptoms: params.symptoms ?? [],
        problemDetails: params.problemDetails ?? "",
        diagnosis: params.diagnosis ?? "",
        notes: params.notes ?? "",
        followUpRequired: params.followUpRequired ?? false,
        followUpAfterDays: params.followUpAfterDays ?? null,
        createdBy: params.actorUserId ?? null,
    });
    let followup = null;
    if (params.followUpRequired && params.followUpAfterDays) {
        const followupDate = (0, followup_service_js_1.calculateFollowupDate)(visit.visitDate, params.followUpAfterDays);
        const status = (0, followup_service_js_1.classifyFollowupStatus)({
            storedStatus: "UPCOMING",
            followupDate,
            now: params.now ?? new Date(),
        });
        followup = await Followup_js_1.Followup.create({
            clinicId: params.clinicId,
            patientId: params.patientId,
            visitId: params.visitId,
            consultationId: consultation._id,
            doctorId: params.doctorId ?? visit.doctorId,
            followupDate,
            followUpAfterDays: params.followUpAfterDays,
            status,
            createdBy: params.actorUserId ?? null,
        });
    }
    await Visit_js_1.Visit.updateOne({ _id: visit._id }, { $set: { status: "COMPLETED", updatedBy: params.actorUserId ?? null } });
    return { consultation, followup };
}
//# sourceMappingURL=visit.service.js.map