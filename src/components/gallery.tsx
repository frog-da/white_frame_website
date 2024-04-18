"use client"
import React, { useState } from 'react';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/image1.webp',
    '/images/image2.webp',
    '/images/image3.webp',
    '/images/image4.webp',
    '/images/image5.webp',
    '/images/image6.webp',
  ];

  const handlePreviewClick = (index: React.SetStateAction<number>) => {
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="gallery">
      <div className="gallery__current-preview">
        <img src={images[currentImageIndex]} loading="lazy" />
      </div>
      <div className="content">
        <div className="gallery__navigation">
          <div className="gallery__previews">
            {images.map((image, index) => (
              <img
                key={index}
                className={`gallery__preview gallery__preview--${index + 1} ${currentImageIndex === index ? 'gallery__preview--active' : ''}`}
                src={image}
                loading="lazy"
                onClick={() => handlePreviewClick(index)}
              />
            ))}
          </div>
          <div className="gallery__btn">
            <img
              src="/vectors/arrow.svg"
              className="next-button"
              onClick={handleNextImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
