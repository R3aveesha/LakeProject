import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const AddnewMovie = () => {
  return (
    <>
      <NavBar name="home" />
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <div style={styles.inputGroup}>
            <div style={styles.inputField}>
              <label htmlFor="name" style={styles.label}>Name</label>
              <input type="text" id="name" placeholder="Name" style={styles.input} />
            </div>
            <div style={styles.inputField}>
              <label htmlFor="director" style={styles.label}>Director</label>
              <input type="text" id="director" placeholder="Director" style={styles.input} />
            </div>
          </div>
          <div style={styles.inputGroup}>
            <div style={styles.inputField}>
              <label htmlFor="year" style={styles.label}>Year</label>
              <input type="text" id="year" placeholder="Year" style={styles.input} />
            </div>
            <div style={styles.inputField}>
              <label htmlFor="language" style={styles.label}>Language</label>
              <input type="text" id="language" placeholder="Language" style={styles.input} />
            </div>
          </div>
          <div style={styles.inputGroup}>
            <div style={styles.inputField}>
              <label htmlFor="genre" style={styles.label}>Genre</label>
              <input type="text" id="genre" placeholder="Genre" style={styles.input} />
            </div>
            <div style={styles.inputField}>
              <label htmlFor="duration" style={styles.label}>Duration</label>
              <input type="text" id="duration" placeholder="Duration" style={styles.input} />
            </div>
          </div>
          <div style={styles.inputGroup}>
            <div style={styles.inputField}>
              <label htmlFor="actors" style={styles.label}>Actors</label>
              <textarea id="actors" placeholder="Actors" style={styles.textarea}></textarea>
            </div>
            <div style={styles.inputField}>
              <label htmlFor="synopsis" style={styles.label}>Synopsis</label>
              <textarea id="synopsis" placeholder="Synopsis" style={styles.textarea}></textarea>
            </div>
          </div>
          <button style={styles.submitButton}>Submit</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 150px)', // Adjust height to consider header and footer height
    backgroundColor: '#1b1b2f',
    color: '#fff',
  },
  formContainer: {
    width: '80%',
    maxWidth: '800px',
    backgroundColor: '#2d2d44',
    padding: '20px',
    borderRadius: '10px',
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    gap: '20px', // Adds gap between two fields
  },
  inputField: {
    width: '48%',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#f8f8f8',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#f8f8f8',
    color: '#000',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#f8f8f8',
    color: '#000',
    resize: 'none',
    height: '100px',
  },
  submitButton: {
    display: 'block',
    width: '150px',
    padding: '10px',
    margin: '0 auto',
    backgroundColor: '#f8c444',
    border: 'none',
    borderRadius: '5px',
    color: '#000',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default AddnewMovie;
