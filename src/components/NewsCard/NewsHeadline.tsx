import { Typography, TypographyOwnProps } from '@mui/material';

interface Props extends TypographyOwnProps {
  title: string;
  url?: string;
}

export default function NewsHeadline(props: Props) {
  return (
    <a target="_blank" href={props.url}>
      <Typography
        sx={{ fontWeight: 900, lineHeight: 1.3 }}
        variant={props.variant || 'h6'}
      >
        {props.title}
      </Typography>
    </a>
  );
}
