import Filter from 'src/components/Filter';
import Header from 'src/components/Header/Header';
import PageFrame from 'src/components/PageFrame';
import Body from 'src/Pages/FrontPage/Body';
import TopHeadLines from '../TopHeadLines';

export default function FrontPage() {
  return (
    <PageFrame>
      <Header />
      <Filter />
      <Body />
      <TopHeadLines />
    </PageFrame>
  );
}
