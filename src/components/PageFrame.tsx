import { ReactNode } from 'react';
import Grid from '@mui/material/Grid2';

interface Props {
  children?: ReactNode;
}

export default function PageFrame(props: Props) {
  return (
    <Grid sx={{ px: { xs: 2, md: 0 } }} container justifyContent="center">
      <Grid size={{ xs: 12, md: 11, xl: 9 }}>{props.children}</Grid>
    </Grid>
  );
}
