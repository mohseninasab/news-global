import { createTheme } from '@mui/material';

export default createTheme({
  typography: {
    fontFamily: [
      'merriweather',
      'system-ui',
      'Avenir',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: 'rgb(0, 92, 134)',
    },
    text: {
      primary: '#000000',
      secondary: '#5a5a5a',
    },
  },
});
