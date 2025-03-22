import { Typography } from '@mui/material';

interface Props {
  children: string;
}

export default function Source(props: Props) {
  return (
    <Typography
      sx={{ fontSize: '0.6em', fontWeight: 'bold' }}
      color="secondary"
      variant="caption"
    >
      {props.children}
    </Typography>
  );
}
