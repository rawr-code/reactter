import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// Material UI
import theme from './config/MUICustomTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
