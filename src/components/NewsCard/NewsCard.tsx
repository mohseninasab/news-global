import { NewsApiArticle } from 'src/types/NewsApiArticles';
import NewsHeadline from 'src/components/NewsCard/NewsHeadline';
import Grid from '@mui/material/Grid2';
import NewsImage from 'src/components/NewsCard/NewsImage';
import Content from 'src/components/NewsCard/Content';
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

export default function NewsCard({ article, sx }: Props) {
  const { title, urlToImage, content, source, author } = article;
  const [text, time] = useMemo(
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
        <Grid size={{ xs: 12, md: 8 }}>
          <NewsHeadline title={title} />
          <Content>{text}</Content>
          <Grid container spacing={1}>
            <Grid>
              <ReadTime>{time}</ReadTime>
            </Grid>
            <Grid>
              <Source>{source.name}</Source>
            </Grid>
            <Grid>
              <Author>{author}</Author>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <NewsImage src={urlToImage} />
        </Grid>
      </Grid>
    </Link>
  );
}
