import React from "react";

const MovieDetailsPage = ({ imageUrl, movieDetails, onBookNow }) => {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={imageContainerStyle}>
          <img src={imageUrl} alt="Movie Poster" style={imageStyle} />
        </div>
        <div style={detailsContainerStyle}>
          <h2 style={detailsHeaderStyle}>Movie Details</h2>
          <p style={detailItemStyle}><strong>Name:</strong> </p>
          <p style={detailItemStyle}><strong>Director:</strong> </p>
          <p style={detailItemStyle}><strong>Year:</strong> </p>
          <p style={detailItemStyle}><strong>Language:</strong> </p>
          <p style={detailItemStyle}><strong>Actors:</strong> </p>
          <p style={detailItemStyle}><strong>Genre:</strong> </p>
          <p style={detailItemStyle}><strong>Duration:</strong> </p>
          <p style={detailItemStyle}><strong>Synopsis:</strong> </p>
        </div>
      </div>
      <button style={buttonStyle} onClick={onBookNow}>
        Book Now
      </button>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  backgroundColor: "#161E38",
  minHeight: "100vh",
  padding: "40px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#fff",
};

const contentStyle = {
  display: "flex",
  backgroundColor: "#1A3C63",
  padding: "20px",
  borderRadius: "10px",
  width: "70%",
  justifyContent: "space-between",
  alignItems: "center",
};

const imageContainerStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  width: "200px",
  height: "300px",
  borderRadius: "8px",
  objectFit: "cover",
};

const detailsContainerStyle = {
  flex: 2,
  backgroundColor: "#254273",
  padding: "20px",
  borderRadius: "10px",
  marginLeft: "20px",
  color: "#ddd",
};

const detailsHeaderStyle = {
  marginBottom: "20px",
  fontSize: "1.5em",
  color: "#fff",
};

const detailItemStyle = {
  marginBottom: "10px",
  fontSize: "1em",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#FFCC00",
  color: "#000",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1.2em",
};

export default MovieDetailsPage;
