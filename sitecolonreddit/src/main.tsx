import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import App from './containers/App';
import theme from './theme/theme';
import './assets/global.css'


const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);