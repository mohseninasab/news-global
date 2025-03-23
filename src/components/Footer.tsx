import Grid from '@mui/material/Grid2';
import Line from './Line';
import { Typography, useMediaQuery } from '@mui/material';
import Title from './Header/Title';
import Categories from 'src/components/Categories';
import Region from 'src/components/Region';
import Keywords from 'src/components/Keywords';
import ContactInfo from './ContactInfo';

const Footer = () => {
  const matches = useMediaQuery('(min-width:1200px)');

  return (
    <Grid component="footer" sx={{ my: 2 }} spacing={2} container size={12}>
      <Line color="secondary" size={12} />
      <Grid
        container
        sx={{ height: 'fit-content' }}
        spacing={2}
        size={{ xs: 12, md: 12, lg: 9 }}
      >
        <Grid size={12}>
          <Title
            sx={{
              textAlign: 'start',
              fontSize: { xs: 20, md: 30 },
              letterSpacing: { xs: 1, md: 1 },
            }}
          />
        </Grid>
        <Grid container size={12}>
          <Grid size={{ xs: 6, md: 4 }}>
            <Grid component={Typography} fontWeight={900} variant="h6">
              Categories
            </Grid>
            <Categories
              sx={{ flexDirection: 'column', py: 0 }}
              listItemProps={{
                sx: {
                  px: 0,
                  border: 'none',
                  fontWeight: 400,
                  '&:hover': {
                    border: 'none',
                  },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Grid component={Typography} fontWeight={900} variant="h6">
              Region
            </Grid>
            <Region
              sx={{ flexDirection: 'column', py: 0 }}
              listItemProps={{
                sx: {
                  px: 0,
                  fontWeight: 400,
                  border: 'none',
                  '&:hover': {
                    border: 'none',
                  },
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Grid component={Typography} fontWeight={900} variant="h6">
              Keywords
            </Grid>
            <Keywords
              sx={{ flexDirection: 'column', py: 0 }}
              listItemProps={{
                sx: {
                  px: 0,
                  fontWeight: 400,
                  border: 'none',
                  '&:hover': {
                    border: 'none',
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Line
        color="secondary"
        size={matches ? undefined : 12}
        vertical={matches}
      />
      <Grid
        container
        alignItems="start"
        spacing={2}
        sx={{ flex: { xs: 'auto', md: 1 }, height: 'fit-content' }}
      >
        <ContactInfo />
      </Grid>
    </Grid>
  );
};

export default Footer;
