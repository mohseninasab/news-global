import { List, SxProps } from '@mui/material';
import REGIONS from 'src/constant/regions';
import Region from './Region';

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
      {REGIONS.map((region) => (
        <Region {...listItemProps} key={region.value} region={region} />
      ))}
    </List>
  );
}
