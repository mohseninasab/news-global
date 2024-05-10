import { Typography } from '@mui/material';

interface Props {
  children: string;
}

export default function Content(props: Props) {
  return (
    <Typography color="textSecondary" variant="body1">
      {props.children}
    </Typography>
  );
}
