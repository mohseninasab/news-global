import { useMemo } from 'react';
import { List } from '@mui/material';
import { useGetGuardinaSectionsQuery } from 'src/services/Guardian';
import Category from './Category';

export default function Cathegory() {
  const { data } = useGetGuardinaSectionsQuery('');

  const topSections = useMemo(() => {
    return data?.response?.results.slice(0, 8);
  }, [data]);

  return (
    <List sx={{ display: { xs: 'none', md: 'flex' }, marginBottom: 1 }}>
      {topSections?.map((section) => (
        <Category key={section.id} section={section} />
      ))}
      <Category
        section={{
          id: '',
          webTitle: 'More...',
          webUrl: '',
          apiUrl: '',
          editions: [],
        }}
      />
    </List>
  );
}
