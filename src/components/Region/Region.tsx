import {
  URLSearchParamsInit,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import ListItem from '../ListItem';
import { SxProps } from '@mui/material';

interface Props {
  region: { label: string; value: string };
  sx?: SxProps;
}

export default function Region({ region, sx = {} }: Props) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('q') || '';
  const cat = searchParams.get('cat') || '';
  const source = searchParams.get('source') || '';
  const date = searchParams.get('date') || '';
  const country = searchParams.get('country') || '';

  const setCategory = () => {
    navigate('/');
    const params: URLSearchParamsInit = { country: region.value };

    if (q) params.q = q;
    if (cat) params.cat = cat;
    if (source) params.source = source;
    if (date) params.date = date;

    setSearchParams(params);
  };
  return (
    <ListItem
      sx={sx}
      data-selected={country && country === region.value}
      onClick={setCategory}
    >
      {region?.label}
    </ListItem>
  );
}
