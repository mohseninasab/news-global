import { Grid } from '@mui/material';
import { useNewsApiGetTopHeadlinesQuery } from 'src/services/NewsApi';
import NewsCard from 'src/components/NewsCard';

export default function TopHeadLines() {
  const { data } = useNewsApiGetTopHeadlinesQuery({ country: 'us' });
  return (
    <>
      <Grid container spacing={2} sx={{ my: 1 }}>
        {data?.articles.map((article) => (
          <Grid key={article.publishedAt} item xs={12} sm={12} md={6} lg={6}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
