<<<<<<< HEAD
import React from "react";
import NavBar from "../components/core/NavBar";
import Sidebar from "../components/core/Sidebar";
import Card from "../components/reUseable/card";
import NavFunction from "../functions/navFunction";
=======
import React from 'react';
import NavBar from '../components/core/NavBar';
import Sidebar from '../components/core/Sidebar';
import NavFunction from '../functions/navFunction';
import StaffRegistrationForm from '../pages/staffManagement/StafftRegForm';
>>>>>>> 64a060b6139380227a6fb2221e1a97e5f966cf97

import Footer from '../components/core/Footer';
import Carousel from '../components/core/HomeCarousel';
import ItemCard from '../components/itemCard';
const Home = () => {

<<<<<<< HEAD
  const handleView = () => {
    alert('View button clicked!');
};

  return (
    <section>
      <NavFunction name={"home"} />
=======
  
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
>>>>>>> 64a060b6139380227a6fb2221e1a97e5f966cf97
    </section>
    

  );
};

export default Home;
