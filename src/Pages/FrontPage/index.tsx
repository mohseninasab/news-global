import Footer from 'src/components/Footer';
import Header from 'src/components/Header/Header';
import PageFrame from 'src/components/PageFrame';
import Body from 'src/Pages/FrontPage/Body';

export default function FrontPage() {
  return (
    <>
      <Header />
      <PageFrame>
        <Body />
        <Footer />
      </PageFrame>
    </>
  );
}
