import { Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className='text-center'>
      <Alert variant='info'>Página em construção!</Alert>
      <Button variant='primary' onClick={() => navigate('/')}>
        Voltar para home
      </Button>
    </div>
  );
};
