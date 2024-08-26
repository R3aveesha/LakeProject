import React from 'react';
import NavBar from '../components/core/NavBar';
import Sidebar from '../components/core/Sidebar';
import NavFunction from '../functions/navFunction';
import Footer from '../components/core/Footer';
const Home = () => {

  return (
    <section>
      <NavFunction name={'home'} />
      <Footer/>
    </section>
    
  );
};

export default Home;
