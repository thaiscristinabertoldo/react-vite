import { Carousel } from 'react-bootstrap';

import { useAvailHeight } from '../../hooks';

const slides = [
  {
    descricao: 'Primeiro slide',
    assunto: 'technology',
  },
  {
    descricao: 'Segundo slide',
    assunto: 'computer',
  },
  {
    descricao: 'Terceiro slide',
    assunto: 'progamming',
  },
];

export const Home = () => {
  const { availHeight } = useAvailHeight();

  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className='d-block w-100'
            height={(availHeight * 70) / 100}
            src={`https://source.unsplash.com/random/?${slide.assunto}">`}
            alt={slide.descricao}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
