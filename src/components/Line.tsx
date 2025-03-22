import { colors } from '@mui/material';
import { type Grid2Props } from '@mui/material/Grid2';
import Grid from '@mui/material/Grid2';

interface Props extends Grid2Props {
  color?: 'primary' | 'secondary';
  vertical?: boolean;
}

const Line = ({ color = 'secondary', vertical, ...rest }: Props) => {
  const _colors = {
    primary: colors.grey[900],
    secondary: colors.grey[400],
  };

  const borderColor = _colors[color];

  return (
    <Grid
      {...rest}
      sx={{
        [vertical ? 'width' : 'height']: '1px',
        [vertical ? 'borderRightWidth' : 'borderTopWidth']: `1px`,
        [vertical ? 'borderRightStyle' : 'borderTopStyle']: 'solid',
        borderColor,
      }}
    />
  );
};

export default Line;
