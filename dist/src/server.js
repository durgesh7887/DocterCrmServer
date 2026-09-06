"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const app_js_1 = require("./app.js");
const database_js_1 = require("./config/database.js");
const env_js_1 = require("./config/env.js");
const seedPhase1_js_1 = require("./database/seedPhase1.js");
const User_js_1 = require("./models/User.js");
require("./models/index.js");
async function connectWithFallback() {
    try {
        await (0, database_js_1.connectDatabase)(env_js_1.env.mongodbUri);
        console.log(`MongoDB connected: ${env_js_1.env.mongodbUri}`);
    }
    catch (error) {
        console.warn("Local MongoDB unavailable, starting in-memory MongoDB", error);
        const memory = await mongodb_memory_server_1.MongoMemoryServer.create();
        await (0, database_js_1.connectDatabase)(memory.getUri());
        console.log("In-memory MongoDB ready");
    }
}
async function seedIfEmpty() {
    const count = await User_js_1.User.countDocuments();
    if (count === 0) {
        await (0, seedPhase1_js_1.seedPhase1Scenario)();
        console.log("Seeded Phase 1 demo data (password: ChangeMe!MedFlow1)");
    }
}
async function main() {
    await connectWithFallback();
    await (0, database_js_1.syncIndexes)();
    await seedIfEmpty();
    const app = (0, app_js_1.createApp)();
    app.listen(env_js_1.env.port, () => {
        console.log(`MedFlow API listening on http://localhost:${env_js_1.env.port}`);
    });
}
main().catch(async (error) => {
    console.error(error);
    await mongoose_1.default.disconnect();
    process.exit(1);
});
//# sourceMappingURL=server.js.map