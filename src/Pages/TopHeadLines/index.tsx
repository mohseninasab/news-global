import { useSearchParams } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import { useNewsApiGetTopHeadlinesQuery as api } from 'src/services/NewsApi';
import NewsCard from 'src/components/NewsCard';
import TopNews from 'src/components/TopNews';
import Line from 'src/components/Line';
import { Typography } from '@mui/material';
import { FaFireAlt } from 'react-icons/fa';
import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TopHeadLines() {
  const [searchParams] = useSearchParams();

  const q = searchParams.get('q') || undefined;
  const category = searchParams.get('cat') || undefined;
  const country = searchParams.get('country') || undefined;

  const params = { q, country, category };
  const { data = { articles: [] } } = api(params);
  const { articles = [] } = data;

  const list = useMemo(() => {
    return articles.map((item) => ({ ...item, key: uuidv4() }));
  }, [articles]);

  const [topNews, allNews] = [list[0], list.slice(1) || []];

  if (!topNews && allNews.length <= 0) return null;

  return (
    <>
      <Grid size={12}>{topNews && <TopNews article={topNews} />}</Grid>

      {topNews && <Line size={12} color="primary" />}

      {allNews.length > 0 && (
        <Grid size={12}>
          <Typography
            variant="h6"
            sx={{ display: 'flex', alignItems: 'center' }}
            fontWeight={800}
            color="textSecondary"
          >
            <FaFireAlt />
            &nbsp;Top Headlines
          </Typography>
        </Grid>
      )}

      {allNews?.map((article) => (
        <Grid key={article.key} size={{ xs: 12, md: 6 }}>
          <NewsCard article={article} />
        </Grid>
      ))}

      {allNews.length > 0 && <Line size={12} color="primary" />}
    </>
  );
}
