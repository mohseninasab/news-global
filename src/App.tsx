import Header from 'src/components/Header/Header';
import { Grid } from '@mui/material';
import FrontPage from './Pages/FrontPage';

function App() {
  return (
    <Grid container sx={{ px: { xs: 0, md: 2, lg: 20 } }}>
      <Header />
      <FrontPage />
    </Grid>
  );
}

export default App;
