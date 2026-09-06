"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
exports.createUser = createUser;
exports.createClinic = createClinic;
const Clinic_js_1 = require("../models/Clinic.js");
const ClinicSettings_js_1 = require("../models/ClinicSettings.js");
const User_js_1 = require("../models/User.js");
const dateAndIdentity_js_1 = require("../utils/dateAndIdentity.js");
const password_js_1 = require("../utils/password.js");
Object.defineProperty(exports, "hashPassword", { enumerable: true, get: function () { return password_js_1.hashPassword; } });
async function createUser(params) {
    return User_js_1.User.create({
        name: params.name,
        email: params.email.toLowerCase(),
        mobileNumber: params.mobileNumber ? (0, dateAndIdentity_js_1.normalizeMobile)(params.mobileNumber) : null,
        passwordHash: await (0, password_js_1.hashPassword)(params.password),
        role: params.role,
        status: "ACTIVE",
        doctorProfile: params.role === "DOCTOR"
            ? {
                specialization: params.specialization ?? "",
                registrationNumber: params.registrationNumber ?? "",
            }
            : undefined,
    });
}
async function createClinic(params) {
    const clinic = await Clinic_js_1.Clinic.create({
        name: params.name,
        ownerName: params.ownerName,
        mobile: (0, dateAndIdentity_js_1.normalizeMobile)(params.mobile) ?? params.mobile,
        email: params.email.toLowerCase(),
        address: { city: params.city ?? "", state: params.state ?? "", country: "India" },
        status: "ACTIVE",
    });
    await ClinicSettings_js_1.ClinicSettings.create({
        clinicId: clinic._id,
        receptionEnabled: params.receptionEnabled ?? true,
    });
    return clinic;
}
//# sourceMappingURL=factories.js.map