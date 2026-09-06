"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Followup = void 0;
const mongoose_1 = require("mongoose");
const enums_js_1 = require("../types/enums.js");
const plugins_js_1 = require("./plugins.js");
const followupSchema = new mongoose_1.Schema({
    clinicId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Clinic", required: true },
    patientId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Patient", required: true, index: true },
    visitId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Visit", required: true, index: true },
    consultationId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Consultation", default: null },
    doctorId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", default: null },
    followupDate: { type: Date, required: true },
    followUpAfterDays: { type: Number, required: true, min: 1 },
    status: { type: String, required: true, enum: enums_js_1.FOLLOWUP_STATUSES, default: "UPCOMING", index: true },
    completedAt: { type: Date, default: null },
    completedVisitId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Visit", default: null },
    notes: { type: String, default: "", trim: true },
}, { timestamps: true, collection: "followups" });
(0, plugins_js_1.applySoftDelete)(followupSchema);
(0, plugins_js_1.applyActorFields)(followupSchema);
followupSchema.index({ clinicId: 1, followupDate: 1, status: 1, isDeleted: 1 });
followupSchema.index({ clinicId: 1, patientId: 1, followupDate: -1 });
exports.Followup = (0, mongoose_1.model)("Followup", followupSchema);
//# sourceMappingURL=Followup.js.map