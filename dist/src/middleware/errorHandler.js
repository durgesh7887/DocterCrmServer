"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = validateBody;
exports.errorHandler = errorHandler;
exports.asyncHandler = asyncHandler;
const AppError_js_1 = require("../utils/AppError.js");
const apiResponse_js_1 = require("../utils/apiResponse.js");
function validateBody(schema) {
    return (req, _res, next) => {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success) {
            next(new AppError_js_1.AppError("Validation failed", 422, "VALIDATION_ERROR", parsed.error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
            }))));
            return;
        }
        req.body = parsed.data;
        next();
    };
}
function errorHandler(err, _req, res, _next) {
    if (err instanceof AppError_js_1.AppError) {
        return (0, apiResponse_js_1.fail)(res, err.message, err.statusCode, err.code, err.errors);
    }
    const mongo = err;
    if (mongo?.code === 11000) {
        return (0, apiResponse_js_1.fail)(res, "A record with those unique values already exists", 409, "CONFLICT");
    }
    console.error(err);
    return (0, apiResponse_js_1.fail)(res, mongo?.message || "Internal server error", 500, "INTERNAL");
}
function asyncHandler(fn) {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
}
//# sourceMappingURL=errorHandler.js.map