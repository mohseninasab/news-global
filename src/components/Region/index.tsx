import { List } from '@mui/material';
import REGIONS from 'src/constant/regions';
import Region from './Region';

export default function Cathegory() {
  return (
    <List sx={{ display: 'flex' }}>
      {REGIONS.map((region) => (
        <Region key={region.value} region={region} />
      ))}
    </List>
  );
}
