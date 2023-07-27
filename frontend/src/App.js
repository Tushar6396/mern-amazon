import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Container, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header>
          <Navbar variant='dark' bg='dark'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>amazon</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/product/:slug' element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <footer className='text-center mb-4'>
          <div>All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
