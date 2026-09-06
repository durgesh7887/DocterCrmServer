"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateFollowupDate = calculateFollowupDate;
exports.classifyFollowupStatus = classifyFollowupStatus;
const dateAndIdentity_js_1 = require("../utils/dateAndIdentity.js");
function calculateFollowupDate(visitDate, afterDays) {
    if (afterDays < 1) {
        throw new Error("followUpAfterDays must be at least 1");
    }
    return (0, dateAndIdentity_js_1.addUtcDays)(visitDate, afterDays);
}
function classifyFollowupStatus(params) {
    if (params.storedStatus === "COMPLETED" || params.storedStatus === "CANCELLED") {
        return params.storedStatus;
    }
    const today = (0, dateAndIdentity_js_1.startOfUtcDay)(params.now ?? new Date());
    const due = (0, dateAndIdentity_js_1.startOfUtcDay)(params.followupDate);
    if (due.getTime() > today.getTime()) {
        return "UPCOMING";
    }
    if (due.getTime() === today.getTime()) {
        return "DUE";
    }
    return "MISSED";
}
//# sourceMappingURL=followup.service.js.map