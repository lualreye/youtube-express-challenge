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
const axios_1 = __importDefault(require("axios"));
const handleTimeSince_utils_1 = require("../utils/handleTimeSince.utils");
const handleFormatViews_utils_1 = require("../utils/handleFormatViews.utils");
class YoutubeService {
    constructor(apiKey) {
        this.endpoint = 'https://www.googleapis.com/youtube/v3';
        this.apiKey = null;
        this.apiKey = apiKey;
    }
    getVideoList(pageToken = '') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${this.endpoint}/videos`, {
                    params: {
                        part: 'snippet,contentDetails,statistics',
                        chart: 'mostPopular',
                        key: this.apiKey,
                        maxResults: 10,
                        pageToken: pageToken
                    }
                });
                const videos = response.data.items.map((item) => ({
                    id: item.id,
                    title: item.snippet.title,
                    thumbnail: item.snippet.thumbnails.high.url,
                    channelTitle: item.snippet.channelTitle,
                    publishedAt: this.timeSince(item.snippet.publishedAt),
                    viewCount: this.formatViews(item.statistics.viewCount)
                }));
                const nextPageToken = response.data.nextPageToken;
                return {
                    videos,
                    nextPageToken
                };
            }
            catch (error) {
                console.error(error);
                throw new Error('Youtube do not deliver');
            }
        });
    }
    getVideoById(videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${this.endpoint}/videos`, {
                    params: {
                        part: 'snippet,contentDetails,statistics',
                        id: videoId,
                        key: this.apiKey
                    }
                });
                const video = response.data.items.map((item) => ({
                    id: item.id,
                    title: item.snippet.title,
                    thumbnail: item.snippet.thumbnail,
                    videoURL: `https://www.youtube.com/embed/${item.id}`,
                    channelTitle: item.snippet.channelTitle,
                    description: item.snippet.description,
                    publishedAt: this.timeSince(item.snippet.publishedAt),
                    viewCount: this.formatViews(item.statistics.viewCount),
                    likeCount: this.formatViews(item.statistics.likeCount)
                }));
                return video;
            }
            catch (error) {
                console.log(error);
                throw new Error('Youtube do not deliver');
            }
        });
    }
    timeSince(dateInput) {
        return (0, handleTimeSince_utils_1.handleTimeSince)(dateInput);
    }
    formatViews(views) {
        return (0, handleFormatViews_utils_1.handleFormatCounter)(views);
    }
}
exports.default = YoutubeService;
