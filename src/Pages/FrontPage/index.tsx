import { useNewApiGetAllNewsQuery } from 'src/services/NewsApi';
import { Grid } from '@mui/material';
import Filter from 'src/components/Filter';
import NewsCard from 'src/components/NewsCard';

export default function FrontPage() {
  const { data } = useNewApiGetAllNewsQuery({ q: 'Gaza' });
  return (
    <>
      <Filter />
      <Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
        {data?.articles.map((article) => (
          <Grid key={article.publishedAt} item xs={12} sm={12} md={6} lg={6}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
