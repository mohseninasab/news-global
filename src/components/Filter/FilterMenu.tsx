import { TextField, Grid, Button } from '@mui/material';
import { useOnChange } from 'src/hooks/useOnChange';
import { FormEvent } from 'src/types/Event';
import { useSearchParams } from 'react-router-dom';
import { useNewsApiGetSourcesQuery } from 'src/services/NewsApi';
import { MenuItem } from '@mui/material';
import CATEGORIES from 'src/constances/categories';
import firstLetterUppercase from 'src/Utils/firstLetterUppercase';

export default function FilterMenu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useNewsApiGetSourcesQuery({});

  const searchQuery = useOnChange(searchParams.get('q') || '');
  const category = useOnChange(searchParams.get('category') || '');
  const source = useOnChange(searchParams.get('source') || '');
  const date = useOnChange(searchParams.get('date') || '');

  console.log(data);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const params = {
      date: date.value,
      category: category.value,
      q: searchQuery.value,
      source: source.value,
    };

    setSearchParams(params);
  };
  return (
    <Grid
      container
      alignItems="flex-end"
      component="form"
      spacing={2}
      onSubmit={submit}
    >
      <Grid item xs={12} sm={6} lg={3}>
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Search"
          fullWidth
          variant="outlined"
          size="small"
          {...searchQuery}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Source"
          select
          fullWidth
          variant="outlined"
          size="small"
          {...source}
        >
          <MenuItem value="">All</MenuItem>
          {data?.sources.map((source) => (
            <MenuItem key={source.id} value={source.id}>
              {source.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Category"
          select
          fullWidth
          variant="outlined"
          size="small"
          {...category}
        >
          <MenuItem value="">All</MenuItem>
          {CATEGORIES.map((category) => (
            <MenuItem key={category} value={category}>
              {firstLetterUppercase(category)}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TextField
          type="date"
          InputLabelProps={{ shrink: true }}
          label="Date"
          fullWidth
          variant="outlined"
          size="small"
          {...date}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <Button
          sx={{ minHeight: '40px' }}
          type="submit"
          color="primary"
          variant="contained"
          disableElevation
          fullWidth
        >
          Apply
        </Button>
      </Grid>
    </Grid>
  );
}
