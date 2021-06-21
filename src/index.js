import 'Assets/css/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { color, font } from './Assets/Style/themes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ color, font }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
