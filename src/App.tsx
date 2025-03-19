import './App.css';
import { useGetAllNewsQuery } from './services/newsApi';

function App() {
  const { data } = useGetAllNewsQuery({ q: 'Iran' });

  return (
    <>
      {data?.articles.map((article) => (
        <>
          <h3>{article.title}</h3>
          <h6>{article.author}</h6>
          <h6>{article.publishedAt}</h6>
          <article>{article.content}</article>
        </>
      ))}
    </>
  );
}

export default App;
