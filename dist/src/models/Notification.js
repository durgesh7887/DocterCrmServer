"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const mongoose_1 = require("mongoose");
const enums_js_1 = require("../types/enums.js");
const notificationSchema = new mongoose_1.Schema({
    clinicId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Clinic", default: null, index: true },
    patientId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Patient", default: null, index: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", default: null },
    channel: { type: String, required: true, enum: enums_js_1.NOTIFICATION_CHANNELS },
    templateKey: { type: String, required: true, trim: true },
    payload: { type: mongoose_1.Schema.Types.Mixed, default: {} },
    scheduledFor: { type: Date, default: null, index: true },
    status: { type: String, required: true, enum: enums_js_1.NOTIFICATION_STATUSES, default: "QUEUED", index: true },
    errorMessage: { type: String, default: "" },
    sentAt: { type: Date, default: null },
}, { timestamps: true, collection: "notifications" });
notificationSchema.index({ status: 1, scheduledFor: 1 });
exports.Notification = (0, mongoose_1.model)("Notification", notificationSchema);
//# sourceMappingURL=Notification.js.map