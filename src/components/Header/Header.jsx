import { Container, Navbar } from 'react-bootstrap';

import logo from '../../assets/react.svg';

export const Header = () => (
  <header>
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            alt='Logo'
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top me-2'
          />
          DEVinHouse React
        </Navbar.Brand>
      </Container>
    </Navbar>
  </header>
);
