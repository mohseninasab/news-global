import { Typography } from '@mui/material';

interface Props {
  children: string;
}

export default function Content(props: Props) {
  return (
    <Typography
      color="textSecondary"
      variant="body2"
      sx={{ fontSize: '0.9rem', lineHeight: 1.2 }}
    >
      {props.children}
    </Typography>
  );
}
