"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSettings = exports.listAuditLogs = exports.listSubscriptions = exports.createPayment = exports.listPayments = exports.getClinicDashboard = exports.getSuperDashboard = void 0;
const mongoose_1 = require("mongoose");
const AuditLog_js_1 = require("../models/AuditLog.js");
const Payment_js_1 = require("../models/Payment.js");
const Subscription_js_1 = require("../models/Subscription.js");
const SystemSetting_js_1 = require("../models/SystemSetting.js");
const errorHandler_js_1 = require("../middleware/errorHandler.js");
const dashboard_service_js_1 = require("../services/dashboard.service.js");
const audit_service_js_1 = require("../services/audit.service.js");
const apiResponse_js_1 = require("../utils/apiResponse.js");
exports.getSuperDashboard = (0, errorHandler_js_1.asyncHandler)(async (_req, res) => {
    const data = await (0, dashboard_service_js_1.superAdminDashboard)();
    return (0, apiResponse_js_1.ok)(res, "Dashboard retrieved successfully", data);
});
exports.getClinicDashboard = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const clinicObjectId = new mongoose_1.Types.ObjectId((0, apiResponse_js_1.param)(req, "clinicId"));
    const [overview, followups] = await Promise.all([
        (0, dashboard_service_js_1.clinicDashboard)(clinicObjectId),
        (0, dashboard_service_js_1.followupMetrics)(clinicObjectId),
    ]);
    return (0, apiResponse_js_1.ok)(res, "Clinic dashboard retrieved successfully", { overview, followups });
});
exports.listPayments = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const { skip, limit, page } = (0, apiResponse_js_1.parsePagination)(req.query);
    const filter = {};
    if (req.query.status)
        filter.status = req.query.status;
    const [items, total] = await Promise.all([
        Payment_js_1.Payment.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).populate("clinicId", "name").lean(),
        Payment_js_1.Payment.countDocuments(filter),
    ]);
    const [paid] = await Payment_js_1.Payment.aggregate([
        { $match: { status: "PAID" } },
        { $group: { _id: null, total: { $sum: "$paidAmount" } } },
    ]);
    return (0, apiResponse_js_1.ok)(res, "Payments retrieved successfully", { items, total, page, limit, totalRevenue: paid?.total ?? 0 });
});
exports.createPayment = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const payment = await Payment_js_1.Payment.create({
        ...req.body,
        clinicId: req.body.clinicId,
        subscriptionId: req.body.subscriptionId,
        dueDate: new Date(req.body.dueDate),
        paidAt: req.body.status === "PAID" ? new Date() : null,
        createdBy: new mongoose_1.Types.ObjectId(req.authUser.id),
    });
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: new mongoose_1.Types.ObjectId(req.authUser.id),
        action: "Updated Payment",
        module: "PAYMENT",
        clinicId: payment.clinicId,
        recordType: "Payment",
        recordId: payment._id,
        ipAddress: req.ip ?? "",
    });
    return (0, apiResponse_js_1.ok)(res, "Payment recorded successfully", { payment }, 201);
});
exports.listSubscriptions = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const { skip, limit, page } = (0, apiResponse_js_1.parsePagination)(req.query);
    const [items, total] = await Promise.all([
        Subscription_js_1.Subscription.find({ isDeleted: false })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate("clinicId", "name")
            .lean(),
        Subscription_js_1.Subscription.countDocuments({ isDeleted: false }),
    ]);
    return (0, apiResponse_js_1.ok)(res, "Subscriptions retrieved successfully", { items, total, page, limit });
});
exports.listAuditLogs = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const { skip, limit, page } = (0, apiResponse_js_1.parsePagination)(req.query);
    const [items, total] = await Promise.all([
        AuditLog_js_1.AuditLog.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate("actorUserId", "name email role")
            .populate("clinicId", "name")
            .lean(),
        AuditLog_js_1.AuditLog.countDocuments(),
    ]);
    return (0, apiResponse_js_1.ok)(res, "Audit logs retrieved successfully", { items, total, page, limit });
});
exports.listSettings = (0, errorHandler_js_1.asyncHandler)(async (_req, res) => {
    const items = await SystemSetting_js_1.SystemSetting.find().lean();
    return (0, apiResponse_js_1.ok)(res, "Settings retrieved successfully", { items });
});
//# sourceMappingURL=admin.controller.js.map