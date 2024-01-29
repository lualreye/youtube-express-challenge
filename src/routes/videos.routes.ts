import express from 'express';

import { getVideoById, getVideos } from '../controllers/videos.controllers'; 

const router = express.Router();

router.get('/videos', getVideos);

router.get('/videos/:videoId', getVideoById);

export default router;