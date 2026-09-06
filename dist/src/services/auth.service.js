"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAuthUser = toAuthUser;
exports.loginWithPassword = loginWithPassword;
exports.rotateRefreshToken = rotateRefreshToken;
exports.revokeRefreshToken = revokeRefreshToken;
exports.verifyAccessToken = verifyAccessToken;
const node_crypto_1 = __importDefault(require("node:crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = require("mongoose");
const permissions_js_1 = require("../config/permissions.js");
const env_js_1 = require("../config/env.js");
const RefreshToken_js_1 = require("../models/RefreshToken.js");
const User_js_1 = require("../models/User.js");
const AppError_js_1 = require("../utils/AppError.js");
const password_js_1 = require("../utils/password.js");
const assignment_service_js_1 = require("./assignment.service.js");
function signAccessToken(userId, role) {
    return jsonwebtoken_1.default.sign({ sub: userId, role }, env_js_1.env.jwtAccessSecret, {
        expiresIn: env_js_1.env.accessTtl,
    });
}
function signRefreshToken(userId, tokenId) {
    return jsonwebtoken_1.default.sign({ sub: userId, jti: tokenId }, env_js_1.env.jwtRefreshSecret, {
        expiresIn: env_js_1.env.refreshTtl,
    });
}
function hashToken(token) {
    return node_crypto_1.default.createHash("sha256").update(token).digest("hex");
}
async function toAuthUser(user) {
    const clinicIds = await (0, assignment_service_js_1.getAccessibleClinicIds)(user.role, user._id);
    return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        permissions: [...(permissions_js_1.ROLE_PERMISSIONS[user.role] ?? [])],
        clinicIds: clinicIds.map((id) => id.toString()),
    };
}
async function loginWithPassword(email, password, meta) {
    const user = await User_js_1.User.findOne({
        email: email.toLowerCase().trim(),
        isDeleted: false,
    }).select("+passwordHash");
    if (!user || user.status !== "ACTIVE") {
        throw new AppError_js_1.AppError("Invalid email or password", 401, "UNAUTHORIZED");
    }
    const matches = await (0, password_js_1.verifyPassword)(password, user.passwordHash);
    if (!matches) {
        throw new AppError_js_1.AppError("Invalid email or password", 401, "UNAUTHORIZED");
    }
    user.lastLoginAt = new Date();
    await user.save();
    const tokenId = new mongoose_1.Types.ObjectId().toString();
    const refreshToken = signRefreshToken(user._id.toString(), tokenId);
    await RefreshToken_js_1.RefreshToken.create({
        userId: user._id,
        tokenHash: hashToken(refreshToken),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        ipAddress: meta.ip,
        userAgent: meta.userAgent,
    });
    const authUser = await toAuthUser(user);
    return {
        accessToken: signAccessToken(user._id.toString(), user.role),
        refreshToken,
        user: authUser,
    };
}
async function rotateRefreshToken(refreshToken, meta) {
    let payload;
    try {
        payload = jsonwebtoken_1.default.verify(refreshToken, env_js_1.env.jwtRefreshSecret);
    }
    catch {
        throw new AppError_js_1.AppError("Invalid refresh token", 401, "UNAUTHORIZED");
    }
    const stored = await RefreshToken_js_1.RefreshToken.findOne({ tokenHash: hashToken(refreshToken), revokedAt: null });
    if (!stored || stored.expiresAt.getTime() < Date.now()) {
        throw new AppError_js_1.AppError("Invalid refresh token", 401, "UNAUTHORIZED");
    }
    stored.revokedAt = new Date();
    await stored.save();
    const user = await User_js_1.User.findOne({ _id: payload.sub, isDeleted: false, status: "ACTIVE" });
    if (!user) {
        throw new AppError_js_1.AppError("Invalid refresh token", 401, "UNAUTHORIZED");
    }
    const tokenId = new mongoose_1.Types.ObjectId().toString();
    const nextRefresh = signRefreshToken(user._id.toString(), tokenId);
    await RefreshToken_js_1.RefreshToken.create({
        userId: user._id,
        tokenHash: hashToken(nextRefresh),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        ipAddress: meta.ip,
        userAgent: meta.userAgent,
    });
    return {
        accessToken: signAccessToken(user._id.toString(), user.role),
        refreshToken: nextRefresh,
        user: await toAuthUser(user),
    };
}
async function revokeRefreshToken(refreshToken) {
    await RefreshToken_js_1.RefreshToken.updateOne({ tokenHash: hashToken(refreshToken) }, { $set: { revokedAt: new Date() } });
}
function verifyAccessToken(token) {
    try {
        return jsonwebtoken_1.default.verify(token, env_js_1.env.jwtAccessSecret);
    }
    catch {
        throw new AppError_js_1.AppError("Authentication required", 401, "UNAUTHORIZED");
    }
}
//# sourceMappingURL=auth.service.js.map