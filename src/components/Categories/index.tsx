import { List } from '@mui/material';
import CATEGORIES from 'src/constant/categories';
import Category from './Category';

export default function Cathegory() {
  return (
    <List sx={{ display: { xs: 'none', md: 'flex', gap: 4 } }}>
      {CATEGORIES.map((category) => (
        <Category key={category} category={category} />
      ))}
    </List>
  );
}
