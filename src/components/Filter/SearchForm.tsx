import { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { useOnChange } from 'src/hooks/useOnChange';
import { FormEvent } from 'src/types/Event';
import { useSearchParams, URLSearchParamsInit } from 'react-router-dom';
import { Close, Search, East } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid2';

export default function SearchForm() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = useOnChange(searchParams.get('q') || '');
  const cat = searchParams.get('cat') || '';
  const source = searchParams.get('source') || '';
  const date = searchParams.get('date') || '';
  const country = searchParams.get('country') || '';

  const submit = (event: FormEvent) => {
    event.preventDefault();
    navigate('/');
    const params: URLSearchParamsInit = {};

    if (searchQuery.value) params.q = searchQuery.value;

    if (cat) params.cat = cat;
    if (source) params.source = source;
    if (date) params.date = date;
    if (country) params.country = country;

    setSearchParams(params);
  };
  return (
    <Grid sx={{ display: 'flex' }} component="form" gap={1} onSubmit={submit}>
      {open && (
        <>
          <Grid sx={{ flex: { xs: 1, md: 'none' } }}>
            <TextField
              label="Search"
              fullWidth
              variant="outlined"
              size="small"
              {...searchQuery}
            />
          </Grid>
        </>
      )}
      {open && (
        <Grid>
          <IconButton sx={{ color: 'black' }} type="submit">
            <East />
          </IconButton>
        </Grid>
      )}
      <Grid>
        <IconButton sx={{ color: 'black' }} onClick={() => setOpen(!open)}>
          {open ? <Close /> : <Search />}
        </IconButton>
      </Grid>
    </Grid>
  );
}
