import { colors, styled, useMediaQuery } from '@mui/material';

const styles = {
  borderRadius: 2,
  backgroundColor: colors.grey[100],
  display: 'block',
  width: '100%',
  minHeight: '200px',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

const Link = styled('a')(styles);
const Img = styled('div')(styles);

interface Props {
  url?: string;
  src: string;
}

export default function NewsImage(props: Props) {
  const matches = useMediaQuery('print');
  if (matches) return null;

  const { url, src } = props;
  const backgroundImage = `url(${src})`;

  if (url) return <Link target="_blank" href={url} sx={{ backgroundImage }} />;
  return <Img sx={{ backgroundImage }} />;
}
