export interface NewsDataArticle {
  article_id: string;
  title: string;
  link: string;
  keywords: string[];
  creator: string[];
  video_url?: string;
  description: string;
  content: string;
  pubDate: string;
  pubDateTZ: string;
  image_url?: string;
  source_id: string;
  source_priority: number;
  source_name: string;
  source_url: string;
  source_icon: string;
  language: string;
  country: string[];
  category: string[];
  ai_tag: string;
  sentiment: string;
  sentiment_stats: string;
  ai_region: string;
  ai_org: string;
  duplicate: boolean;
}

export interface NewsDataArticles {
  status: string;
  totalResults: number;
  results: NewsDataArticle[];
  nextPage: `${number}`;
}

export interface NewsDataSource {
  id: string;
  name: string;
  url: string;
  icon: string;
  priority: number;
  description: string;
  category: string[];
  language: string[];
  country: string[];
  total_article: number;
  last_fetch: `${number}-${number}-${number} ${number}:${number}:${number}`;
}

export interface NewsDataSources {
  status: 'success' | 'failed';
  totalResults: number;
  results: NewsDataSource[];
  nextPage: `${number}`;
}
