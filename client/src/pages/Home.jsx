import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <a href="/" className="card badminton" >
        <div>
          <h2>Badminton</h2>
          <p>Now Available!</p>
        </div>
      </a>

      <a href="/" className="card tennis">
        <div>
          <h2>Tennis</h2>
        </div>
      </a>

      <a href="/" className="card deadpool">
        <div>
          <h2>Deadpool</h2>
        </div>
      </a>

      <a href="/" className="card food">
        <div>
          <h2>Delicious Food Menu</h2>
          <p>50% off</p>
        </div>
      </a>

      <a href="/" className="card archery">
        <div>
          <h2>Archery</h2>
        </div>
      </a>

      <a href="/" className="card bowling">
        <div>
          <h2>Bowling</h2>
        </div>
      </a>
    </div>
  );
};

export default Home;
