import React, { useState } from "react";

const EditDeleteUpdateTable = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Inception",
      director: "Christopher Nolan",
      year: "2010",
      language: "English",
      genre: "Sci-Fi",
      actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
      duration: "148 minutes",
      synopsis: "A thief who steals corporate secrets...",
    },
    // Add more movies here...
  ]);

  const handleEdit = (id) => {
    // Implement your edit functionality here
    console.log("Edit movie with id:", id);
  };

  const handleDelete = (id) => {
    // Implement your delete functionality here
    console.log("Delete movie with id:", id);
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleUpdate = (id) => {
    // Implement your update functionality here
    console.log("Update movie with id:", id);
  };

  return (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeaderRow}>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Director</th>
            <th style={styles.tableHeader}>Year</th>
            <th style={styles.tableHeader}>Language</th>
            <th style={styles.tableHeader}>Genre</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id} style={styles.tableRow}>
              <td style={styles.tableCell}>{movie.name}</td>
              <td style={styles.tableCell}>{movie.director}</td>
              <td style={styles.tableCell}>{movie.year}</td>
              <td style={styles.tableCell}>{movie.language}</td>
              <td style={styles.tableCell}>{movie.genre}</td>
              <td style={styles.tableCell}>
                <button style={styles.editButton} onClick={() => handleEdit(movie.id)}>Edit</button>
                <button style={styles.updateButton} onClick={() => handleUpdate(movie.id)}>Update</button>
                <button style={styles.deleteButton} onClick={() => handleDelete(movie.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  tableContainer: {
    margin: "20px",
    padding: "20px",
    backgroundColor: "#1b1f38",
    borderRadius: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#e0f0ff",
    borderRadius: "10px",
    overflow: "hidden",
  },
  tableHeaderRow: {
    backgroundColor: "#0c1024",
    color: "#ffffff",
  },
  tableHeader: {
    padding: "10px",
    textAlign: "left",
    fontWeight: "bold",
  },
  tableRow: {
    borderBottom: "1px solid #ccc",
  },
  tableCell: {
    padding: "10px",
    textAlign: "left",
  },
  editButton: {
    marginRight: "5px",
    padding: "5px 10px",
    backgroundColor: "#ffc107",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#000",
  },
  updateButton: {
    marginRight: "5px",
    padding: "5px 10px",
    backgroundColor: "#4caf50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#fff",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#f44336",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#fff",
  },
};

export default EditDeleteUpdateTable;
