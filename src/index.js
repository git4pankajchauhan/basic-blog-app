import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'Assets/css/index.scss';
import { ThemeProvider } from 'styled-components';
import { color, font } from './Assets/Style/themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ color, font }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
