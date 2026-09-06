"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = ok;
exports.fail = fail;
exports.parsePagination = parsePagination;
exports.param = param;
const AppError_js_1 = require("./AppError.js");
function ok(res, message, data = {}, status = 200) {
    return res.status(status).json({ success: true, message, data });
}
function fail(res, message, status = 400, code = "BAD_REQUEST", errors) {
    return res.status(status).json({ success: false, message, code, errors, data: null });
}
function parsePagination(query) {
    const page = Math.max(1, Number(query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(query.limit) || 20));
    return { page, limit, skip: (page - 1) * limit };
}
function param(req, name) {
    const value = req.params[name];
    const id = Array.isArray(value) ? value[0] : value;
    if (!id) {
        throw new AppError_js_1.AppError(`Missing ${name}`, 400, "VALIDATION_ERROR");
    }
    return id;
}
//# sourceMappingURL=apiResponse.js.map