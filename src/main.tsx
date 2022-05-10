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
import Characters from './routes/characters';
import Character from './routes/character';

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
              <Route path="episodes" element={<Episodes /> }/>
              <Route path="episodes/:episodeId" element={<Episode />} />
              <Route path="characters" element={<Characters />} />
              <Route path="characters/:characterId" element={<Character />} />
            </Route>
            {/* <Route path="/" element={<App />} />
            <Route path="/invoices" element={<Invoices />} /> */}
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
