import { Typography } from '@mui/material';

interface Props {
  title: string;
  url: string;
}

export default function NewsHeadline(props: Props) {
  return (
    <a target="_blank" href={props.url}>
      <Typography sx={{ fontWeight: 900 }} variant="h6">
        {props.title}
      </Typography>
    </a>
  );
}
