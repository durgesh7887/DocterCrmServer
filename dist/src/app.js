"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const env_js_1 = require("./config/env.js");
const errorHandler_js_1 = require("./middleware/errorHandler.js");
const admin_routes_js_1 = require("./routes/admin.routes.js");
const auth_routes_js_1 = require("./routes/auth.routes.js");
const clinic_routes_js_1 = require("./routes/clinic.routes.js");
const export_routes_js_1 = require("./routes/export.routes.js");
require("./types/express.js");
function createApp() {
    const app = (0, express_1.default)();
    app.set("trust proxy", 1);
    app.use((0, helmet_1.default)());
    const allowedOrigins = env_js_1.env.corsOrigins.map((o) => o.trim().toLowerCase());
    app.use((0, cors_1.default)({
        origin: (origin, callback) => {
            if (!origin)
                return callback(null, true);
            const normOrigin = origin.toLowerCase();
            const originHost = normOrigin.replace(/^https?:\/\//, "");
            const match = allowedOrigins.some((allowed) => {
                const normAllowed = allowed.replace(/^https?:\/\//, "");
                return normOrigin === allowed || originHost === normAllowed;
            });
            if (match || env_js_1.env.nodeEnv === "development") {
                callback(null, true);
            }
            else {
                callback(new Error(`CORS blocked for origin: ${origin}`));
            }
        },
        credentials: true,
    }));
    app.use(express_1.default.json({ limit: "1mb" }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, express_rate_limit_1.default)({
        windowMs: 60_000,
        max: 120,
        standardHeaders: "draft-8",
        legacyHeaders: false,
    }));
    app.get("/health", (_req, res) => {
        res.json({ success: true, message: "MedFlow API running", data: { ok: true } });
    });
    app.use("/api/v1/auth", auth_routes_js_1.authRouter);
    app.use("/api/v1/clinics", clinic_routes_js_1.clinicRouter);
    app.use("/api/v1", admin_routes_js_1.adminRouter);
    app.use("/api/v1", export_routes_js_1.exportRouter);
    app.use(errorHandler_js_1.errorHandler);
    return app;
}
//# sourceMappingURL=app.js.map