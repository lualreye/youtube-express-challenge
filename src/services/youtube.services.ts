import axios from 'axios';


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
            part: 'snippet,contentDetails',
            chart: 'mostPopular',
            key: this.apiKey,
            maxResults: 10,
            pageToken: pageToken
          }
        }
      );

      const videos = response.data.items.map((item: any) =>
        ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url,
          channelTitle: item.snippet.channelTitle,
          description: item.snippet.description
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
            part: 'snippet,contentDetails',
            id: videoId,
            key: this.apiKey
          }
        }
      );

      const video = response.data.items.map((item: any) => ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnail,
          videoId: `https://www.youtube.com/watch?v=${item.id}`,
          channelTitle: item.snippet.channelTitle,
          description: item.snippet.description
        })
      )
      return video; 
    } catch (error) {
      console.log(error);
      throw new Error('Youtube do not deliver');
    }
  }
}

export default YoutubeService;