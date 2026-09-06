"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeAuditLog = writeAuditLog;
const AuditLog_js_1 = require("../models/AuditLog.js");
async function writeAuditLog(input) {
    return AuditLog_js_1.AuditLog.create({
        actorUserId: input.actorUserId ?? null,
        action: input.action,
        module: input.module,
        clinicId: input.clinicId ?? null,
        recordType: input.recordType,
        recordId: input.recordId ?? null,
        metadata: input.metadata ?? {},
        ipAddress: input.ipAddress ?? "",
        userAgent: input.userAgent ?? "",
    });
}
//# sourceMappingURL=audit.service.js.map