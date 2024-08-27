import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const BookingEvent = () => {
  return (
    <>
      <NavBar name="events" />
      <div style={styles.container}>
        <h1 style={styles.heading}>Victory Arena Booking Form</h1>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input type="text" placeholder="Input" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Address</label>
            <input type="text" placeholder="Input" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Age</label>
            <input type="text" placeholder="Input" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Contact No</label>
            <input type="text" placeholder="Input" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Gender</label>
            <input type="text" placeholder="Input" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" placeholder="Input" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Event Name</label>
            <input type="text" placeholder="Input" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Event Date</label>
            <input type="date" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Other</label>
            <input type="text" placeholder="Input" style={styles.input} />
          </div>
          <button type="submit" style={styles.submitButton}>
            Save Details and Next
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#0a1e42',
    color: '#fff',
    minHeight: 'calc(100vh - 60px)', // assuming navbar is 60px high
  },
  heading: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '36px',
    color: '#fff',
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#0a1e42',
    padding: '20px',
    borderRadius: '10px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontSize: '16px',
    color: '#fff',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#1a2b57',
    color: '#fff',
  },
  submitButton: {
    gridColumn: 'span 2',
    padding: '15px 30px',
    backgroundColor: '#3cd1c2',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    cursor: 'pointer',
    textAlign: 'center',
  },
};

export default BookingEvent;
