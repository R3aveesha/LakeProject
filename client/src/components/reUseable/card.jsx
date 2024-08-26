import React from 'react';
import './card.css'; 

const Card = ({ image, title, onView }) => {
    return (
        <div className="card">
            <img src={image} alt="Card Image" className="card-image" />
            <div className="card-title">{title}</div>
            <button className="card-button" onClick={onView}>View</button>
        </div>
    );
};

export default Card;
