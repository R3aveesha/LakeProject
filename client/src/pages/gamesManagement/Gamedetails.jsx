import React from "react";
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";
const GameDetails = () => {
  const games = [
   {}
  ];

  return (
    <div>
    <NavBar></NavBar>
    <div style={styles.container}>
      <h2 style={styles.title}>Games Details</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.headerCell}>GID</th>
            <th style={styles.headerCell}>Category</th>
            <th style={styles.headerCell}>Name</th>
            <th style={styles.headerCell}>Description</th>
            <th style={styles.headerCell}>Price Per Hour</th>
            <th style={styles.headerCell}>Option</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.gid} style={styles.row}>
              <td style={styles.cell}>{game.gid}</td>
              <td style={styles.cell}>{game.category}</td>
              <td style={styles.cell}>{game.name}</td>
              <td style={styles.cell}>{game.description}</td>
              <td style={styles.cell}>Rs. {game.price}</td>
              <td style={styles.cell}>
                <button style={styles.editButton}>Edit</button>
                <button style={styles.deleteButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer></Footer>
    </div>
  );
};

const styles = {
  container: {
    
    textAlign: "center",
    backgroundColor: "#161E38",  // Add background color to the container
    padding: "20px",
    height:"100vh"
    
  },
  title: {
    color: "#fff",
    backgroundColor: "#000",
    padding: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    color: "#333",
    backgroundColor: "#fff",  // Add background color to the table
  },
  headerCell: {
    border: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
  },
  row: {
    backgroundColor: "#f2f2f2",
  },
  cell: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center",
  },
  editButton: {
    backgroundColor: "yellow",
    border: "none",
    padding: "5px 10px",
    marginRight: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default GameDetails;
