import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Footer, Header } from './components';
import { Router } from './routes/Router';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column justify-content-between min-vh-100 bg-light'>
        <Header />
        <Container as='main' className='my-5'>
          <Router />
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
