import { useSearchParams } from 'react-router-dom';
import classes from './Category.module.scss';

interface Props {
  category?: string;
}

export default function Category(props: Props) {
  const { category = '' } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const cat = searchParams.get('category') || undefined;

  const setCategory = () => {
    setSearchParams({ category });
  };
  return (
    <li
      data-selected={cat === category}
      onClick={setCategory}
      className={classes.root}
    >
      <a>{category}</a>
    </li>
  );
}
