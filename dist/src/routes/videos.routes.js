"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const videos_controllers_1 = require("../controllers/videos.controllers");
const router = express_1.default.Router();
router.get('/videos', videos_controllers_1.getVideos);
router.get('/videos/:videoId', videos_controllers_1.getVideoById);
exports.default = router;
