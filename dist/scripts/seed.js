"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const database_js_1 = require("../src/config/database.js");
const seedPhase1_js_1 = require("../src/database/seedPhase1.js");
require("../src/models/index.js");
const uri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/medflow";
async function main() {
    await (0, database_js_1.connectDatabase)(uri);
    await (0, database_js_1.syncIndexes)();
    const seeded = await (0, seedPhase1_js_1.seedPhase1Scenario)();
    console.log("Phase 1 seed complete");
    console.log({
        superAdmin: seeded.superAdmin.email,
        clinicA: seeded.clinicA.name,
        clinicB: seeded.clinicB.name,
        patient: seeded.father.patientCode,
        visits: [seeded.visit1.visitCode, seeded.visit2.visitCode],
    });
    await (0, database_js_1.disconnectDatabase)();
}
main().catch(async (error) => {
    console.error(error);
    await mongoose_1.default.disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map