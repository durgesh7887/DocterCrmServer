"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignUserToClinic = assignUserToClinic;
exports.getAssignedClinicIds = getAssignedClinicIds;
exports.assertClinicAccess = assertClinicAccess;
exports.getAccessibleClinicIds = getAccessibleClinicIds;
const ClinicAssignments_js_1 = require("../models/ClinicAssignments.js");
const assignmentModelByRole = {
    ADMIN: ClinicAssignments_js_1.AdminClinicAssignment,
    DOCTOR: ClinicAssignments_js_1.DoctorClinicAssignment,
    RECEPTION: ClinicAssignments_js_1.ReceptionClinicAssignment,
};
async function assignUserToClinic(params) {
    const Model = assignmentModelByRole[params.role];
    return Model.create({
        userId: params.userId,
        clinicId: params.clinicId,
        isPrimary: params.isPrimary ?? false,
        status: "ACTIVE",
        createdBy: params.actorUserId ?? null,
    });
}
async function getAssignedClinicIds(role, userId) {
    const Model = assignmentModelByRole[role];
    const rows = await Model.find({ userId, isDeleted: false, status: "ACTIVE" })
        .select("clinicId")
        .lean();
    return rows.map((row) => row.clinicId);
}
function assertClinicAccess(assignedClinicIds, clinicId) {
    const allowed = assignedClinicIds.some((id) => id.equals(clinicId));
    if (!allowed) {
        throw new Error("Clinic access denied");
    }
}
async function getAccessibleClinicIds(role, userId) {
    if (role === "SUPER_ADMIN") {
        return [];
    }
    return getAssignedClinicIds(role, userId);
}
//# sourceMappingURL=assignment.service.js.map