import React from 'react';
import NavBar from '../components/core/NavBar';
import Sidebar from '../components/core/Sidebar';
import NavFunction from '../functions/navFunction';
import StaffRegistrationForm from '../pages/staffManagement/StafftRegForm';

import Footer from '../components/core/Footer';
import Carousel from '../components/core/HomeCarousel';
const Home = () => {

  
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    'image3.jpg',
  ];
  

  return (
    <section>
      <NavFunction name={'home'} />
      <StaffRegistrationForm/>
      <Carousel images={images} />
      <Footer/>
    </section>
    

  );
};

export default Home;
