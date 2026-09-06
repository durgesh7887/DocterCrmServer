"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = require("mongoose");
const enums_js_1 = require("../types/enums.js");
const plugins_js_1 = require("./plugins.js");
const paymentSchema = new mongoose_1.Schema({
    clinicId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Clinic", required: true, index: true },
    subscriptionId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Subscription", required: true, index: true },
    amount: { type: Number, required: true, min: 0 },
    paidAmount: { type: Number, required: true, min: 0, default: 0 },
    status: { type: String, required: true, enum: enums_js_1.PAYMENT_STATUSES, default: "PENDING", index: true },
    dueDate: { type: Date, required: true, index: true },
    paidAt: { type: Date, default: null },
    method: { type: String, default: "", trim: true },
    reference: { type: String, default: "", trim: true },
    notes: { type: String, default: "", trim: true },
}, { timestamps: true, collection: "payments" });
(0, plugins_js_1.applyActorFields)(paymentSchema);
paymentSchema.index({ clinicId: 1, status: 1, dueDate: 1 });
paymentSchema.index({ clinicId: 1, createdAt: -1 });
exports.Payment = (0, mongoose_1.model)("Payment", paymentSchema);
//# sourceMappingURL=Payment.js.map