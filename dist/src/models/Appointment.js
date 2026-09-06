"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
const mongoose_1 = require("mongoose");
const enums_js_1 = require("../types/enums.js");
const plugins_js_1 = require("./plugins.js");
const appointmentSchema = new mongoose_1.Schema({
    clinicId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Clinic", required: true },
    patientId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Patient", required: true, index: true },
    doctorId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    appointmentDate: { type: Date, required: true },
    durationMinutes: { type: Number, default: 15, min: 5 },
    status: { type: String, required: true, enum: enums_js_1.APPOINTMENT_STATUSES, default: "SCHEDULED", index: true },
    notes: { type: String, default: "", trim: true },
    visitId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Visit", default: null },
}, { timestamps: true, collection: "appointments" });
(0, plugins_js_1.applySoftDelete)(appointmentSchema);
(0, plugins_js_1.applyActorFields)(appointmentSchema);
appointmentSchema.index({ clinicId: 1, appointmentDate: 1, status: 1, isDeleted: 1 });
appointmentSchema.index({ clinicId: 1, doctorId: 1, appointmentDate: 1 });
appointmentSchema.index({ clinicId: 1, patientId: 1, appointmentDate: -1 });
exports.Appointment = (0, mongoose_1.model)("Appointment", appointmentSchema);
//# sourceMappingURL=Appointment.js.map