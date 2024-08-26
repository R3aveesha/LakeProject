import React from 'react';
import NavBar from '../components/core/NavBar';
import Sidebar from '../components/core/Sidebar';
import NavFunction from '../functions/navFunction';
import StaffRegistrationForm from '../pages/staffManagement/StafftRegForm';

import Footer from '../components/core/Footer';
const Home = () => {

  return (
    <section>
      <NavFunction name={'home'} />
      <StaffRegistrationForm/>
      <Footer/>
    </section>
    

  );
};

export default Home;
