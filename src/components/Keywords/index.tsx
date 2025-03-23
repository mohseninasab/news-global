import { List, SxProps } from '@mui/material';
import KEYWORDS from 'src/constant/keywords';
import Keyword from './Keyword';

interface ListItemProps {
  sx?: SxProps;
}
interface Props {
  sx?: SxProps;
  listItemProps?: ListItemProps;
}

export default function Keywords({ sx = {}, listItemProps = {} }: Props) {
  return (
    <List sx={{ display: 'flex', ...sx }}>
      {KEYWORDS.map((keyword) => (
        <Keyword {...listItemProps} key={keyword} keyword={keyword} />
      ))}
    </List>
  );
}
