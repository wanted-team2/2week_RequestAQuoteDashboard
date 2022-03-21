import React from 'react';
import { Home } from '@pages';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Home />
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    </>
  );
}

export default App;
