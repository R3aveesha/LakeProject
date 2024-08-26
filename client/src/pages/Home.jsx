import React from 'react';
import NavBar from '../components/core/NavBar';
import Sidebar from '../components/core/Sidebar';
import NavFunction from '../functions/navFunction';
import StaffRegistrationForm from '../pages/staffManagement/StafftRegForm';

import Footer from '../components/core/Footer';
const Home = () => {

  
  const images = [
    'https://via.placeholder.com/600x400?text=Slide+1',
    'https://via.placeholder.com/600x400?text=Slide+2',
    'https://via.placeholder.com/600x400?text=Slide+3',
  ];
  

  return (
    <section>
      <NavFunction name={'home'} />
      <StaffRegistrationForm/>
      <Footer/>
    </section>
    

  );
};

export default Home;
