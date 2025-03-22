import { colors, styled, SxProps } from '@mui/material';

const Link = styled('a')({
  borderRadius: 2,
  backgroundColor: colors.grey[100],
  display: 'block',
  width: '100%',
  minHeight: '200px',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

interface Props {
  url?: string;
  src: string;
  sx?: SxProps;
}

export default function NewsImage(props: Props) {
  const { url, src, sx = {} } = props;
  return (
    <Link
      target="_blank"
      href={url}
      sx={{ backgroundImage: `url(${src})`, ...sx }}
    />
  );
}
