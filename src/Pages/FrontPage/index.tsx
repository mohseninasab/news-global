import Filter from 'src/components/Filter';
import Header from 'src/components/Header/Header';
import PageFrame from 'src/components/PageFrame';
import Body from 'src/Pages/FrontPage/Body';
import TopHeadLines from '../TopHeadLines';
import { Divider } from '@mui/material';

export default function FrontPage() {
  return (
    <PageFrame>
      <Header />
      <Filter />
      <TopHeadLines />
      <Divider sx={{ mt: 3, borderColor: 'black', width: '100%' }} />
      <Body />
    </PageFrame>
  );
}
