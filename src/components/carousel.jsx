import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

import imagen1 from '../assets/desarrollo.jpg';
import imagen2 from '../assets/estadio.jpg';
import imagen3 from '../assets/gym.jpg';

const Carousel = () => {
  const navigate = useNavigate();
  const newsItems = [
    {
      id: 1,
      title: 'Nueva página del DEFIDER gracias a alumnos sansanos',
      description: 'Todo sea por un 100 declararon los integrantes',
      imageUrl: imagen1,
      link: './noticias'
    },
    {
      id: 2,
      title: 'Nuevas canchas de futbol campus San Joaquín',
      description: 'Conoce todos los detalles de las nuevas canchas',
      imageUrl: imagen2,
      link: './noticias'
    },
    {
      id: 3,
      title: 'Re-apertura del gimnasio campus San Joaquín',
      description: 'Ven a pasar las penas de fisica 120 al moderno gimnasio de la USM',
      imageUrl: imagen3,
      link: './noticias'
    }
  ];

  const handleItemClick = (link) => {

    navigate(link);
  }

  const settings = {
    dots: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000
  };

  return (
    <div className='news-carousel'>
      <Slider {...settings}>
        {newsItems.map((item) => (
          <div key={item.id} className='carousel-item'
            onClick={() => handleItemClick(item.link)}
            style={{cursor: 'pointer'}}
            >
            <img src={item.imageUrl} alt={item.title} className='carousel-image' />
            <div className='carousel-content'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
