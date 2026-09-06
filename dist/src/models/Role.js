"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const mongoose_1 = require("mongoose");
const enums_js_1 = require("../types/enums.js");
const roleSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true, enum: enums_js_1.USER_ROLES },
    description: { type: String, required: true, trim: true },
    permissions: { type: [String], default: [] },
    isSystem: { type: Boolean, default: true },
}, { timestamps: true, collection: "roles" });
exports.Role = (0, mongoose_1.model)("Role", roleSchema);
//# sourceMappingURL=Role.js.map