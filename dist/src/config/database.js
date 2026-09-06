"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = connectDatabase;
exports.disconnectDatabase = disconnectDatabase;
exports.syncIndexes = syncIndexes;
const mongoose_1 = __importDefault(require("mongoose"));
async function connectDatabase(uri) {
    mongoose_1.default.set("strictQuery", true);
    return mongoose_1.default.connect(uri);
}
async function disconnectDatabase() {
    await mongoose_1.default.disconnect();
}
async function syncIndexes() {
    const models = Object.values(mongoose_1.default.models);
    await Promise.all(models.map((model) => model.syncIndexes()));
}
//# sourceMappingURL=database.js.map