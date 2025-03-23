import { colors, styled, SxProps, useMediaQuery } from '@mui/material';

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
  sx?: SxProps;
}

export default function NewsImage(props: Props) {
  const matches = useMediaQuery('print');
  const { url, src, sx = {} } = props;
  const backgroundImage = `url(${src})`;

  if (matches) return null;
  if (url)
    return <Link target="_blank" href={url} sx={{ backgroundImage, ...sx }} />;
  return <Img sx={{ backgroundImage, ...sx }} />;
}
