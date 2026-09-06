"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
exports.requireRoles = requireRoles;
exports.requirePermission = requirePermission;
exports.requireClinicAccess = requireClinicAccess;
const mongoose_1 = require("mongoose");
const User_js_1 = require("../models/User.js");
const auth_service_js_1 = require("../services/auth.service.js");
const AppError_js_1 = require("../utils/AppError.js");
const apiResponse_js_1 = require("../utils/apiResponse.js");
async function authenticate(req, _res, next) {
    try {
        const header = req.headers.authorization;
        const token = header?.startsWith("Bearer ") ? header.slice(7) : null;
        if (!token) {
            throw new AppError_js_1.AppError("Authentication required", 401, "UNAUTHORIZED");
        }
        const payload = (0, auth_service_js_1.verifyAccessToken)(token);
        const user = await User_js_1.User.findOne({ _id: payload.sub, isDeleted: false, status: "ACTIVE" });
        if (!user) {
            throw new AppError_js_1.AppError("Authentication required", 401, "UNAUTHORIZED");
        }
        req.authUser = await (0, auth_service_js_1.toAuthUser)(user);
        next();
    }
    catch (error) {
        next(error);
    }
}
function requireRoles(...roles) {
    return (req, _res, next) => {
        if (!req.authUser || !roles.includes(req.authUser.role)) {
            next(new AppError_js_1.AppError("You do not have access to this resource", 403, "FORBIDDEN"));
            return;
        }
        next();
    };
}
function requirePermission(permission) {
    return (req, _res, next) => {
        if (!req.authUser?.permissions.includes(permission)) {
            next(new AppError_js_1.AppError("You do not have permission for this action", 403, "FORBIDDEN"));
            return;
        }
        next();
    };
}
function requireClinicAccess(req, _res, next) {
    try {
        const clinicId = (0, apiResponse_js_1.param)(req, "clinicId");
        if (!clinicId || !mongoose_1.Types.ObjectId.isValid(clinicId)) {
            throw new AppError_js_1.AppError("Invalid clinic", 400, "VALIDATION_ERROR");
        }
        const user = req.authUser;
        if (!user) {
            throw new AppError_js_1.AppError("Authentication required", 401, "UNAUTHORIZED");
        }
        if (user.role !== "SUPER_ADMIN") {
            const allowed = user.clinicIds.some((id) => id.toString() === clinicId);
            if (!allowed) {
                throw new AppError_js_1.AppError("Clinic access denied", 403, "FORBIDDEN");
            }
        }
        next();
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=auth.js.map