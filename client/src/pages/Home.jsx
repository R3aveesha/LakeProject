import React from 'react';
import NavBar from '../components/core/NavBar';
import Sidebar from '../components/core/Sidebar';
import NavFunction from '../functions/navFunction';
import StaffDashboard from './staffManagement/StaffDashboard';

const Home = () => {

  return (
    <section>
      <NavFunction name={'home'} />
      <StaffDashboard />
    </section>

  );
};

export default Home;
