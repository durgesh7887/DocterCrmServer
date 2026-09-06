"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressSchema = void 0;
exports.applySoftDelete = applySoftDelete;
exports.applyActorFields = applyActorFields;
const mongoose_1 = require("mongoose");
exports.addressSchema = new mongoose_1.Schema({
    line1: { type: String, trim: true, default: "" },
    line2: { type: String, trim: true, default: "" },
    city: { type: String, trim: true, default: "" },
    state: { type: String, trim: true, default: "" },
    pincode: { type: String, trim: true, default: "" },
    country: { type: String, trim: true, default: "India" },
}, { _id: false });
function applySoftDelete(schema) {
    schema.add({
        isDeleted: { type: Boolean, default: false, index: true },
        deletedAt: { type: Date, default: null },
        deletedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", default: null },
    });
}
function applyActorFields(schema) {
    schema.add({
        createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", default: null },
        updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", default: null },
    });
}
//# sourceMappingURL=plugins.js.map