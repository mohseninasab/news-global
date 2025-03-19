import type { GuardinaApiParams } from 'src/types/GuardianArticles';
import type { NewsApiParams } from 'src/types/NewsApiArticles';

export default function mapGuardinaParams(
  params: NewsApiParams,
): GuardinaApiParams {
  return {
    q: params.q,
    section: params.category,
    'from-date': params.date,
    page: params.page,
  };
}
