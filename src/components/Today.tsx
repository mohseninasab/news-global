import { Typography } from '@mui/material';

const Today = () => (
  <Typography variant="caption">
    {new Date().toUTCString().split(' ').slice(0, 4).join(' ')}
  </Typography>
);

export default Today;
