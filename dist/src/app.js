"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
function createApp() {
    const app = (0, express_1.default)();
    const whitelist = [
        'http://localhost:3000'
    ];
    app.use((0, cors_1.default)({ origin: whitelist }));
    app.use(express_1.default.json());
    app.get('/', (_req, res) => {
        res.send('Youtube Challenge is online');
    });
    (0, routes_1.default)(app);
    return app;
}
exports.default = createApp;
