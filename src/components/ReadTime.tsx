import { useMemo } from 'react';
import { Typography } from '@mui/material';

interface Props {
  children: string;
}

export default function ReadTime(props: Props) {
  const time = useMemo(() => {
    return Math.floor(parseInt(props.children, 10) / 1500);
  }, [props.children]);

  return (
    <Typography
      sx={{ fontSize: '0.7em' }}
      color="textSecondary"
      variant="caption"
    >
      {Math.max(time, 1) || 1} MIN READ
    </Typography>
  );
}
