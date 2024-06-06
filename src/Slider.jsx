import React, { useState, useEffect } from 'react';
import './Slider.css';

const ImageSlider = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('https://backmongo.azurewebsites.net/noticias')
      .then(response => response.json())
      .then(data => {
        const newSlides = data.map(item => ({
          id: item._id.$oid,
          src: item.imagen,
          title: item.Titulo,
        }));
        setSlides(newSlides);
      })
      .catch(error => console.error('Error:', error));

    const repeat = () => {
      let i = currentSlide + 1;

      const repeater = () => {
        setTimeout(() => {
          setCurrentSlide(i % slides.length);
          repeater();
        }, 35000);
      };

      repeater();
    };

    repeat();

    return () => clearTimeout(repeat); // Limpia el timeout cuando el componente se desmonta
  }, [currentSlide, slides.length]);

 return (
      <div className="img-slider">
      {slides.map((slide, index) => (
        <div key={`slide-${slide.id}-${index}`} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <img src={slide.src} alt={slide.title || `Slide ${index}`} />
        </div>
      ))}
      <div className="navigation">
        {slides.map((_, index) => (
          <div
            key={index} // Aquí el índice está bien porque es para los botones de control, aunque preferentemente usar identificadores únicos
            className={`btn ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
