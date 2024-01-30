import { Request, Response } from 'express';
import 'dotenv/config';

import handleHttpError from '../utils/handleError.utils';
import YoutubeService from '../services/youtube.services';

const youtubeService = new YoutubeService(process.env.YOUTUBE_API_KEY!);

export async function getVideos(req: Request, res: Response) {
  const pageToken = req.query.pageToken as string || '';

  try {
    const { videos, nextPageToken } = await youtubeService.getVideoList(pageToken);

    // return res.send({
    //   videos,
    //   nextPageToken
    // });
    return res.send('hola');
  } catch (error) {
    handleHttpError(res, 'Cannot get videos', 404);
  }
}

export async function getVideoById(req: Request, res: Response) {
  const videoId = req.params.videoId as string;

  try {
    const response = await youtubeService.getVideoById(videoId);

    return res.send({ response });
  } catch (error) {
    handleHttpError(res, 'Cannot get video by Id', 404);
  }
}