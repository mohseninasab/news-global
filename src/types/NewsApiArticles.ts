export interface NewsApiParams {
  q?: string;
  country?: string;
}

interface Source {
  id: string;
  name: string;
}
export interface NewsApiArticle {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export default interface NewsApiArticles {
  status: string;
  totalResults: 16032;
  articles: NewsApiArticle[];
}
