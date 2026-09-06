"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clinicStaff = exports.updateSettings = exports.getSettings = exports.setClinicStatus = exports.updateClinic = exports.createClinicHandler = exports.getClinic = exports.listClinics = void 0;
const mongoose_1 = require("mongoose");
const Clinic_js_1 = require("../models/Clinic.js");
const ClinicSettings_js_1 = require("../models/ClinicSettings.js");
const ClinicAssignments_js_1 = require("../models/ClinicAssignments.js");
const errorHandler_js_1 = require("../middleware/errorHandler.js");
const audit_service_js_1 = require("../services/audit.service.js");
const factories_js_1 = require("../test/factories.js");
const apiResponse_js_1 = require("../utils/apiResponse.js");
const AppError_js_1 = require("../utils/AppError.js");
const dateAndIdentity_js_1 = require("../utils/dateAndIdentity.js");
function actorId(req) {
    return new mongoose_1.Types.ObjectId(req.authUser.id);
}
exports.listClinics = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const { skip, limit, page } = (0, apiResponse_js_1.parsePagination)(req.query);
    const filter = { isDeleted: false };
    const q = String(req.query.q ?? "").trim();
    const status = String(req.query.status ?? "").trim();
    if (status)
        filter.status = status;
    if (q)
        filter.name = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    if (req.authUser.role !== "SUPER_ADMIN") {
        filter._id = { $in: req.authUser.clinicIds };
    }
    const [items, total] = await Promise.all([
        Clinic_js_1.Clinic.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
        Clinic_js_1.Clinic.countDocuments(filter),
    ]);
    const clinicIds = items.map((item) => item._id);
    const settings = await ClinicSettings_js_1.ClinicSettings.find({ clinicId: { $in: clinicIds } }).lean();
    const settingsByClinic = new Map(settings.map((row) => [row.clinicId.toString(), row]));
    return (0, apiResponse_js_1.ok)(res, "Clinics retrieved successfully", {
        items: items.map((item) => ({ ...item, settings: settingsByClinic.get(item._id.toString()) ?? null })),
        total,
        page,
        limit,
    });
});
exports.getClinic = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const clinic = await Clinic_js_1.Clinic.findOne({ _id: (0, apiResponse_js_1.param)(req, "clinicId"), isDeleted: false }).lean();
    if (!clinic)
        throw new AppError_js_1.AppError("Clinic not found", 404, "NOT_FOUND");
    const settings = await ClinicSettings_js_1.ClinicSettings.findOne({ clinicId: clinic._id }).lean();
    return (0, apiResponse_js_1.ok)(res, "Clinic retrieved successfully", { clinic, settings });
});
exports.createClinicHandler = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const clinic = await (0, factories_js_1.createClinic)({
        name: req.body.name,
        ownerName: req.body.ownerName,
        mobile: req.body.mobile,
        email: req.body.email,
        city: req.body.city,
        state: req.body.state,
        receptionEnabled: req.body.receptionEnabled,
    });
    if (req.body.whatsappNumber) {
        clinic.set("whatsappNumber", req.body.whatsappNumber);
    }
    if (req.body.gstin) {
        clinic.set("tax.gstin", req.body.gstin);
    }
    if (req.body.whatsappNumber || req.body.gstin) {
        await clinic.save();
    }
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: actorId(req),
        action: "Created Clinic",
        module: "CLINIC",
        clinicId: clinic._id,
        recordType: "Clinic",
        recordId: clinic._id,
        ipAddress: req.ip ?? "",
    });
    return (0, apiResponse_js_1.ok)(res, "Clinic created successfully", { clinic }, 201);
});
exports.updateClinic = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const $set = { updatedBy: actorId(req) };
    if (req.body.name)
        $set.name = req.body.name;
    if (req.body.ownerName)
        $set.ownerName = req.body.ownerName;
    if (req.body.mobile)
        $set.mobile = (0, dateAndIdentity_js_1.normalizeMobile)(req.body.mobile) ?? req.body.mobile;
    if (req.body.whatsappNumber !== undefined)
        $set.whatsappNumber = req.body.whatsappNumber;
    if (req.body.email)
        $set.email = req.body.email.toLowerCase();
    if (req.body.city)
        $set["address.city"] = req.body.city;
    if (req.body.state)
        $set["address.state"] = req.body.state;
    if (req.body.gstin)
        $set["tax.gstin"] = req.body.gstin;
    const clinic = await Clinic_js_1.Clinic.findOneAndUpdate({ _id: (0, apiResponse_js_1.param)(req, "clinicId"), isDeleted: false }, { $set }, { new: true });
    if (!clinic)
        throw new AppError_js_1.AppError("Clinic not found", 404, "NOT_FOUND");
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: actorId(req),
        action: "Updated Clinic",
        module: "CLINIC",
        clinicId: clinic._id,
        recordType: "Clinic",
        recordId: clinic._id,
        ipAddress: req.ip ?? "",
    });
    return (0, apiResponse_js_1.ok)(res, "Clinic updated successfully", { clinic });
});
exports.setClinicStatus = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const status = req.path.endsWith("deactivate") ? "INACTIVE" : "ACTIVE";
    const clinic = await Clinic_js_1.Clinic.findOneAndUpdate({ _id: (0, apiResponse_js_1.param)(req, "clinicId"), isDeleted: false }, { $set: { status, updatedBy: actorId(req) } }, { new: true });
    if (!clinic)
        throw new AppError_js_1.AppError("Clinic not found", 404, "NOT_FOUND");
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: actorId(req),
        action: status === "ACTIVE" ? "Activated Clinic" : "Deactivated Clinic",
        module: "CLINIC",
        clinicId: clinic._id,
        recordType: "Clinic",
        recordId: clinic._id,
        ipAddress: req.ip ?? "",
    });
    return (0, apiResponse_js_1.ok)(res, `Clinic ${status.toLowerCase()}`, { clinic });
});
exports.getSettings = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const settings = await ClinicSettings_js_1.ClinicSettings.findOne({ clinicId: (0, apiResponse_js_1.param)(req, "clinicId") }).lean();
    if (!settings)
        throw new AppError_js_1.AppError("Settings not found", 404, "NOT_FOUND");
    return (0, apiResponse_js_1.ok)(res, "Clinic settings retrieved successfully", { settings });
});
exports.updateSettings = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const settings = await ClinicSettings_js_1.ClinicSettings.findOneAndUpdate({ clinicId: (0, apiResponse_js_1.param)(req, "clinicId") }, { $set: { ...req.body, updatedBy: actorId(req) } }, { new: true });
    if (!settings)
        throw new AppError_js_1.AppError("Settings not found", 404, "NOT_FOUND");
    return (0, apiResponse_js_1.ok)(res, "Clinic settings updated successfully", { settings });
});
exports.clinicStaff = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const clinicId = new mongoose_1.Types.ObjectId((0, apiResponse_js_1.param)(req, "clinicId"));
    const [admins, doctors, reception] = await Promise.all([
        ClinicAssignments_js_1.AdminClinicAssignment.find({ clinicId, isDeleted: false }).populate("userId", "name email role status mobileNumber").lean(),
        ClinicAssignments_js_1.DoctorClinicAssignment.find({ clinicId, isDeleted: false }).populate("userId", "name email role status mobileNumber doctorProfile").lean(),
        ClinicAssignments_js_1.ReceptionClinicAssignment.find({ clinicId, isDeleted: false }).populate("userId", "name email role status mobileNumber").lean(),
    ]);
    return (0, apiResponse_js_1.ok)(res, "Clinic staff retrieved successfully", { admins, doctors, reception });
});
//# sourceMappingURL=clinic.controller.js.map