interface Source {
  id: string;
  name: string;
}
export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export default interface Articles {
  status: string;
  totalResults: 16032;
  articles: Article[];
}
