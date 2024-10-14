import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'GohuFont Nerd Font, sans-serif',
  },
  palette: {
    primary: {
      main: '#5E5DF0', // Dark purple

    },
    secondary: {
      main: '#A4A3F6', // Lighter purple
      dark: "#D8D8D8",
      light: '#F0F0F0' // light gray
    },
  },
  shape: {
    borderRadius: 20, // Rounded corners
  },
});

export default theme;