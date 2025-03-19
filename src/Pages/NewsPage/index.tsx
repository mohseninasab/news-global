import { useLocation } from 'react-router-dom';
import NewsHeadline from 'src/components/NewsCard/NewsHeadline';
import { Grid, Typography } from '@mui/material';
import Content from 'src/components/NewsCard/Content';
import ReadTime from 'src/components/ReadTime';
import { useMemo } from 'react';
import Source from 'src/components/Source';
import { ExtractTimeAndContent } from 'src/Utils/ExtractTimeAndContent';
import Author from 'src/components/Author';
import PageFrame from 'src/components/PageFrame';
import Header from 'src/components/Header/Header';

interface Props {
  sx?: object;
}

export default function NewsPage(props: Props) {
  const { state = { article: {} } } = useLocation();
  const { title, urlToImage, content, source, author, url } = state.article;

  const [text, time] = useMemo(
    () => ExtractTimeAndContent(content || ''),
    [content],
  );

  if (state.article.title) {
    return (
      <PageFrame>
        <Header />
        <Grid
          container
          spacing={1}
          sx={{
            ...props.sx,
            p: { sx: 2, lg: 0 },
            mt: 2,
          }}
        >
          <Grid item xs={12} lg={4}>
            <NewsHeadline url={url} title={title} />
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
          <Grid item xs={12} lg={8}>
            {urlToImage && (
              <a target="_blank" href={url}>
                <img width="100%" alt="news-image" src={urlToImage} />
              </a>
            )}
          </Grid>
        </Grid>
      </PageFrame>
    );
  } else
    return (
      <Typography width="100%" align="center" variant="h3">
        Article Not Found!
      </Typography>
    );
}
