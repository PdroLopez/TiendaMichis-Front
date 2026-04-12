import { useEffect, useState } from "react";
import './Carrusel.css';
const images = [
  "/src/assets/gato1.jpg",
  "/src/assets/gato2.jpg",
  "/src/assets/perro2.jpg",
];


const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // movimiento automático
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
          <section id="home" className="carousel-section">
               <div className="carousel">

      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} src={img} className="carousel-image" />
        ))}
      </div>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

    </div>

          </section>

 
  );
};

export default Carousel;