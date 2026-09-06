"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappMessage = void 0;
const mongoose_1 = require("mongoose");
const enums_js_1 = require("../types/enums.js");
const whatsappMessageSchema = new mongoose_1.Schema({
    clinicId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Clinic", required: true, index: true },
    notificationId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Notification", default: null },
    patientId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Patient", default: null },
    toMobile: { type: String, required: true, trim: true },
    templateKey: { type: String, required: true, trim: true },
    body: { type: String, required: true },
    providerMessageId: { type: String, default: "", index: true },
    status: { type: String, required: true, enum: enums_js_1.WHATSAPP_MESSAGE_STATUSES, default: "QUEUED", index: true },
    errorMessage: { type: String, default: "" },
    sentAt: { type: Date, default: null },
}, { timestamps: true, collection: "whatsappMessages" });
whatsappMessageSchema.index({ clinicId: 1, createdAt: -1 });
whatsappMessageSchema.index({ status: 1, createdAt: 1 });
exports.WhatsappMessage = (0, mongoose_1.model)("WhatsappMessage", whatsappMessageSchema);
//# sourceMappingURL=WhatsappMessage.js.map