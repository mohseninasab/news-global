import NewsApiArticles, { NewsApiArticle } from 'src/types/NewsApiArticles';
import { NewsDataArticles } from 'src/types/NewsData';

export function convertNewsDataArticles(
  res: NewsDataArticles,
): NewsApiArticles {
  const { status, results: articles } = res;
  return {
    status: status,
    totalResults: res?.totalResults || 0,
    articles:
      articles?.map(
        (news): NewsApiArticle => ({
          source: {
            id: news.source_id,
            name: news.source_name,
          },
          author: news.creator?.join(' - '),
          title: news.title,
          description: news.description,
          url: news.source_url,
          urlToImage: news?.image_url || '',
          publishedAt: news.pubDate,
          content: news.content,
        }),
      ) || [],
  };
}
