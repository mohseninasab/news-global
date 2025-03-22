import classes from './NewsImage.module.scss';
import { styled } from '@mui/material';

const Link = styled('a')({
  borderRadius: 4,
});

interface Props {
  url?: string;
  src: string;
}
export default function NewsImage(props: Props) {
  const { url, src } = props;
  return (
    <Link
      target="_blank"
      href={url}
      className={classes.root}
      sx={{ backgroundImage: `url(${src})` }}
    />
  );
}
