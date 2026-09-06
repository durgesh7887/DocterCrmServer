"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceptionClinicAssignment = exports.DoctorClinicAssignment = exports.AdminClinicAssignment = void 0;
const mongoose_1 = require("mongoose");
const plugins_js_1 = require("./plugins.js");
function assignmentSchema(collection) {
    const schema = new mongoose_1.Schema({
        userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true, index: true },
        clinicId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Clinic", required: true, index: true },
        isPrimary: { type: Boolean, default: false },
        status: { type: String, enum: ["ACTIVE", "INACTIVE"], default: "ACTIVE" },
    }, { timestamps: true, collection });
    (0, plugins_js_1.applySoftDelete)(schema);
    (0, plugins_js_1.applyActorFields)(schema);
    schema.index({ userId: 1, clinicId: 1 }, { unique: true, partialFilterExpression: { isDeleted: false } });
    schema.index({ clinicId: 1, status: 1, isDeleted: 1 });
    return schema;
}
const adminClinicAssignmentSchema = assignmentSchema("adminClinicAssignments");
const doctorClinicAssignmentSchema = assignmentSchema("doctorClinicAssignments");
const receptionClinicAssignmentSchema = assignmentSchema("receptionClinicAssignments");
exports.AdminClinicAssignment = (0, mongoose_1.model)("AdminClinicAssignment", adminClinicAssignmentSchema);
exports.DoctorClinicAssignment = (0, mongoose_1.model)("DoctorClinicAssignment", doctorClinicAssignmentSchema);
exports.ReceptionClinicAssignment = (0, mongoose_1.model)("ReceptionClinicAssignment", receptionClinicAssignmentSchema);
//# sourceMappingURL=ClinicAssignments.js.map