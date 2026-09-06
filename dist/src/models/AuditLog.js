"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLog = void 0;
const mongoose_1 = require("mongoose");
const enums_js_1 = require("../types/enums.js");
const auditLogSchema = new mongoose_1.Schema({
    actorUserId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", default: null, index: true },
    action: { type: String, required: true, trim: true, index: true },
    module: { type: String, required: true, enum: enums_js_1.AUDIT_MODULES, index: true },
    clinicId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Clinic", default: null, index: true },
    recordType: { type: String, required: true, trim: true },
    recordId: { type: mongoose_1.Schema.Types.ObjectId, default: null, index: true },
    metadata: { type: mongoose_1.Schema.Types.Mixed, default: {} },
    ipAddress: { type: String, default: "" },
    userAgent: { type: String, default: "" },
}, { timestamps: { createdAt: true, updatedAt: false }, collection: "auditLogs" });
auditLogSchema.index({ createdAt: -1 });
auditLogSchema.index({ clinicId: 1, createdAt: -1 });
auditLogSchema.index({ module: 1, action: 1, createdAt: -1 });
exports.AuditLog = (0, mongoose_1.model)("AuditLog", auditLogSchema);
//# sourceMappingURL=AuditLog.js.map