import React from 'react';
import { TextField, Grid, Button } from '@mui/material';

export default function FilterMenu() {
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <Grid
      container
      alignItems="flex-end"
      component="form"
      spacing={2}
      onSubmit={submit}
    >
      <Grid item xs={12} sm={6} lg={3}>
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Search"
          fullWidth
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TextField
          InputLabelProps={{ shrink: true }}
          select
          label="Category"
          fullWidth
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TextField
          type="date"
          InputLabelProps={{ shrink: true }}
          label="Date"
          fullWidth
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Button
          sx={{ minHeight: '40px' }}
          type="submit"
          color="primary"
          variant="contained"
          disableElevation
          fullWidth
        >
          Apply
        </Button>
      </Grid>
    </Grid>
  );
}
