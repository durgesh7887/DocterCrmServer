"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPatientsByMobile = findPatientsByMobile;
exports.searchPatients = searchPatients;
exports.createPatient = createPatient;
exports.createFamily = createFamily;
const Family_js_1 = require("../models/Family.js");
const Patient_js_1 = require("../models/Patient.js");
const counter_service_js_1 = require("./counter.service.js");
const dateAndIdentity_js_1 = require("../utils/dateAndIdentity.js");
async function findPatientsByMobile(clinicId, mobile) {
    const mobileNumber = (0, dateAndIdentity_js_1.requireNormalizedMobile)(mobile);
    return Patient_js_1.Patient.find({
        clinicId,
        mobileNumber,
        isDeleted: false,
    }).sort({ isMobileOwner: -1, createdAt: 1 });
}
async function searchPatients(params) {
    const filter = { clinicId: params.clinicId, isDeleted: false };
    if (params.familyId) {
        filter.familyId = params.familyId;
    }
    const query = params.query?.trim();
    if (query) {
        const mobile = (0, dateAndIdentity_js_1.normalizeMobile)(query);
        const or = [
            { patientCode: new RegExp(`^${(0, dateAndIdentity_js_1.escapeRegex)(query)}$`, "i") },
            { nameNormalized: new RegExp((0, dateAndIdentity_js_1.escapeRegex)(query.toLowerCase()), "i") },
        ];
        if (mobile) {
            or.push({ mobileNumber: mobile });
        }
        filter.$or = or;
    }
    const limit = Math.min(params.limit ?? 20, 100);
    const skip = params.skip ?? 0;
    const [items, total] = await Promise.all([
        Patient_js_1.Patient.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
        Patient_js_1.Patient.countDocuments(filter),
    ]);
    return { items, total, limit, skip };
}
async function createPatient(params) {
    const mobileNumber = params.mobileNumber ? (0, dateAndIdentity_js_1.requireNormalizedMobile)(params.mobileNumber) : null;
    if (mobileNumber && params.isMobileOwner !== false && !params.allowDuplicateMobile) {
        const existing = await findPatientsByMobile(params.clinicId, mobileNumber);
        if (existing.length > 0) {
            throw new Error("Patient with this mobile number already exists in the clinic");
        }
    }
    const patientCode = await (0, counter_service_js_1.nextCode)("P", params.clinicId);
    return Patient_js_1.Patient.create({
        clinicId: params.clinicId,
        familyId: params.familyId ?? null,
        patientCode,
        name: params.name.trim(),
        nameNormalized: params.name.trim().toLowerCase(),
        mobileNumber,
        isMobileOwner: params.isMobileOwner ?? Boolean(mobileNumber),
        gender: params.gender ?? "UNSPECIFIED",
        dateOfBirth: params.dateOfBirth ?? null,
        createdBy: params.actorUserId ?? null,
    });
}
async function createFamily(params) {
    return Family_js_1.Family.create({
        clinicId: params.clinicId,
        name: params.name.trim(),
        primaryMobile: params.primaryMobile ? (0, dateAndIdentity_js_1.requireNormalizedMobile)(params.primaryMobile) : null,
        createdBy: params.actorUserId ?? null,
    });
}
//# sourceMappingURL=patientIdentity.service.js.map