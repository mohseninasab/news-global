export interface MarketNewsItem {
  category: string; // News category (e.g., "general")
  datetime: number; // Unix timestamp of publication
  headline: string; // News headline
  id: number; // News ID
  image: string; // URL to the news image
  related: string; // Related symbols (e.g., "AAPL, MSFT")
  source: string; // News source (e.g., "Bloomberg")
  summary: string; // Brief summary of the news
  url: string; // URL to the full article
}

export interface MarketNewsParams {
  category: 'general' | 'forex' | 'crypto' | 'merger';
  minId?: string;
}
