"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeMobile = normalizeMobile;
exports.requireNormalizedMobile = requireNormalizedMobile;
exports.escapeRegex = escapeRegex;
exports.startOfUtcDay = startOfUtcDay;
exports.addUtcDays = addUtcDays;
function normalizeMobile(input) {
    if (!input) {
        return null;
    }
    const digits = input.replace(/\D/g, "");
    if (digits.length < 10) {
        return null;
    }
    return digits.slice(-10);
}
function requireNormalizedMobile(input) {
    const normalized = normalizeMobile(input);
    if (!normalized) {
        throw new Error("A valid 10-digit mobile number is required");
    }
    return normalized;
}
function escapeRegex(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function startOfUtcDay(date) {
    return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}
function addUtcDays(date, days) {
    const base = startOfUtcDay(date);
    base.setUTCDate(base.getUTCDate() + days);
    return base;
}
//# sourceMappingURL=dateAndIdentity.js.map