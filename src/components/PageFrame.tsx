import { ReactElement } from 'react';
import { Grid } from '@mui/material';

interface Props {
  children?: ReactElement[] | ReactElement | string;
}

export default function PageFrame(props: Props) {
  return (
    <Grid container sx={{ px: { xs: 1, md: 2, lg: 15 } }}>
      {props.children}
    </Grid>
  );
}
