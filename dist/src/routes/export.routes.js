"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportRouter = void 0;
const express_1 = require("express");
const export_controller_js_1 = require("../controllers/export.controller.js");
const auth_js_1 = require("../middleware/auth.js");
exports.exportRouter = (0, express_1.Router)();
exports.exportRouter.use(auth_js_1.authenticate);
// Export ALL clinics data — super admin only
exports.exportRouter.get("/export/all", (0, auth_js_1.requireRoles)("SUPER_ADMIN"), export_controller_js_1.exportAll);
// Export single clinic data — super admin (or admins with clinic access)
exports.exportRouter.get("/export/clinic/:clinicId", auth_js_1.requireClinicAccess, export_controller_js_1.exportClinic);
//# sourceMappingURL=export.routes.js.map