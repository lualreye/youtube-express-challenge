import axios from 'axios';

import { handleTimeSince } from '../utils/handleTimeSince.utils';
import { handleFormatCounter } from '../utils/handleFormatViews.utils';

class YoutubeService {
  private endpoint: string = 'https://www.googleapis.com/youtube/v3';
  private apiKey: string | null = null;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getVideoList(pageToken: string = '') {
    try {
      const response = await axios.get(
        `${this.endpoint}/videos`,
        {
          params: {
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            key: this.apiKey,
            maxResults: 10,
            pageToken: pageToken
          }
        }
      );

      console.log('videos', response.data.items[0])

      const videos = response.data.items.map((item: any) =>
        ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url,
          channelTitle: item.snippet.channelTitle,
          publishedAt: this.timeSince(item.snippet.publishedAt),
          viewCount: this.formatViews(item.statistics.viewCount)
        })
      )

      const nextPageToken = response.data.nextPageToken;

      return {
        videos,
        nextPageToken
      };
    } catch (error) {
      console.error(error);
      throw new Error('Youtube do not deliver');
    }
  }

  async getVideoById(videoId: string) {
    try {
      const response = await axios.get(
        `${this.endpoint}/videos`,
        {
          params: {
            part: 'snippet,contentDetails,statistics',
            id: videoId,
            key: this.apiKey
          }
        }
      );

      const video = response.data.items.map((item: any) => ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnail,
          videoURL: `https://www.youtube.com/watch?v=${item.id}`,
          channelTitle: item.snippet.channelTitle,
          description: item.snippet.description,
          publishedAt: this.timeSince(item.snippet.publishedAt),
          viewCount: this.formatViews(item.statistics.viewCount),
          likeCount: this.formatViews(item.statistics.likeCount)
        })
      )
      return video; 
    } catch (error) {
      console.log(error);
      throw new Error('Youtube do not deliver');
    }
  }

  timeSince(dateInput: string): string {
    return handleTimeSince(dateInput);
  }

  formatViews(views: number): string {
    return handleFormatCounter(views);
  }
}

export default YoutubeService;