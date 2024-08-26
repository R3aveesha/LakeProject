// src/components/pages/LoginPage.jsx
import React from 'react';
import NavFunction from '../../functions/navFunction'; // Ensure the path is correct
import Footer from '../../components/core/Footer'; // Ensure the path is correct
import ActivitiesGrid from './ActivitiesGrid';

const GameMainPage = () => {
  return (
    <section style={{ backgroundColor: '#161E38' }}>
      <NavFunction name={'games'} />
      <div className="main" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>

      <ActivitiesGrid />
      </div>
      <Footer />
    </section>
  );
};

export default GameMainPage;
