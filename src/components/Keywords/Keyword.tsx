import {
  useNavigate,
  useSearchParams,
  type URLSearchParamsInit,
} from 'react-router-dom';
import ListItem from '../ListItem';
import { SxProps } from '@mui/material';

interface Props {
  keyword?: string;
  sx?: SxProps;
}

export default function Keyword(props: Props) {
  const { keyword = '', sx = {} } = props;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('q') || '';
  const cat = searchParams.get('cat') || '';
  const source = searchParams.get('source') || '';
  const date = searchParams.get('date') || '';
  const country = searchParams.get('country') || '';

  const setCategory = () => {
    navigate('/');
    const params: URLSearchParamsInit = { q: keyword };

    if (q) params.q = q;
    if (cat) params.cat = cat;
    if (country) params.country = country;
    if (source) params.source = source;
    if (date) params.date = date;

    setSearchParams(params);
  };
  return (
    <ListItem sx={sx} data-selected={q === keyword} onClick={setCategory}>
      {keyword}
    </ListItem>
  );
}
