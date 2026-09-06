"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
const mongoose_1 = require("mongoose");
const permissionSchema = new mongoose_1.Schema({
    key: { type: String, required: true, unique: true, trim: true },
    module: { type: String, required: true, trim: true, index: true },
    description: { type: String, required: true, trim: true },
}, { timestamps: true, collection: "permissions" });
exports.Permission = (0, mongoose_1.model)("Permission", permissionSchema);
//# sourceMappingURL=Permission.js.map