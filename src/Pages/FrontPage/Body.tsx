import Grid from '@mui/material/Grid2';
import TopHeadLines from 'src/Pages/TopHeadLines';
import DropHead from './DropHead';
import Line from 'src/components/Line';
import AllNews from './AllNews';

export default function Body() {
  return (
    <Grid container spacing={2}>
      <Grid
        container
        sx={{ height: 'fit-content' }}
        spacing={3}
        size={{ xs: 12, md: 12, lg: 9 }}
      >
        <Line color="primary" size={12} />
        <TopHeadLines />
        <AllNews />
      </Grid>
      <Line color="secondary" vertical />
      <Grid
        container
        alignItems="start"
        spacing={2}
        sx={{ flex: { xs: 'auto', md: 1 }, height: 'fit-content' }}
      >
        <Line color="primary" size={12} />
        <DropHead />
      </Grid>
    </Grid>
  );
}
