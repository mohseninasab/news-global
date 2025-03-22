import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { colors, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Trend from './Trend';
import usePAXChartPrice from 'src/hooks/usePAXChartPrice';
import type { Params } from 'src/services/Market';

interface Props extends Params {
  title: string;
}

const Chart = ({ days = 1, coinName, vsCurrency = 'usd', title }: Props) => {
  const { prices = [], growth = 0 } = usePAXChartPrice({
    days,
    coinName,
    vsCurrency,
  });
  const lastPrice = prices[prices?.length - 1]?.[1] || 0;

  return (
    <Grid container size={12} spacing={1} sx={{ height: 'fit-content' }}>
      <Grid size={12}>
        <Grid spacing={0.5} container alignItems="center">
          <Grid flex={1}>
            <Typography component={Grid} variant="h6" fontWeight={800}>
              {title}
            </Typography>
          </Grid>
          <Grid
            container
            size={{ xs: 12, sm: 'auto' }}
            justifyContent={{ xs: 'space-between' }}
            alignItems="center"
          >
            <Typography component={Grid} variant="body1" fontWeight={900}>
              {Number(lastPrice).toFixed(0)}
              <Typography
                sx={{ ml: 1 }}
                color="textSecondary"
                component={'span'}
                variant="body2"
              >
                USDT
              </Typography>
            </Typography>

            <Grid>
              <Trend value={Number.parseFloat(growth.toFixed(3))} />
            </Grid>
          </Grid>
          <Grid size={12}>
            <Typography
              component={Grid}
              variant="caption"
              color="textSecondary"
            >
              Last {days} days
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <SparkLineChart
            data={prices?.map((items) => items[1]) || []}
            width={280}
            height={160}
            colors={[growth > 0 ? colors.green[400] : colors.red[400]]}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chart;
