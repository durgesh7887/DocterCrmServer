import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import type { AuthUser } from "../types/express.js";
import type { UserRole } from "../types/enums.js";
export declare function toAuthUser(user: {
    _id: Types.ObjectId;
    name: string;
    email: string;
    role: UserRole;
}): Promise<AuthUser>;
export declare function loginWithPassword(email: string, password: string, meta: {
    ip: string;
    userAgent: string;
}): Promise<{
    accessToken: string;
    refreshToken: string;
    user: AuthUser;
}>;
export declare function rotateRefreshToken(refreshToken: string, meta: {
    ip: string;
    userAgent: string;
}): Promise<{
    accessToken: string;
    refreshToken: string;
    user: AuthUser;
}>;
export declare function revokeRefreshToken(refreshToken: string): Promise<void>;
export declare function verifyAccessToken(token: string): jwt.JwtPayload;
