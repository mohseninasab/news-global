import { List, SxProps } from '@mui/material';
import CATEGORIES from 'src/constant/categories';
import Category from './Category';

interface ListItemProps {
  sx?: SxProps;
}
interface Props {
  sx?: SxProps;
  listItemProps?: ListItemProps;
}

export default function Cathegory({ sx = {}, listItemProps = {} }: Props) {
  return (
    <List
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: { xs: 'center' },
        ...sx,
      }}
    >
      {CATEGORIES.map((category) => (
        <Category {...listItemProps} key={category} category={category} />
      ))}
    </List>
  );
}
