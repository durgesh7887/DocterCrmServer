"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignStaff = exports.resetPassword = exports.createUserHandler = exports.listUsers = void 0;
const mongoose_1 = require("mongoose");
const User_js_1 = require("../models/User.js");
const ClinicAssignments_js_1 = require("../models/ClinicAssignments.js");
const errorHandler_js_1 = require("../middleware/errorHandler.js");
const assignment_service_js_1 = require("../services/assignment.service.js");
const audit_service_js_1 = require("../services/audit.service.js");
const factories_js_1 = require("../test/factories.js");
const password_js_1 = require("../utils/password.js");
const apiResponse_js_1 = require("../utils/apiResponse.js");
const AppError_js_1 = require("../utils/AppError.js");
function actorId(req) {
    return new mongoose_1.Types.ObjectId(req.authUser.id);
}
exports.listUsers = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const { skip, limit, page } = (0, apiResponse_js_1.parsePagination)(req.query);
    const filter = { isDeleted: false };
    const role = String(req.query.role ?? "");
    const q = String(req.query.q ?? "").trim();
    if (role)
        filter.role = role;
    if (q) {
        filter.$or = [
            { name: new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") },
            { email: new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") },
        ];
    }
    const [items, total] = await Promise.all([
        User_js_1.User.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
        User_js_1.User.countDocuments(filter),
    ]);
    const userIds = items.map((item) => item._id);
    const [adminA, doctorA, receptionA] = await Promise.all([
        ClinicAssignments_js_1.AdminClinicAssignment.find({ userId: { $in: userIds }, isDeleted: false }).populate("clinicId", "name").lean(),
        ClinicAssignments_js_1.DoctorClinicAssignment.find({ userId: { $in: userIds }, isDeleted: false }).populate("clinicId", "name").lean(),
        ClinicAssignments_js_1.ReceptionClinicAssignment.find({ userId: { $in: userIds }, isDeleted: false }).populate("clinicId", "name").lean(),
    ]);
    const assignments = [...adminA, ...doctorA, ...receptionA];
    const clinicsByUser = new Map();
    for (const row of assignments) {
        const key = row.userId.toString();
        const name = row.clinicId?.name ?? "";
        clinicsByUser.set(key, [...(clinicsByUser.get(key) ?? []), name]);
    }
    return (0, apiResponse_js_1.ok)(res, "Users retrieved successfully", {
        items: items.map((item) => ({ ...item, assignedClinics: clinicsByUser.get(item._id.toString()) ?? [] })),
        total,
        page,
        limit,
    });
});
exports.createUserHandler = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const user = await (0, factories_js_1.createUser)({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        mobileNumber: req.body.mobileNumber,
        specialization: req.body.specialization,
        registrationNumber: req.body.registrationNumber,
    });
    if (req.body.clinicId && user.role !== "SUPER_ADMIN") {
        await (0, assignment_service_js_1.assignUserToClinic)({
            role: user.role,
            userId: user._id,
            clinicId: new mongoose_1.Types.ObjectId(req.body.clinicId),
            actorUserId: actorId(req),
            isPrimary: true,
        });
    }
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: actorId(req),
        action: "Created User",
        module: "USER",
        clinicId: req.body.clinicId ? new mongoose_1.Types.ObjectId(req.body.clinicId) : null,
        recordType: "User",
        recordId: user._id,
        ipAddress: req.ip ?? "",
    });
    const safe = await User_js_1.User.findById(user._id).lean();
    return (0, apiResponse_js_1.ok)(res, "User created successfully", { user: safe }, 201);
});
exports.resetPassword = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const user = await User_js_1.User.findOne({ _id: (0, apiResponse_js_1.param)(req, "userId"), isDeleted: false }).select("+passwordHash");
    if (!user)
        throw new AppError_js_1.AppError("User not found", 404, "NOT_FOUND");
    user.passwordHash = await (0, password_js_1.hashPassword)(req.body.password);
    await user.save();
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: actorId(req),
        action: "Reset Password",
        module: "USER",
        recordType: "User",
        recordId: user._id,
        ipAddress: req.ip ?? "",
    });
    return (0, apiResponse_js_1.ok)(res, "Password reset successfully");
});
exports.assignStaff = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const rolePath = req.path.includes("/doctors")
        ? "DOCTOR"
        : req.path.includes("/reception")
            ? "RECEPTION"
            : "ADMIN";
    const user = await User_js_1.User.findOne({ _id: req.body.userId, isDeleted: false });
    if (!user)
        throw new AppError_js_1.AppError("User not found", 404, "NOT_FOUND");
    if (user.role !== rolePath) {
        throw new AppError_js_1.AppError(`User is not a ${rolePath}`, 400, "VALIDATION_ERROR");
    }
    const assignment = await (0, assignment_service_js_1.assignUserToClinic)({
        role: rolePath,
        userId: user._id,
        clinicId: new mongoose_1.Types.ObjectId((0, apiResponse_js_1.param)(req, "clinicId")),
        actorUserId: actorId(req),
    });
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: actorId(req),
        action: `Assigned ${rolePath}`,
        module: "ASSIGNMENT",
        clinicId: new mongoose_1.Types.ObjectId((0, apiResponse_js_1.param)(req, "clinicId")),
        recordType: "Assignment",
        recordId: assignment._id,
        ipAddress: req.ip ?? "",
    });
    return (0, apiResponse_js_1.ok)(res, "Staff assigned successfully", { assignment }, 201);
});
//# sourceMappingURL=user.controller.js.map