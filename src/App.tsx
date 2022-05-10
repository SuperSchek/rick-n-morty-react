import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import './App.scss';

function App() {
  return (
    <>
      <AppHeader />
      <Container maxWidth="container.xl">
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
}

export default App;
