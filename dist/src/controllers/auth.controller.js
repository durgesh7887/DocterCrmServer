"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.me = exports.logout = exports.refresh = exports.login = void 0;
const env_js_1 = require("../config/env.js");
const auth_service_js_1 = require("../services/auth.service.js");
const audit_service_js_1 = require("../services/audit.service.js");
const apiResponse_js_1 = require("../utils/apiResponse.js");
const AppError_js_1 = require("../utils/AppError.js");
const errorHandler_js_1 = require("../middleware/errorHandler.js");
const mongoose_1 = require("mongoose");
const cookieOptions = {
    httpOnly: true,
    sameSite: "lax",
    secure: env_js_1.env.nodeEnv === "production",
    path: "/api/v1/auth",
    maxAge: 7 * 24 * 60 * 60 * 1000,
};
exports.login = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const result = await (0, auth_service_js_1.loginWithPassword)(req.body.email, req.body.password, {
        ip: req.ip ?? "",
        userAgent: req.get("user-agent") ?? "",
    });
    await (0, audit_service_js_1.writeAuditLog)({
        actorUserId: new mongoose_1.Types.ObjectId(result.user.id),
        action: "Login",
        module: "AUTH",
        recordType: "User",
        recordId: new mongoose_1.Types.ObjectId(result.user.id),
        ipAddress: req.ip ?? "",
    });
    res.cookie(env_js_1.env.cookieName, result.refreshToken, cookieOptions);
    return (0, apiResponse_js_1.ok)(res, "Logged in successfully", {
        accessToken: result.accessToken,
        user: result.user,
    });
});
exports.refresh = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const token = req.cookies?.[env_js_1.env.cookieName];
    if (!token) {
        throw new AppError_js_1.AppError("Refresh token missing", 401, "UNAUTHORIZED");
    }
    const result = await (0, auth_service_js_1.rotateRefreshToken)(token, {
        ip: req.ip ?? "",
        userAgent: req.get("user-agent") ?? "",
    });
    res.cookie(env_js_1.env.cookieName, result.refreshToken, cookieOptions);
    return (0, apiResponse_js_1.ok)(res, "Session refreshed", { accessToken: result.accessToken, user: result.user });
});
exports.logout = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    const token = req.cookies?.[env_js_1.env.cookieName];
    if (token) {
        await (0, auth_service_js_1.revokeRefreshToken)(token);
    }
    res.clearCookie(env_js_1.env.cookieName, { path: "/api/v1/auth" });
    return (0, apiResponse_js_1.ok)(res, "Logged out successfully");
});
exports.me = (0, errorHandler_js_1.asyncHandler)(async (req, res) => {
    return (0, apiResponse_js_1.ok)(res, "Session loaded", { user: req.authUser });
});
//# sourceMappingURL=auth.controller.js.map