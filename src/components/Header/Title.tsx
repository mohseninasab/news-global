import { SxProps } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Title({ sx = {} }: { sx?: SxProps }) {
  const navigate = useNavigate();
  return (
    <Typography
      onClick={() => navigate('/')}
      sx={{
        letterSpacing: { xs: -2, md: -5 },
        textAlign: 'center',
        fontFamily: 'lobster',
        userSelect: 'none',
        fontSize: { xs: 40, md: 100 },
        lineHeight: 0.9,
        '&:hover': { cursor: 'pointer' },
        ...sx,
      }}
    >
      The News Global
    </Typography>
  );
}
