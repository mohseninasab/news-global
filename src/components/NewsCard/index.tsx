import { NewsApiArticle } from 'src/types/NewsApiArticles';
import NewsCard from './NewsCard';
import NewsCardSmall from './NewsCardSmall';

interface Props {
  article: NewsApiArticle;
  size?: 'small' | 'medium';
  sx?: object;
}

const index = ({ size = 'medium', ...rest }: Props) => {
  const cards = {
    small: <NewsCardSmall {...rest} />,
    medium: <NewsCard {...rest} />,
  };
  return cards[size];
};

export default index;
