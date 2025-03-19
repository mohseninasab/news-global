import { NewsApiArticle } from 'src/types/NewsApiArticles';
import NewsHeadline from 'src/components/NewsCard/NewsHeadline';
import { Grid } from '@mui/material';
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
  sx?: object;
}

export default function NewsCard(props: Props) {
  const { title, urlToImage, content, source, author } = props.article;
  const [text, time] = useMemo(
    () => ExtractTimeAndContent(content || ''),
    [content],
  );
  return (
    <Link to="/newspage" state={{ article: props.article }}>
      <Grid
        container
        spacing={1}
        sx={{
          ...props.sx,
          p: { sx: 2, lg: 0 },
          '&:hover': { cursor: 'pointer' },
        }}
      >
        <Grid item xs={12} md={8}>
          <NewsHeadline title={title} />
          <Content>{text}</Content>
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
          {urlToImage && <NewsImage src={urlToImage} />}
        </Grid>
      </Grid>
    </Link>
  );
}
