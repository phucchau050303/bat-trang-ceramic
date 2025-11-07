import React from 'react';
import '../../styles/gallery.css';

const ImageGallery = ({ images = [] }) => (
  <div className="container">
    <div className="gallery">
      {images.map((src, i) => (
        <div className="gallery-item" key={i}>
          <img src={src} alt={`gallery-${i}`} />
        </div>
      ))}
    </div>
  </div>
);

export default ImageGallery;