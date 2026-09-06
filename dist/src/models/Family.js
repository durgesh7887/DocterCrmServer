"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Family = void 0;
const mongoose_1 = require("mongoose");
const plugins_js_1 = require("./plugins.js");
const familySchema = new mongoose_1.Schema({
    clinicId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Clinic", required: true, index: true },
    name: { type: String, required: true, trim: true },
    primaryMobile: { type: String, default: null, trim: true },
    notes: { type: String, default: "", trim: true },
}, { timestamps: true, collection: "families" });
(0, plugins_js_1.applySoftDelete)(familySchema);
(0, plugins_js_1.applyActorFields)(familySchema);
familySchema.index({ clinicId: 1, name: 1, isDeleted: 1 });
familySchema.index({ clinicId: 1, primaryMobile: 1, isDeleted: 1 });
exports.Family = (0, mongoose_1.model)("Family", familySchema);
//# sourceMappingURL=Family.js.map