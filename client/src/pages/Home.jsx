import React from 'react';
import NavBar from '../components/core/NavBar';
import Sidebar from '../components/core/Sidebar';
import NavFunction from '../functions/navFunction';


import Footer from '../components/core/Footer';
import Carousel from '../components/core/HomeCarousel';
import ItemCard from '../components/itemCard';


const Home = () => {

  
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    'image3.jpg',
  ];
  

  return (
    <section>
      <NavFunction name={'home'} />
      
      <Carousel images={images} />
      <ItemCard />
      <Footer/>

    

       
    </section>
    

  );
};

export default Home;
