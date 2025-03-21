import { GuardianArticles } from 'src/types/GuardianArticles';
import GuardinResponse from 'src/types/GuardianArticles';
import NewsApiArticles from 'src/types/NewsApiArticles';
import { NewsApiArticle } from 'src/types/NewsApiArticles';

type Args = GuardinResponse<GuardianArticles> | undefined;

export default function convertGardianArticles(news: Args): NewsApiArticles {
  const response = news?.response;
  return {
    status: response?.status || '200',
    totalResults: response?.total || 0,
    articles:
      response?.results.map(
        (news): NewsApiArticle => ({
          source: {
            id: '',
            name: '',
          },
          author: '',
          title: news.webTitle,
          description: '',
          url: news.webUrl,
          urlToImage: '',
          publishedAt: news.webPublicationDate,
          content: news.webTitle,
        }),
      ) || [],
  };
}
