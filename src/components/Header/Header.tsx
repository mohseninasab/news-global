import Title from 'src/components/Header/Title';
import Grid from '@mui/material/Grid2';
import Cathegory from '../Categories';
import Today from 'src/components/Today';
import SearchForm from '../Filter/SearchForm';
import Region from '../Region';
import backgroundPattern from 'src/constant/backgroundPattern';

export default function Header() {
  return (
    <>
      <header style={{ width: '100%' }}>
        <Grid
          container
          alignItems="center"
          direction="column"
          justifyContent="center"
          spacing={1}
          sx={{
            ...backgroundPattern,
            pb: 4,
          }}
        >
          <Grid
            container
            size={12}
            alignItems="center"
            sx={{ p: 1.2 }}
            justifyContent="space-between"
          >
            <Grid size={{ xs: 12 }} sx={{ flex: { xs: 'auto', md: 1 } }}>
              <SearchForm />
            </Grid>
            <Grid
              size={{ xs: 12 }}
              sx={{
                flex: {
                  xs: 'auto',
                  md: 1,
                  display: 'flex',
                  justifyContent: 'center',
                },
              }}
            >
              <Region />
            </Grid>
            <Grid size={{ xs: 12 }} sx={{ flex: { xs: 'auto', md: 1 } }} />
          </Grid>

          <Grid></Grid>

          <Grid>
            <Title />
          </Grid>
          <Grid>
            <Today />
          </Grid>
        </Grid>
      </header>
      <Grid container justifyContent="center">
        <Cathegory />
      </Grid>
    </>
  );
}
