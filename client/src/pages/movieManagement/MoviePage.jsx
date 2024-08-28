import React, { useEffect, useState } from "react";
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";
import axios from "axios";
import MovieCard from "./movieCard";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/movies/movies"
        ); // Proxy will handle this
        setMovies(response.data);
        setFilteredMovies(response.data); // Set the initial filtered games
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    let filtered = movies;

    if (selectedGenre) {
      filtered = filtered.filter((movie) => movie.category === selectedGenre);
    }

    if (selectedLanguage) {
      filtered = filtered.filter(
        (movie) => movie.language === selectedLanguage
      );
    }

    if (selectedDate) {
      const now = new Date();
      filtered = filtered.filter((movie) => {
        const availableDates = movie.availableTimes.map(
          (date) => new Date(date)
        );
        return selectedDate === "Now Showing"
          ? availableDates.some((date) => date > now)
          : availableDates.some((date) => date > now);
      });
    }

    if (searchTerm) {
      filtered = filtered.filter((movie) =>
        movie.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
  }, [selectedGenre, selectedLanguage, selectedDate, searchTerm, movies]);

  // click handlers for filtering movies

  //console.log(filteredMovies);

  return (
    <>
      <NavBar name="movies" />
      <div style={styles.container}>
        <div style={styles.filterSection}>
          <input
            type="text"
            placeholder="Search Movies"
            style={styles.searchBox}
          />
          <div style={styles.filterContainer}>
            <div style={styles.filterCategory}>
              <h3 style={styles.filterTitle}>Filter By Genre</h3>
              <ul style={styles.filterList}>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => setSelectedGenre("Family")}
                >
                  Family
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => setSelectedGenre("Action")}
                >
                  Action
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => setSelectedGenre("Crime")}
                >
                  Crime
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => setSelectedGenre("Horror")}
                >
                  Horror
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => setSelectedGenre("Romantic")}
                >
                  Romantic
                </li>
              </ul>
            </div>
            <div style={styles.filterCategory}>
              <h3 style={styles.filterTitle}>Filter By Language</h3>
              <ul style={styles.filterList}>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={(e) => setSelectedLanguage("Sinhala")}
                >
                  Sinhala
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => setSelectedLanguage("Tamil")}
                >
                  Tamil
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => setSelectedLanguage("Hindi")}
                >
                  Hindi
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => setSelectedLanguage("English")}
                >
                  English
                </li>
              </ul>
            </div>
            <div style={styles.filterCategory}>
              <h3 style={styles.filterTitle}>Filter By Date</h3>
              <ul style={styles.filterList}>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => setSelectedDate("Now Showing")}
                >
                  Now Showing
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => setSelectedDate("Upcoming")}
                >
                  Upcoming
                </li>
              </ul>
            </div>
          </div>
          <button style={styles.showtimesButton}>View Showtimes</button>
        </div>

        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            maxWidth: "70%",
            justifyContent: "center",
          }}
        >
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px",
    backgroundColor: "#1b1b2f",
    color: "#fff",
  },
  filterSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#2d2d44",
    borderRadius: "10px",
    width: "25%",
  },
  searchBox: {
    padding: "10px",
    marginBottom: "20px",
    width: "100%",
    borderRadius: "5px",
    border: "none",
    outline: "none",
  },
  filterContainer: {
    width: "100%",
  },
  filterCategory: {
    marginBottom: "20px",
  },
  filterTitle: {
    marginBottom: "10px",
    color: "#f8f8f8",
  },
  filterList: {
    listStyleType: "none",
    padding: "0",
    color: "#bbb",
  },
  showtimesButton: {
    padding: "10px 20px",
    backgroundColor: "#f8c444",
    border: "none",
    borderRadius: "5px",
    color: "#000",
    cursor: "pointer",
    marginTop: "20px",
  },
  moviesSection: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    width: "70%",
  },
  movieCard: {
    textAlign: "center",
    backgroundColor: "#2d2d44",
    borderRadius: "10px",
    padding: "10px",
  },
  movieImage: {
    width: "120px",
    height: "160px",
    borderRadius: "10px",
  },
};

export default MoviePage;
