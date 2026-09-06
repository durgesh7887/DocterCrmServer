"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextSequence = nextSequence;
exports.nextCode = nextCode;
const Counter_js_1 = require("../models/Counter.js");
async function nextSequence(key) {
    const counter = await Counter_js_1.Counter.findOneAndUpdate({ key }, { $inc: { seq: 1 } }, { upsert: true, new: true });
    return counter.seq;
}
async function nextCode(prefix, clinicId, pad = 5) {
    const seq = await nextSequence(`${prefix}:${clinicId.toString()}`);
    return `${prefix}-${String(seq).padStart(pad, "0")}`;
}
//# sourceMappingURL=counter.service.js.map