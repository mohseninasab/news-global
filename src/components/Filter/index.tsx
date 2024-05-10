import { useState } from 'react';
import { IconButton, Grid, Divider } from '@mui/material';
import { Tune, Close } from '@mui/icons-material';
import FilterMenu from './FilterMenu';

export default function Filter() {
  const [open, setOpen] = useState(false);

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
        <IconButton sx={{ color: 'black' }} onClick={() => setOpen(!open)}>
          {open ? <Close /> : <Tune />}
        </IconButton>
      </Grid>
      <Grid
        sx={{
          ml: { sx: 0, lg: '10px' },
          mr: { sx: 0, lg: '10px' },
          width: { lg: 'calc(100% + 20px)' },
        }}
        item
        xs={12}
      >
        {open && (
          <>
            <FilterMenu />
            <Divider sx={{ mt: 3, borderColor: 'black' }} />
          </>
        )}
      </Grid>
    </Grid>
  );
}
