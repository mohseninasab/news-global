import { List } from '@mui/material';
import CATEGORIES from 'src/constances/categories';
import Category from './Category';

export default function Cathegory() {
  return (
    <List sx={{ display: { xs: 'none', md: 'flex' }, marginBottom: 1 }}>
      {CATEGORIES.map((category) => (
        <Category key={category} category={category} />
      ))}
    </List>
  );
}
