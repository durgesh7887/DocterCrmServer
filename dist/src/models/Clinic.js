"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinic = void 0;
const mongoose_1 = require("mongoose");
const enums_js_1 = require("../types/enums.js");
const plugins_js_1 = require("./plugins.js");
const clinicSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    ownerName: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    whatsappNumber: { type: String, trim: true, default: "" },
    email: { type: String, required: true, trim: true, lowercase: true },
    address: { type: plugins_js_1.addressSchema, default: () => ({}) },
    tax: {
        gstin: { type: String, trim: true, default: "" },
        pan: { type: String, trim: true, default: "" },
        legalName: { type: String, trim: true, default: "" },
    },
    status: { type: String, required: true, enum: enums_js_1.CLINIC_STATUSES, default: "ACTIVE", index: true },
    timezone: { type: String, default: "Asia/Kolkata" },
    currentSubscriptionId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Subscription", default: null },
}, { timestamps: true, collection: "clinics" });
(0, plugins_js_1.applySoftDelete)(clinicSchema);
(0, plugins_js_1.applyActorFields)(clinicSchema);
clinicSchema.index({ name: 1, isDeleted: 1 });
clinicSchema.index({ status: 1, isDeleted: 1 });
clinicSchema.index({ "address.city": 1, status: 1 });
exports.Clinic = (0, mongoose_1.model)("Clinic", clinicSchema);
//# sourceMappingURL=Clinic.js.map