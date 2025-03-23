import { Typography } from '@mui/material';

interface Props {
  title: string;
  url?: string;
}

export default function NewsHeadline(props: Props) {
  const title = (
    <Typography sx={{ fontWeight: 900 }} variant="body1">
      {props.title}
    </Typography>
  );

  if (props.url)
    return (
      <a target="_blank" href={props.url}>
        {title}
      </a>
    );

  return title;
}
