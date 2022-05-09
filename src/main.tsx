import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GQL_URI } from './constants';
import Home from './routes/home';
import Episode from './routes/episode';
import Episodes from './routes/episodes';
import App from './App';

const client = new ApolloClient({
  uri: GQL_URI,
  cache: new InMemoryCache(),
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="episodes" element={<Episodes />}>
                <Route
                  index
                  element={(
                    <main style={{ padding: '1rem' }}>
                      <p>Select an invoice</p>
                    </main>
                  )}
                />
                <Route path=":episodeId" element={<Episode />} />
              </Route>
            </Route>
            {/* <Route path="/" element={<App />} />
            <Route path="/invoices" element={<Invoices />} /> */}
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
