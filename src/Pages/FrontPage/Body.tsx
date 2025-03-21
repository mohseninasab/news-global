import { useMemo } from 'react';
import Grid from '@mui/material/Grid';
import { useNewsApiGetAllNewsQuery } from 'src/services/NewsApi';
import { useSearchParams } from 'react-router-dom';
import { useGetGuardianNewsQuery } from 'src/services/Guardian';
import convertGardianArticles from 'src/Utils/convertGardianArticles';
import mapGuardinaParams from 'src/Utils/mapGuardinaParams';
import NewsCard from 'src/components/NewsCard';
import { useNewsDataGetAllNewsQuery } from 'src/services/NewsData';
import { convertNewsDataArticles } from 'src/Utils/convertNewsDataArticles';

export default function Body() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || undefined;
  const category = searchParams.get('category') || undefined;
  const date = searchParams.get('date') || undefined;
  const source = searchParams.get('source') || undefined;

  const apiNews = useNewsApiGetAllNewsQuery({ q, category, date, source });
  const newsData = useNewsDataGetAllNewsQuery({ q, category, date, source });
  const guardian = useGetGuardianNewsQuery(
    mapGuardinaParams({ q, category, date, source }),
  );
  const guardianNews = useMemo(
    () => convertGardianArticles(guardian.data),
    [guardian],
  );

  const newsDataArticles = useMemo(() => {
    if (newsData.data) return convertNewsDataArticles(newsData.data);
    return { articles: [], status: 'failed' };
  }, [newsData]);

  return (
    <Grid container spacing={2} sx={{ my: 1 }}>
      {(apiNews?.data?.articles || []).map((article) => (
        <Grid key={article.title} item sm={12} md={6}>
          <NewsCard article={article} />
        </Grid>
      ))}

      {(newsDataArticles.articles || []).map((article) => (
        <Grid key={article.title} item sm={12} md={6}>
          <NewsCard article={article} />
        </Grid>
      ))}

      {(guardianNews.articles || []).map((article) => (
        <Grid key={article.title} item sm={12} md={6}>
          <NewsCard article={article} />
        </Grid>
      ))}
    </Grid>
  );
}
