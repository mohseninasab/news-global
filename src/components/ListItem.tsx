import { styled, colors } from '@mui/material';

const ListItem = styled('li')({
  padding: '4px 10px',
  fontSize: '1em',
  userSelect: 'none',
  fontWeight: 700,
  textTransform: 'capitalize',
  borderRadius: 2,
  border: '1px solid transparent',
  '&:hover': {
    borderColor: colors.grey[400],
    cursor: 'pointer',
  },
  "&[data-selected='true']": {
    borderColor: colors.grey[900],
  },
});

export default ListItem;
