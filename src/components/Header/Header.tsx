import Title from 'src/components/Header/Title';
import { Divider, Grid, styled } from '@mui/material';
import Cathegory from '../Categories';
import Today from 'src/components/Today';

const StyledDivider = styled(Divider)(() => ({
  borderColor: 'black',
  marginBottom: '2px',
}));

export default function Header() {
  return (
    <header style={{ width: '100%' }}>
      <Grid
        container
        alignItems="center"
        direction="column"
        justifyContent="center"
      >
        <Grid item>
          <Today />
        </Grid>
        <Grid item>
          <Title />
        </Grid>
        <Grid item>
          <Cathegory />
        </Grid>
      </Grid>
      <StyledDivider />
      <StyledDivider />
    </header>
  );
}
