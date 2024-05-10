import type { GuardianSection } from 'src/types/GuardianArticles';
import classes from './Category.module.scss';

interface Props {
  section?: GuardianSection;
}

export default function Category(props: Props) {
  const { section } = props;

  return (
    <li className={classes.root}>
      <a>{section?.webTitle}</a>
    </li>
  );
}
