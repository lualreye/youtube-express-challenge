"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideoById = exports.getVideos = void 0;
require("dotenv/config");
const handleError_utils_1 = __importDefault(require("../utils/handleError.utils"));
const youtube_services_1 = __importDefault(require("../services/youtube.services"));
const youtubeService = new youtube_services_1.default(process.env.YOUTUBE_API_KEY);
function getVideos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const pageToken = req.query.pageToken || '';
        try {
            const { videos, nextPageToken } = yield youtubeService.getVideoList(pageToken);
            return res.send({
                videos,
                nextPageToken
            });
        }
        catch (error) {
            (0, handleError_utils_1.default)(res, 'Cannot get videos', 404);
        }
    });
}
exports.getVideos = getVideos;
function getVideoById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const videoId = req.params.videoId;
        try {
            const response = yield youtubeService.getVideoById(videoId);
            return res.send({ response });
        }
        catch (error) {
            (0, handleError_utils_1.default)(res, 'Cannot get video by Id', 404);
        }
    });
}
exports.getVideoById = getVideoById;
