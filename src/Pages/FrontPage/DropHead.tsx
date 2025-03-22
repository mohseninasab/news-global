import { RiStockLine, RiExchangeBoxLine } from 'react-icons/ri';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Chart from 'src/components/Chart';
import Line from 'src/components/Line';
import MarketNews from 'src/components/MarketNews';

const DropHead = () => {
  return (
    <>
      <Grid size={12}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center' }}
          fontWeight={800}
          color="textSecondary"
        >
          <RiStockLine />
          &nbsp;Market
        </Typography>
      </Grid>
      <Grid size={12}>
        <Chart coinName="bitcoin" days={7} title="Bitcoin" />
      </Grid>
      <Line size={12} color="secondary" />
      <Grid size={12}>
        <Chart coinName="pax-gold" days={7} title="Pax Gold" />
      </Grid>
      <Line size={12} color="secondary" />
      <Grid size={12}>
        <Chart coinName="ethereum" days={7} title="Ethereum" />
      </Grid>
      <Line size={12} color="primary" />
      <Grid size={12}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center' }}
          fontWeight={800}
          color="textSecondary"
        >
          <RiExchangeBoxLine />
          &nbsp;Economy
        </Typography>
      </Grid>
      <MarketNews />
    </>
  );
};

export default DropHead;
