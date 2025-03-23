import { Typography, TypographyOwnProps } from '@mui/material';

interface Props extends TypographyOwnProps {
  title: string;
  url?: string;
}

export default function NewsHeadline(props: Props) {
  const title = (
    <Typography
      sx={{ fontWeight: 900, lineHeight: 1.3 }}
      variant={props.variant || 'h6'}
    >
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
