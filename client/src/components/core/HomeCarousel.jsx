// src/Carousel.js
import React, { useState } from 'react';
import styles from '../../styles/carousel.module.css';	

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.carousel}>
      <button onClick={goToPrevious} className={styles.left}>Previous</button>
      <img src={images[currentIndex]} alt="carousel" className={styles.image} />
      <button onClick={goToNext} className={styles.right}>Next</button>
    </div>
  );
};

export default Carousel;
