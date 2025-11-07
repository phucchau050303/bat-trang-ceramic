import Carousel from 'react-bootstrap/Carousel';
import '../../styles/carousel.css';

const MyCarousel = ({ images = [] }) => {
  const hero = images[0];

  return (
    <div className="carousel-wrapper">
      <Carousel>
        {images.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100 carousel-img" src={img.src} alt={img.alt} />
          </Carousel.Item>
        ))}
      </Carousel>

      {hero && (
        <div className="carousel-caption-static">
          <h1>{hero.title}</h1>
          <p className="carousel-subtitle">{hero.subtitle}</p>
          {hero.cta && (
            <a className="hero-btn" href={hero.ctaLink || '#'}>{hero.cta}</a>
          )}
        </div>
      )}
    </div>
  );
};

export default MyCarousel;