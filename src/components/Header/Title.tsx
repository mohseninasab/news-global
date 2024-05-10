import Typography from '@mui/material/Typography';
import classes from './Title.module.scss';

export default function Title() {
  return (
    <Typography
      className={classes.root}
      align="center"
      sx={{ fontFamily: 'lobster' }}
      variant="h1"
    >
      <span>T</span>&#8201;he <span>W</span>orld <span>N</span>ews
    </Typography>
  );
}
