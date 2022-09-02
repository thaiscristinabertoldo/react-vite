import { Button, Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/react.svg';
import styles from './Header.module.css';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand className={styles.cursor} onClick={() => navigate('/')}>
            <img
              alt='Logo'
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top me-2'
            />
            DEVinHouse React
          </Navbar.Brand>

          <Button variant='dark' onClick={() => navigate('/about')}>
            Sobre
          </Button>
        </Container>
      </Navbar>
    </header>
  );
};
