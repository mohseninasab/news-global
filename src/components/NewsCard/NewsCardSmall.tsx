import { NewsApiArticle } from 'src/types/NewsApiArticles';
import NewsHeadline from 'src/components/NewsCard/NewsHeadline';
import { Grid } from '@mui/material';
import NewsImage from 'src/components/NewsCard/NewsImage';
import ReadTime from 'src/components/ReadTime';
import { useMemo } from 'react';
import Source from 'src/components/Source';
import { ExtractTimeAndContent } from 'src/Utils/ExtractTimeAndContent';
import Author from 'src/components/Author';
import { Link } from 'react-router-dom';

interface Props {
  article: NewsApiArticle;
  size?: 'small' | 'medium';
  sx?: object;
}

export default function NewsCardSmall({ article, sx }: Props) {
  const { title, urlToImage, content, source, author } = article;
  const [, time] = useMemo(
    () => ExtractTimeAndContent(content || ''),
    [content],
  );
  return (
    <Link to="/newspage" state={{ article: article }}>
      <Grid
        container
        spacing={1}
        sx={{
          ...sx,
          '&:hover': { cursor: 'pointer' },
        }}
      >
        <Grid item xs={12} md={8}>
          <NewsHeadline variant="body2" title={title} />
          <Grid container spacing={1}>
            <Grid item>
              <ReadTime>{time}</ReadTime>
            </Grid>
            <Grid item>
              <Source>{source.name}</Source>
            </Grid>
            <Grid item>
              <Author>{author}</Author>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <NewsImage
            src={urlToImage}
            sx={{ minHeight: { sm: '200px', lg: '80px' } }}
          />
        </Grid>
      </Grid>
    </Link>
  );
}
