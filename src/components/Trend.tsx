import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const Root = styled(Grid)({
  padding: '4px 10px',
  borderRadius: 3,
  background: 'white',
  borderStyle: 'solid',
  borderWidth: 1,
  fontSize: 10,
});

const Trend = ({ value = 0 }) => {
  const color = value > 0 ? 'rgb(46, 184, 138)' : 'rgb(221 36 116)';
  const icon =
    value > 0 ? (
      <ArrowUpward sx={{ fontSize: 10 }} />
    ) : (
      <ArrowDownward sx={{ fontSize: 10 }} />
    );

  return (
    <Root
      spacing={0.5}
      container
      alignItems="center"
      sx={{ borderColor: color, color }}
    >
      {icon}
      <Grid>{value}%</Grid>
    </Root>
  );
};

export default Trend;
