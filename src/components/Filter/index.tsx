import { IconButton, Grid } from '@mui/material';
import { Tune } from '@mui/icons-material';

export default function Filter() {
  return (
    <Grid
      sx={{
        ml: { sx: 0, lg: '-10px' },
        mr: { sx: 0, lg: '-10px' },
        width: { lg: 'calc(100% + 20px)' },
      }}
      container
      justifyContent="flex-end"
      spacing={0.2}
    >
      <Grid item>
        <IconButton>
          <Tune sx={{ color: 'black' }} />
        </IconButton>
      </Grid>
    </Grid>
  );
}
