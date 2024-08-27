import React from 'react';
import styles from '../../pages/foodManagement/styles/foodOrderStyles.module.css';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';
import CustomButton from '../../components/reUseable/CustomButton';

const Booking1 = () => {
  return (
    <>
      <NavBar name='home' />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh', background: '#161E38' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>
          <h2>Booking Form</h2>
        </div>
        <div style={{ width: '400px', background: '#1D284C', color: 'white', padding: '20px', boxSizing: 'border-box', borderRadius: '10px' }}>
          <form>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* First Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                <div style={{ width: '48%' }}>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: 'none' }} />
                </div>
                <div style={{ width: '48%' }}>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: 'none' }} />
                </div>
              </div>

              {/* Second Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                <div style={{ width: '48%' }}>
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: 'none' }} />
                </div>
                <div style={{ width: '48%' }}>
                  <label htmlFor="date">Date:</label>
                  <input type="date" id="date" name="date" style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: 'none' }} />
                </div>
              </div>

              {/* Third Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px',}}>
                <div style={{ width: '48%' }}>
                  <label htmlFor="seatNumber">Seat Number:</label>
                  <input type="text" id="seatNumber" name="seatNumber" style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: 'none' }} />
                </div>
                <div style={{ width: '48%', display: 'flex', gap: '10px' }}>
                  <div style={{ width: '50%' }}>
                    <label htmlFor="hour">Hour:</label>
                    <input type="number" id="hour" name="hour" min="0" max="23" style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: 'none' }} />
                  </div>
                  <div style={{ width: '50%' }}>
                    <label htmlFor="minute">Min:</label>
                    <input type="number" id="minute" name="minute" min="0" max="59" style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: 'none' }} />
                  </div>
                </div>
              </div>

              <CustomButton buttonText="Book Now" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Booking1;
