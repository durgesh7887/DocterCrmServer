"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_js_1 = require("../controllers/auth.controller.js");
const auth_js_1 = require("../middleware/auth.js");
const errorHandler_js_1 = require("../middleware/errorHandler.js");
const schemas_js_1 = require("../validators/schemas.js");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post("/login", (0, errorHandler_js_1.validateBody)(schemas_js_1.loginSchema), auth_controller_js_1.login);
exports.authRouter.post("/refresh", auth_controller_js_1.refresh);
exports.authRouter.post("/logout", auth_controller_js_1.logout);
exports.authRouter.get("/me", auth_js_1.authenticate, auth_controller_js_1.me);
//# sourceMappingURL=auth.routes.js.map