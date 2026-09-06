"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportClinic = exports.exportAll = void 0;
const XLSX = __importStar(require("xlsx"));
const mongoose_1 = require("mongoose");
const Appointment_js_1 = require("../models/Appointment.js");
const Clinic_js_1 = require("../models/Clinic.js");
const Followup_js_1 = require("../models/Followup.js");
const Patient_js_1 = require("../models/Patient.js");
const Visit_js_1 = require("../models/Visit.js");
const Consultation_js_1 = require("../models/Consultation.js");
const errorHandler_js_1 = require("../middleware/errorHandler.js");
const AppError_js_1 = require("../utils/AppError.js");
/* ─── helpers ─────────────────────────────────────────────────────────────── */
function makeSheet(rows) {
    if (rows.length === 0)
        return XLSX.utils.aoa_to_sheet([["No data"]]);
    return XLSX.utils.json_to_sheet(rows);
}
function setColWidths(ws, widths) {
    ws["!cols"] = widths.map((w) => ({ wch: w }));
}
function sendWorkbook(res, wb, filename) {
    const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Length", buf.length);
    res.send(buf);
}
/* ─── data fetchers ──────────────────────────────────────────────────────── */
async function fetchClinicRows(filter = {}) {
    const clinics = await Clinic_js_1.Clinic.find({ isDeleted: false, ...filter }).lean();
    return clinics.map((c) => ({
        "Clinic ID": c._id.toString(),
        "Name": c.name,
        "Owner": c.ownerName,
        "Mobile": c.mobile,
        "WhatsApp": c.whatsappNumber ?? "",
        "Email": c.email,
        "City": c.address?.city ?? "",
        "State": c.address?.state ?? "",
        "GSTIN": c.tax?.gstin ?? "",
        "Status": c.status,
        "Created": new Date(c.createdAt).toLocaleDateString("en-IN"),
    }));
}
async function fetchPatientRows(clinicFilter) {
    const filter = { isDeleted: false };
    if (clinicFilter)
        filter.clinicId = clinicFilter;
    const patients = await Patient_js_1.Patient.find(filter).populate("clinicId", "name").lean();
    return patients.map((p) => ({
        "Patient Code": p.patientCode,
        "Name": p.name,
        "Mobile": p.mobileNumber,
        "Gender": p.gender,
        "Date of Birth": p.dateOfBirth ? new Date(p.dateOfBirth).toLocaleDateString("en-IN") : "",
        "Mobile Owner": p.isMobileOwner ? "Yes" : "No",
        "Clinic": p.clinicId?.name ?? "",
        "Notes": p.notes ?? "",
        "Last Visit": p.lastVisitAt ? new Date(p.lastVisitAt).toLocaleDateString("en-IN") : "",
        "Created": new Date(p.createdAt).toLocaleDateString("en-IN"),
    }));
}
async function fetchFollowupRows(clinicFilter) {
    const filter = { isDeleted: false };
    if (clinicFilter)
        filter.clinicId = clinicFilter;
    const followups = await Followup_js_1.Followup.find(filter)
        .populate("patientId", "name mobileNumber patientCode")
        .populate("clinicId", "name")
        .populate("doctorId", "name")
        .lean();
    return followups.map((f) => ({
        "Patient": f.patientId?.name ?? "",
        "Patient Code": f.patientId?.patientCode ?? "",
        "Mobile": f.patientId?.mobileNumber ?? "",
        "Clinic": f.clinicId?.name ?? "",
        "Doctor": f.doctorId?.name ?? "",
        "Follow-up Date": new Date(f.followupDate).toLocaleDateString("en-IN"),
        "Every (Days)": f.followUpAfterDays,
        "Status": f.status,
        "Notes": f.notes ?? "",
        "Completed At": f.completedAt ? new Date(f.completedAt).toLocaleDateString("en-IN") : "",
        "Created": new Date(f.createdAt).toLocaleDateString("en-IN"),
    }));
}
async function fetchVisitRows(clinicFilter) {
    const filter = { isDeleted: false };
    if (clinicFilter)
        filter.clinicId = clinicFilter;
    const visits = await Visit_js_1.Visit.find(filter)
        .populate("patientId", "name patientCode")
        .populate("clinicId", "name")
        .populate("doctorId", "name")
        .lean();
    return visits.map((v) => ({
        "Visit Code": v.visitCode,
        "Patient": v.patientId?.name ?? "",
        "Patient Code": v.patientId?.patientCode ?? "",
        "Clinic": v.clinicId?.name ?? "",
        "Doctor": v.doctorId?.name ?? "",
        "Visit Date": new Date(v.visitDate).toLocaleDateString("en-IN"),
        "Visit Type": v.visitType,
        "Status": v.status,
        "Chief Complaint": v.chiefComplaint ?? "",
    }));
}
async function fetchConsultationRows(clinicFilter) {
    const filter = { isDeleted: false };
    if (clinicFilter)
        filter.clinicId = clinicFilter;
    const consultations = await Consultation_js_1.Consultation.find(filter)
        .populate("patientId", "name patientCode")
        .populate("clinicId", "name")
        .populate("doctorId", "name")
        .lean();
    return consultations.map((c) => ({
        "Patient": c.patientId?.name ?? "",
        "Patient Code": c.patientId?.patientCode ?? "",
        "Clinic": c.clinicId?.name ?? "",
        "Doctor": c.doctorId?.name ?? "",
        "Chief Complaint": c.chiefComplaint ?? "",
        "Symptoms": (c.symptoms ?? []).join(", "),
        "Diagnosis": c.diagnosis ?? "",
        "Notes": c.notes ?? "",
        "Follow-up Required": c.followUpRequired ? "Yes" : "No",
        "Follow-up Days": c.followUpAfterDays ?? "",
        "Date": new Date(c.createdAt).toLocaleDateString("en-IN"),
    }));
}
async function fetchAppointmentRows(clinicFilter) {
    const filter = { isDeleted: false };
    if (clinicFilter)
        filter.clinicId = clinicFilter;
    const appointments = await Appointment_js_1.Appointment.find(filter)
        .populate("patientId", "name patientCode mobileNumber")
        .populate("clinicId", "name")
        .populate("doctorId", "name")
        .lean();
    return appointments.map((a) => ({
        "Patient": a.patientId?.name ?? "",
        "Patient Code": a.patientId?.patientCode ?? "",
        "Mobile": a.patientId?.mobileNumber ?? "",
        "Clinic": a.clinicId?.name ?? "",
        "Doctor": a.doctorId?.name ?? "",
        "Appointment Date": new Date(a.appointmentDate).toLocaleString("en-IN"),
        "Duration (min)": a.durationMinutes ?? "",
        "Status": a.status,
        "Notes": a.notes ?? "",
    }));
}
/* ─── Export ALL clinics (Super Admin only) ──────────────────────────────── */
exports.exportAll = (0, errorHandler_js_1.asyncHandler)(async (_req, res) => {
    const [clinicRows, patientRows, followupRows, visitRows, consultationRows, appointmentRows] = await Promise.all([
        fetchClinicRows(),
        fetchPatientRows(),
        fetchFollowupRows(),
        fetchVisitRows(),
        fetchConsultationRows(),
        fetchAppointmentRows(),
    ]);
    const wb = XLSX.utils.book_new();
    const wsClinics = makeSheet(clinicRows);
    setColWidths(wsClinics, [24, 28, 24, 16, 16, 28, 16, 16, 18, 10, 14]);
    XLSX.utils.book_append_sheet(wb, wsClinics, "Clinics");
    const wsPatients = makeSheet(patientRows);
    setColWidths(wsPatients, [14, 28, 14, 12, 14, 14, 28, 30, 14, 14]);
    XLSX.utils.book_append_sheet(wb, wsPatients, "Patients");
    const wsFollowups = makeSheet(followupRows);
    setColWidths(wsFollowups, [28, 14, 14, 28, 24, 16, 12, 12, 30, 14, 14]);
    XLSX.utils.book_append_sheet(wb, wsFollowups, "Follow-ups");
    const wsVisits = makeSheet(visitRows);
    setColWidths(wsVisits, [14, 28, 14, 28, 24, 14, 14, 12, 30]);
    XLSX.utils.book_append_sheet(wb, wsVisits, "Visits");
    const wsConsultations = makeSheet(consultationRows);
    setColWidths(wsConsultations, [28, 14, 28, 24, 28, 30, 28, 30, 18, 14, 14]);
    XLSX.utils.book_append_sheet(wb, wsConsultations, "Consultations");
    const wsAppointments = makeSheet(appointmentRows);
    setColWidths(wsAppointments, [28, 14, 14, 28, 24, 22, 14, 12, 30]);
    XLSX.utils.book_append_sheet(wb, wsAppointments, "Appointments");
    const date = new Date().toISOString().slice(0, 10);
    sendWorkbook(res, wb, `MedFlow_All_Data_${date}.xlsx`);
});
/* ─── Export single clinic ───────────────────────────────────────────────── */
exports.exportClinic = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const clinicId = String(req.params.clinicId ?? "");
    if (!clinicId || !mongoose_1.Types.ObjectId.isValid(clinicId)) {
        throw new AppError_js_1.AppError("Invalid clinic ID", 400, "VALIDATION_ERROR");
    }
    const cid = new mongoose_1.Types.ObjectId(clinicId);
    const clinic = await Clinic_js_1.Clinic.findOne({ _id: cid, isDeleted: false }).lean();
    if (!clinic)
        throw new AppError_js_1.AppError("Clinic not found", 404, "NOT_FOUND");
    const [patientRows, followupRows, visitRows, consultationRows, appointmentRows] = await Promise.all([
        fetchPatientRows(cid),
        fetchFollowupRows(cid),
        fetchVisitRows(cid),
        fetchConsultationRows(cid),
        fetchAppointmentRows(cid),
    ]);
    // Summary sheet
    const summaryRows = [
        { "Field": "Clinic Name", "Value": clinic.name },
        { "Field": "Owner", "Value": clinic.ownerName },
        { "Field": "Mobile", "Value": clinic.mobile },
        { "Field": "WhatsApp", "Value": clinic.whatsappNumber ?? "" },
        { "Field": "Email", "Value": clinic.email },
        { "Field": "City", "Value": clinic.address?.city ?? "" },
        { "Field": "State", "Value": clinic.address?.state ?? "" },
        { "Field": "GSTIN", "Value": clinic.tax?.gstin ?? "" },
        { "Field": "Status", "Value": clinic.status },
        { "Field": "Total Patients", "Value": patientRows.length },
        { "Field": "Total Visits", "Value": visitRows.length },
        { "Field": "Total Follow-ups", "Value": followupRows.length },
        { "Field": "Appointments", "Value": appointmentRows.length },
        { "Field": "Exported At", "Value": new Date().toLocaleString("en-IN") },
    ];
    const wb = XLSX.utils.book_new();
    const wsSummary = makeSheet(summaryRows);
    setColWidths(wsSummary, [24, 40]);
    XLSX.utils.book_append_sheet(wb, wsSummary, "Summary");
    const wsPatients = makeSheet(patientRows);
    setColWidths(wsPatients, [14, 28, 14, 12, 14, 14, 28, 30, 14, 14]);
    XLSX.utils.book_append_sheet(wb, wsPatients, "Patients");
    const wsFollowups = makeSheet(followupRows);
    setColWidths(wsFollowups, [28, 14, 14, 28, 24, 16, 12, 12, 30, 14, 14]);
    XLSX.utils.book_append_sheet(wb, wsFollowups, "Follow-ups");
    const wsVisits = makeSheet(visitRows);
    setColWidths(wsVisits, [14, 28, 14, 28, 24, 14, 14, 12, 30]);
    XLSX.utils.book_append_sheet(wb, wsVisits, "Visits");
    const wsConsultations = makeSheet(consultationRows);
    setColWidths(wsConsultations, [28, 14, 28, 24, 28, 30, 28, 30, 18, 14, 14]);
    XLSX.utils.book_append_sheet(wb, wsConsultations, "Consultations");
    const wsAppointments = makeSheet(appointmentRows);
    setColWidths(wsAppointments, [28, 14, 14, 28, 24, 22, 14, 12, 30]);
    XLSX.utils.book_append_sheet(wb, wsAppointments, "Appointments");
    const safeName = clinic.name.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 30);
    const date = new Date().toISOString().slice(0, 10);
    sendWorkbook(res, wb, `MedFlow_${safeName}_${date}.xlsx`);
});
//# sourceMappingURL=export.controller.js.map