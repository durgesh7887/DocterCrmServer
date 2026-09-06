"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedCatalog = seedCatalog;
const permissions_js_1 = require("../config/permissions.js");
const Permission_js_1 = require("../models/Permission.js");
const Role_js_1 = require("../models/Role.js");
const SystemSetting_js_1 = require("../models/SystemSetting.js");
const enums_js_1 = require("../types/enums.js");
const ROLE_DESCRIPTIONS = {
    SUPER_ADMIN: "Full system control across all clinics",
    ADMIN: "Clinic operations for assigned clinics only",
    RECEPTION: "Daily patient, visit, follow-up and appointment operations",
    DOCTOR: "Clinical access to assigned clinics via Doctor PWA",
};
async function seedCatalog() {
    await Permission_js_1.Permission.bulkWrite(permissions_js_1.DEFAULT_PERMISSIONS.map((permission) => ({
        updateOne: {
            filter: { key: permission.key },
            update: { $set: permission },
            upsert: true,
        },
    })));
    await Role_js_1.Role.bulkWrite(enums_js_1.USER_ROLES.map((name) => ({
        updateOne: {
            filter: { name },
            update: {
                $set: {
                    name,
                    description: ROLE_DESCRIPTIONS[name],
                    permissions: [...permissions_js_1.ROLE_PERMISSIONS[name]],
                    isSystem: true,
                },
            },
            upsert: true,
        },
    })));
    await SystemSetting_js_1.SystemSetting.findOneAndUpdate({ key: "app.name" }, { $set: { key: "app.name", value: "MedFlow CRM", description: "Product name" } }, { upsert: true });
}
//# sourceMappingURL=seedCatalog.js.map