import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const Movie1 = () => {
  return (
    <>
      <NavBar name='home' />
      <div style={styles.container}>
        <div style={styles.movieContainer}>
          <img
            src='https://via.placeholder.com/341x366'
            alt='Despicable Me 4'
            style={styles.movieImage}
          />
          <div style={styles.movieDetails}>
            <h2 style={styles.title}>Movie Details</h2>
            <p><strong>Name:</strong> Despicable Me 4</p>
            <p><strong>Director:</strong> Chris Renaud</p>
            <p><strong>Year:</strong> 2024</p>
            <p><strong>Language:</strong> English</p>
            <p><strong>Actors:</strong> Steve Carell, Kristen Wiig, Pierre Coffin, Joey King, Miranda Cosgrove, Stephen Colbert, Sofia Vergara, Steve Coogan, Madison Palon, Dana Gaier, Chloe Fineman, Will Ferrell</p>
            <p><strong>Genre:</strong> Family</p>
            <p><strong>Duration:</strong> 1h 34m</p>
            <p><strong>Synopsis:</strong> Gru and Lucy and their girls Margo, Edith, and Agnes welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, and the family is forced to go on the run.</p>
          </div>
        </div>

      
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#1b1b2f',
    color: '#fff',
  },
  movieContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
    backgroundColor: '#2d2d44',
    padding: '20px',
    borderRadius: '10px',
  },
  movieImage: {
    marginRight: '20px',
    borderRadius: '10px',
  },
  movieDetails: {
    maxWidth: '600px',
  },
  title: {
    marginBottom: '15px',
    color: '#f8f8f8',
  },

};

export default Movie1;
