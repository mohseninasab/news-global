import { useMemo } from 'react';
import { useNewsApiGetAllNewsQuery } from 'src/services/NewsApi';
import { useSearchParams } from 'react-router-dom';
import { useGetGuardianNewsQuery } from 'src/services/Guardian';
import convertGardianArticles from 'src/Utils/convertGardianArticles';
import mapGuardinaParams from 'src/Utils/mapGuardinaParams';
import NewsCard from 'src/components/NewsCard';
import { useNewsDataGetAllNewsQuery } from 'src/services/NewsData';
import { convertNewsDataArticles } from 'src/Utils/convertNewsDataArticles';
import Grid from '@mui/material/Grid2';

export default function AllNews() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || undefined;
  const category = searchParams.get('cat') || undefined;
  const date = searchParams.get('date') || undefined;
  const source = searchParams.get('source') || undefined;
  const country = searchParams.get('country') || undefined;

  const apiNews = useNewsApiGetAllNewsQuery({
    q,
    category,
    date,
    source,
    country,
  });
  const newsData = useNewsDataGetAllNewsQuery({
    q,
    category,
    date,
    source,
    country,
  });
  const guardian = useGetGuardianNewsQuery(
    mapGuardinaParams({ q, category, date, source, country }),
  );
  const guardianNews = useMemo(
    () => convertGardianArticles(guardian.data),
    [guardian],
  );

  const newsDataArticles = useMemo(() => {
    if (newsData.data) return convertNewsDataArticles(newsData.data);
    return { articles: [], status: 'failed' };
  }, [newsData]);

  const allNews = useMemo(() => {
    return [
      ...(apiNews?.data?.articles || []),
      ...(newsDataArticles.articles || []),
      ...(guardianNews.articles || []),
    ];
  }, [newsDataArticles, guardianNews, apiNews]);

  return allNews.map((article) => (
    <Grid key={article.title + article.content} size={{ xs: 12, md: 6 }}>
      <NewsCard article={article} />
    </Grid>
  ));
}
