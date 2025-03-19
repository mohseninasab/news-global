export interface GuardinaApiParams {
  q?: string | null;
  section?: string | null;
  'from-date'?: string | null;
  page?: number | null;
}

export interface GuardinaArticle {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

interface GuardianTag {
  id: string;
  type: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  sectionId: string;
  sectionName: string;
}

export interface GuardianTags {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  results: GuardianTag[];
}

interface Edition {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  code: string;
}
export interface GuardianSection {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  editions: Edition[];
}
export interface GuardianSections {
  status: string;
  userTier: string;
  total: number;
  results: GuardianSection[];
}
export interface GuardianArticles {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: number;
  results: GuardinaArticle[];
}

export default interface GuardinResponse<T> {
  response: T;
}
