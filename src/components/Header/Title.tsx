import Typography from '@mui/material/Typography';
import classes from './Title.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Title() {
  const navigate = useNavigate();
  return (
    <Typography
      onClick={() => navigate('/')}
      className={classes.root}
      align="center"
      sx={{
        fontFamily: 'lobster',
        userSelect: 'none',
        '&:hover': { cursor: 'pointer' },
      }}
      variant="h1"
    >
      <span>T</span>&#8201;he <span>N</span>ews <span>G</span>lobal
    </Typography>
  );
}
