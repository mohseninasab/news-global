import { Grid, Typography } from '@mui/material';
import { useNewsApiGetTopHeadlinesQuery } from 'src/services/NewsApi';
import NewsCard from 'src/components/NewsCard';

export default function TopHeadLines() {
  const { data } = useNewsApiGetTopHeadlinesQuery({ country: 'us' });
  return (
    <>
      <Typography sx={{ mt: 2 }} variant="h5">
        Top Headlines
      </Typography>
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
