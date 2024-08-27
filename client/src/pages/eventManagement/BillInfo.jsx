import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const BillInfo = () => {
  return (
    <>
      <NavBar name="events" />
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.mainTitle}>Victory Arena</h1>
          <h2 style={styles.subTitle}>Booking Form</h2>
        </div>
        <div style={styles.body}>
          <div style={styles.billInformation}>
            <h3>Bill Information</h3>
            <p>Victory Arena Booking Fee = Rs.1500</p>
            <p>Total Amount = Rs.1500</p>
          </div>
          <div style={styles.paymentMethod}>
            <h3>Payment Method</h3>
            <button style={styles.button}>Card Payment &rarr;</button>
            <button style={styles.button}>Cash on Delivery &rarr;</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    minHeight: '70vh',
  },
  header: {
    marginBottom: '20px',
  },
  mainTitle: {
    fontSize: '36px',
    margin: '0',
  },
  subTitle: {
    fontSize: '24px',
    margin: '0',
  },
  body: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '40px',
  },
  billInformation: {
    backgroundColor: '#F0F0F0',
    color: '#000000',
    padding: '20px',
    borderRadius: '8px',
    width: '40%',
  },
  paymentMethod: {
    backgroundColor: '#F0F0F0',
    color: '#000000',
    padding: '20px',
    borderRadius: '8px',
    width: '40%',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px 20px',
    margin: '10px 0',
    fontSize: '16px',
    backgroundColor: '#333333',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default BillInfo;
