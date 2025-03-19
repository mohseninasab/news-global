import { NewsApiArticle } from 'src/types/NewsApiArticles';
import NewsHeadline from 'src/components/NewsCard/NewsHeadline';
import { Grid } from '@mui/material';
import NewsImage from 'src/components/NewsCard/NewsImage';
import Content from 'src/components/NewsCard/Content';
import ReadTime from 'src/components/ReadTime';
import { useMemo } from 'react';
import { ExtractTimeAndContent } from 'src/Utils/ExtractTimeAndContent';

interface Props {
  article: NewsApiArticle;
  sx?: object;
}

export default function NewsCard(props: Props) {
  const { title, url, urlToImage, content } = props.article;
  const [text, time] = useMemo(() => ExtractTimeAndContent(content), [content]);
  return (
    <Grid container spacing={1} sx={{ ...props.sx, p: { sx: 2, lg: 0 } }}>
      <Grid item xs={12} md={8}>
        <NewsHeadline title={title} url={url} />
        <Content>{text}</Content>
        <ReadTime>{time}</ReadTime>
      </Grid>
      <Grid item xs={12} md={4}>
        {urlToImage && <NewsImage src={urlToImage} url={url} />}
      </Grid>
    </Grid>
  );
}
