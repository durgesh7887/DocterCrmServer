"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const database_js_1 = require("../src/config/database.js");
const Clinic_js_1 = require("../src/models/Clinic.js");
const Patient_js_1 = require("../src/models/Patient.js");
const Visit_js_1 = require("../src/models/Visit.js");
const patientIdentity_service_js_1 = require("../src/services/patientIdentity.service.js");
require("../src/models/index.js");
const uri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/medflow";
async function main() {
    await (0, database_js_1.connectDatabase)(uri);
    const clinicA = await Clinic_js_1.Clinic.findOne({ name: "MedFlow Clinic A", isDeleted: false });
    if (!clinicA) {
        throw new Error("Seed data not found. Run npm run seed first.");
    }
    const matches = await (0, patientIdentity_service_js_1.findPatientsByMobile)(clinicA._id, "9876543210");
    const visits = await Visit_js_1.Visit.countDocuments({ clinicId: clinicA._id, patientId: matches[0]?._id });
    const leaked = await Patient_js_1.Patient.countDocuments({
        clinicId: { $ne: clinicA._id },
        _id: matches[0]?._id,
    });
    console.log({
        mobileMatches: matches.length,
        visitsForPrimaryPatient: visits,
        patientLeakedToOtherClinic: leaked,
    });
    if (matches.length < 1 || visits < 2 || leaked !== 0) {
        throw new Error("Live database verification failed");
    }
    console.log("Live database verification passed");
    await (0, database_js_1.disconnectDatabase)();
}
main().catch(async (error) => {
    console.error(error);
    await mongoose_1.default.disconnect();
    process.exit(1);
});
//# sourceMappingURL=verify-database.js.map