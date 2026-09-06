"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const mongoose_1 = require("mongoose");
const enums_js_1 = require("../types/enums.js");
const plugins_js_1 = require("./plugins.js");
const subscriptionSchema = new mongoose_1.Schema({
    clinicId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Clinic", required: true, index: true },
    planName: { type: String, required: true, trim: true },
    planCode: { type: String, required: true, trim: true, uppercase: true },
    amount: { type: Number, required: true, min: 0 },
    billingCycle: { type: String, required: true, enum: enums_js_1.BILLING_CYCLES },
    startDate: { type: Date, required: true },
    endDate: { type: Date, default: null },
    nextDueDate: { type: Date, required: true, index: true },
    status: { type: String, required: true, enum: enums_js_1.SUBSCRIPTION_STATUSES, default: "ACTIVE", index: true },
    notes: { type: String, default: "", trim: true },
}, { timestamps: true, collection: "subscriptions" });
(0, plugins_js_1.applySoftDelete)(subscriptionSchema);
(0, plugins_js_1.applyActorFields)(subscriptionSchema);
subscriptionSchema.index({ clinicId: 1, status: 1, isDeleted: 1 });
subscriptionSchema.index({ clinicId: 1, createdAt: -1 });
exports.Subscription = (0, mongoose_1.model)("Subscription", subscriptionSchema);
//# sourceMappingURL=Subscription.js.map