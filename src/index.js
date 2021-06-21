import 'Assets/css/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'Store/store';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { color, font } from './Assets/Style/themes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={{ color, font }}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
