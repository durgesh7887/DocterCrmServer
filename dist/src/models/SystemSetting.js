"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemSetting = void 0;
const mongoose_1 = require("mongoose");
const systemSettingSchema = new mongoose_1.Schema({
    key: { type: String, required: true, unique: true, trim: true },
    value: { type: mongoose_1.Schema.Types.Mixed, required: true },
    description: { type: String, default: "" },
}, { timestamps: true, collection: "systemSettings" });
exports.SystemSetting = (0, mongoose_1.model)("SystemSetting", systemSettingSchema);
//# sourceMappingURL=SystemSetting.js.map