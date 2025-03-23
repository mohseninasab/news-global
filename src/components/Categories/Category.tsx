import {
  useNavigate,
  useSearchParams,
  type URLSearchParamsInit,
} from 'react-router-dom';
import ListItem from '../ListItem';
import { SxProps } from '@mui/material';

interface Props {
  category?: string;
  sx?: SxProps;
}

export default function Category(props: Props) {
  const { category = '', sx = {} } = props;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('q') || '';
  const cat = searchParams.get('cat') || '';
  const source = searchParams.get('source') || '';
  const date = searchParams.get('date') || '';
  const country = searchParams.get('country') || '';

  const setCategory = () => {
    navigate('/');
    const params: URLSearchParamsInit = { cat: category };

    if (q) params.q = q;
    if (country) params.country = country;
    if (source) params.source = source;
    if (date) params.date = date;

    setSearchParams(params);
  };
  return (
    <ListItem sx={sx} data-selected={cat === category} onClick={setCategory}>
      {category}
    </ListItem>
  );
}
