import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './containers/App';
import theme from './theme/theme';
import './assets/global.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);