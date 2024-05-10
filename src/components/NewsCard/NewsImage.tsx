import classes from './NewsImage.module.scss';

interface Props {
  url: string;
  src: string;
}
export default function NewsImage(props: Props) {
  const { url, src } = props;
  return (
    <a
      target="_blank"
      href={url}
      className={classes.root}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}
