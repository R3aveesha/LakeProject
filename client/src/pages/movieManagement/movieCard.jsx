import React from "react";

const movieCard = () => {
  const { data } = this.props;

  return (
    <div style={styles.movieCard}>
      <img src={data.image} alt={data.title} style={styles.movieImage} />
      <p>{data.title}</p>
    </div>
  );
};

const styles = {
  movieCard: {
    textAlign: "center",
    backgroundColor: "#2d2d44",
    borderRadius: "10px",
    padding: "10px",
  },
};

export default movieCard;
