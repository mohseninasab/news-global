import { useMarketNewsQuery } from 'src/services/Finnhub';
import NewsCard from './NewsCard';
import Grid from '@mui/material/Grid2';
import { colors } from '@mui/material';
import { Fragment } from 'react';

const MarketNews = () => {
  const { data = [], isLoading } = useMarketNewsQuery({ category: 'general' });

  if (isLoading) return null;
  return data?.map((news, index) => (
    <Fragment key={news.id}>
      <Grid size={12}>
        <NewsCard
          size="small"
          article={{
            source: {
              id: news.id.toString(),
              name: news.source,
            },
            author: '',
            title: news.headline,
            description: news.summary,
            url: news.url,
            urlToImage: news.image,
            publishedAt: news.datetime.toString(),
            content: news.summary,
          }}
        />
      </Grid>
      {index !== data.length - 1 && (
        <Grid
          size={12}
          sx={{
            borderTop: `1px solid ${colors.grey[400]}`,
            height: '1px',
          }}
        />
      )}
    </Fragment>
  ));
};

export default MarketNews;
