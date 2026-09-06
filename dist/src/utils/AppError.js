"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    statusCode;
    code;
    errors;
    constructor(message, statusCode = 400, code = "BAD_REQUEST", errors) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.errors = errors;
        this.name = "AppError";
    }
}
exports.AppError = AppError;
//# sourceMappingURL=AppError.js.map