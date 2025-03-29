import { useLocation, useNavigate } from 'react-router-dom';
import NewsHeadline from 'src/components/NewsCard/NewsHeadline';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Content from 'src/components/NewsCard/Content';
import ReadTime from 'src/components/ReadTime';
import { useEffect, useMemo } from 'react';
import Source from 'src/components/Source';
import { ExtractTimeAndContent } from 'src/Utils/ExtractTimeAndContent';
import Author from 'src/components/Author';
import PageFrame from 'src/components/PageFrame';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer';
import Line from 'src/components/Line';

interface Props {
  sx?: object;
}

export default function NewsPage(props: Props) {
  const navigate = useNavigate();
  const { state = {} } = useLocation();
  const { article = {} } = state || {};
  const { title, urlToImage, content, source, author, url } = article;

  useEffect(() => {
    if (!title) navigate('/');
  }, [title, navigate]);

  const [text, time] = useMemo(
    () => ExtractTimeAndContent(content || ''),
    [content],
  );

  if (title) {
    return (
      <>
        <Header />
        <PageFrame>
          <Grid
            container
            spacing={2}
            sx={{
              ...props.sx,
              p: { sx: 2, lg: 0 },
              mt: 2,
            }}
          >
            <Line size={12} color="primary" />
            <Grid size={{ xs: 12, lg: 4 }}>
              <NewsHeadline url={url} title={title} />
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
            <Grid size={{ xs: 12, lg: 8 }}>
              {urlToImage && (
                <a target="_blank" href={url}>
                  <img width="100%" alt="news-image" src={urlToImage} />
                </a>
              )}
            </Grid>
          </Grid>
          <Footer />
        </PageFrame>
      </>
    );
  } else
    return (
      <Typography width="100%" align="center" variant="h3">
        Article Not Found!
      </Typography>
    );
}
