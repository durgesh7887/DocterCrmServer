"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visit = void 0;
const mongoose_1 = require("mongoose");
const enums_js_1 = require("../types/enums.js");
const plugins_js_1 = require("./plugins.js");
const visitSchema = new mongoose_1.Schema({
    clinicId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Clinic", required: true },
    patientId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Patient", required: true, index: true },
    doctorId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", default: null, index: true },
    appointmentId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Appointment", default: null },
    visitCode: { type: String, required: true, trim: true },
    visitDate: { type: Date, required: true, index: true },
    visitType: { type: String, required: true, enum: enums_js_1.VISIT_TYPES, default: "WALK_IN" },
    status: { type: String, required: true, enum: enums_js_1.VISIT_STATUSES, default: "OPEN", index: true },
    chiefComplaint: { type: String, default: "", trim: true },
}, { timestamps: true, collection: "visits" });
(0, plugins_js_1.applySoftDelete)(visitSchema);
(0, plugins_js_1.applyActorFields)(visitSchema);
visitSchema.index({ clinicId: 1, visitCode: 1 }, { unique: true, partialFilterExpression: { isDeleted: false } });
visitSchema.index({ clinicId: 1, visitDate: -1 });
visitSchema.index({ clinicId: 1, patientId: 1, visitDate: -1 });
visitSchema.index({ clinicId: 1, doctorId: 1, visitDate: -1 });
exports.Visit = (0, mongoose_1.model)("Visit", visitSchema);
//# sourceMappingURL=Visit.js.map