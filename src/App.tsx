import React from 'react';
import { Home } from '@pages';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
