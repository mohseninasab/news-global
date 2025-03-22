import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Title() {
  const navigate = useNavigate();
  return (
    <Typography
      onClick={() => navigate('/')}
      align="center"
      sx={{
        letterSpacing: { xs: -2, md: -5 },
        fontFamily: 'lobster',
        userSelect: 'none',
        fontSize: { xs: 40, md: 100 },
        lineHeight: 0.9,
        '&:hover': { cursor: 'pointer' },
      }}
    >
      The News Global
    </Typography>
  );
}
