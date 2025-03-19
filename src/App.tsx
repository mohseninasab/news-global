import React from 'react';
import { useNewApiGetAllNewsQuery } from 'src/services/NewsApi';
import { useGetGuardianNewsQuery } from 'src/services/Guardian';
import './App.css';

function App() {
  const worldNews = useNewApiGetAllNewsQuery({ q: 'Iran' });
  const newYorkTimesNews = useGetGuardianNewsQuery({ q: 'Iran' });
  console.log(newYorkTimesNews);

  return (
    <>
      {worldNews.data?.articles.map((article) => (
        <React.Fragment key={article.publishedAt}>
          <h3>{article.title}</h3>
          <h6>{article.author}</h6>
          <h6>{article.publishedAt}</h6>
          <article>{article.content}</article>
        </React.Fragment>
      ))}
    </>
  );
}

export default App;
