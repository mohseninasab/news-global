import { Typography } from '@mui/material';

interface Props {
  children: string;
}

export default function Author(props: Props) {
  return (
    <Typography
      sx={{ fontSize: '0.8em', fontWeight: 'bold' }}
      color="primary"
      variant="caption"
    >
      {props.children && `Author: ${props.children}`}
    </Typography>
  );
}
