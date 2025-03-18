import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

function App() {
  const { news } = useSelector((store: RootState) => store.news);
  return (
    <>
      <h1>{news[0].title}</h1>
      <article>
        <p>{news[0].article}</p>
      </article>
    </>
  );
}

export default App;
