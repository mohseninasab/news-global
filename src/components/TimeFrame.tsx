import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material';

const Root = styled(Grid)({
  borderRadius: 14,
  borderStyle: 'solid',
  borderWidth: 2,
});

interface Props {
  value: number;
  label: string;
  selected: boolean;
  onClick?: () => void;
}

const TimeFrame = ({
  value = 0,
  label = '',
  selected = false,
  onClick,
}: Props) => {
  const color = value > 0 ? 'rgba(51, 204, 166, 1)' : 'rgb(221 36 116)';

  return (
    <Root
      onClick={onClick}
      spacing={0.5}
      size={{ xs: 3, md: 1.5, lg: 3, xl: 3 }}
      container
      alignItems="center"
      sx={{
        borderColor: selected ? color : 'transparent',
        backgroundColor: 'white',
        px: { xs: 0.2, md: 1 },
        py: 1,
      }}
    >
      <Grid
        component={Typography}
        variant="caption"
        size={12}
        textAlign="center"
      >
        {label}
      </Grid>
      <Grid
        component={Typography}
        fontSize={12}
        textAlign="center"
        size={12}
        sx={{ color }}
      >
        {Math.abs(value)}%
      </Grid>
    </Root>
  );
};

export default TimeFrame;
