"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicSettings = void 0;
const mongoose_1 = require("mongoose");
const plugins_js_1 = require("./plugins.js");
const clinicSettingsSchema = new mongoose_1.Schema({
    clinicId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Clinic", required: true, unique: true },
    receptionEnabled: { type: Boolean, default: true },
    appointmentsEnabled: { type: Boolean, default: true },
    followupsEnabled: { type: Boolean, default: true },
    whatsappEnabled: { type: Boolean, default: false },
    reportsEnabled: { type: Boolean, default: true },
    multipleDoctorsEnabled: { type: Boolean, default: true },
    subscriptionsEnabled: { type: Boolean, default: true },
}, { timestamps: true, collection: "clinicSettings" });
(0, plugins_js_1.applyActorFields)(clinicSettingsSchema);
exports.ClinicSettings = (0, mongoose_1.model)("ClinicSettings", clinicSettingsSchema);
//# sourceMappingURL=ClinicSettings.js.map