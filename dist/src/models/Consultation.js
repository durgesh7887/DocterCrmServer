"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consultation = void 0;
const mongoose_1 = require("mongoose");
const plugins_js_1 = require("./plugins.js");
const consultationSchema = new mongoose_1.Schema({
    clinicId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Clinic", required: true },
    patientId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Patient", required: true, index: true },
    visitId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Visit", required: true, unique: true },
    doctorId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", default: null, index: true },
    chiefComplaint: { type: String, default: "", trim: true },
    symptoms: { type: [String], default: [] },
    problemDetails: { type: String, default: "", trim: true },
    diagnosis: { type: String, default: "", trim: true },
    notes: { type: String, default: "", trim: true },
    vitals: {
        bloodPressure: { type: String, default: "" },
        pulse: { type: Number, default: null },
        temperatureC: { type: Number, default: null },
        weightKg: { type: Number, default: null },
        heightCm: { type: Number, default: null },
    },
    followUpRequired: { type: Boolean, default: false },
    followUpAfterDays: { type: Number, default: null, min: 1 },
}, { timestamps: true, collection: "consultations" });
(0, plugins_js_1.applySoftDelete)(consultationSchema);
(0, plugins_js_1.applyActorFields)(consultationSchema);
consultationSchema.index({ clinicId: 1, patientId: 1, createdAt: -1 });
consultationSchema.index({ clinicId: 1, doctorId: 1, createdAt: -1 });
exports.Consultation = (0, mongoose_1.model)("Consultation", consultationSchema);
//# sourceMappingURL=Consultation.js.map