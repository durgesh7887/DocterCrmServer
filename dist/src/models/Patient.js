"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
const mongoose_1 = require("mongoose");
const enums_js_1 = require("../types/enums.js");
const plugins_js_1 = require("./plugins.js");
const patientSchema = new mongoose_1.Schema({
    clinicId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Clinic", required: true },
    familyId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Family", default: null, index: true },
    patientCode: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    nameNormalized: { type: String, required: true, trim: true, lowercase: true },
    mobileNumber: { type: String, default: null, trim: true },
    isMobileOwner: { type: Boolean, default: true },
    gender: { type: String, enum: enums_js_1.GENDERS, default: "UNSPECIFIED" },
    dateOfBirth: { type: Date, default: null },
    bloodGroup: { type: String, default: "", trim: true },
    email: { type: String, default: "", trim: true, lowercase: true },
    address: { type: plugins_js_1.addressSchema, default: () => ({}) },
    notes: { type: String, default: "", trim: true },
    lastVisitAt: { type: Date, default: null },
}, { timestamps: true, collection: "patients" });
(0, plugins_js_1.applySoftDelete)(patientSchema);
(0, plugins_js_1.applyActorFields)(patientSchema);
patientSchema.index({ clinicId: 1, patientCode: 1 }, { unique: true, partialFilterExpression: { isDeleted: false } });
patientSchema.index({ clinicId: 1, mobileNumber: 1, isDeleted: 1 });
patientSchema.index({ clinicId: 1, nameNormalized: 1, isDeleted: 1 });
patientSchema.index({ clinicId: 1, familyId: 1, isDeleted: 1 });
patientSchema.index({ clinicId: 1, createdAt: -1 });
exports.Patient = (0, mongoose_1.model)("Patient", patientSchema);
//# sourceMappingURL=Patient.js.map