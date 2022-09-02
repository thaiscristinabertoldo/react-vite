import { Container } from 'react-bootstrap';
import { Footer, Header } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className='d-flex flex-column justify-content-between min-vh-100 bg-light'>
      <Header />
      <Container as='main' className='my-5'>
        <Home />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
