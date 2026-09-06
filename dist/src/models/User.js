"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const enums_js_1 = require("../types/enums.js");
const plugins_js_1 = require("./plugins.js");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    mobileNumber: { type: String, default: null, trim: true },
    passwordHash: { type: String, required: true, select: false },
    role: { type: String, required: true, enum: enums_js_1.USER_ROLES, index: true },
    status: { type: String, required: true, enum: enums_js_1.USER_STATUSES, default: "ACTIVE", index: true },
    lastLoginAt: { type: Date, default: null },
    doctorProfile: {
        specialization: { type: String, trim: true, default: "" },
        registrationNumber: { type: String, trim: true, default: "" },
    },
}, { timestamps: true, collection: "users" });
(0, plugins_js_1.applySoftDelete)(userSchema);
(0, plugins_js_1.applyActorFields)(userSchema);
userSchema.index({ email: 1 }, { unique: true, partialFilterExpression: { isDeleted: false } });
userSchema.index({ mobileNumber: 1 }, { unique: true, partialFilterExpression: { isDeleted: false, mobileNumber: { $type: "string" } } });
userSchema.index({ role: 1, status: 1, isDeleted: 1 });
exports.User = (0, mongoose_1.model)("User", userSchema);
//# sourceMappingURL=User.js.map