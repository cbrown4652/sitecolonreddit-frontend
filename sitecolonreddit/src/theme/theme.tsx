import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B0082', // Dark purple
    },
    secondary: {
      main: '#E6E6FA', // Lighter purple
    },
  },
  shape: {
    borderRadius: 20, // Rounded corners
  },
});

export default theme;