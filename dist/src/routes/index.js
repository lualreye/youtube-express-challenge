"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const videos_routes_1 = __importDefault(require("./videos.routes"));
function routerApi(app) {
    const router = express_1.default.Router();
    app.use('/api', router);
    router.use(videos_routes_1.default);
}
exports.default = routerApi;
