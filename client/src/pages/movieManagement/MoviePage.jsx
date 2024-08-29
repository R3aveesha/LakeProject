import React, { useEffect, useState } from "react";
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";
import axios from "axios";
import MovieCard from "./movieCard";
import { useNavigate } from "react-router-dom";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/movies/movies"
        );
        setMovies(response.data);
        setFilteredMovies(response.data); // Set the initial filtered movies
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
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

    // Function to normalize a date by setting time components to zero
    const normalizeDate = (date) => {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };

    if (selectedDate) {
      const now = normalizeDate(new Date()); // Normalize the current date
      filtered = filtered.filter((movie) => {
        const availableDates = movie.availableTimes.map((date) =>
          normalizeDate(new Date(date))
        );

        if (selectedDate === "Now Showing") {
          // Check if any available date matches the normalized current date
          return availableDates.some(
            (date) => date.getTime() === now.getTime()
          );
        } else if (selectedDate === "Upcoming") {
          // Check if all available dates are after the current date
          return availableDates.every((date) => date > now);
        }
        return false;
      });
    }

    if (searchTerm) {
      filtered = filtered.filter((movie) =>
        movie.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
  }, [selectedGenre, selectedLanguage, selectedDate, searchTerm, movies]);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setSelectedLanguage("");
    setSelectedDate("");
    setSearchTerm("");
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setSelectedGenre("");
    setSelectedDate("");
    setSearchTerm("");
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedGenre("");
    setSelectedLanguage("");
    setSearchTerm("");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSelectedGenre("");
    setSelectedLanguage("");
    setSelectedDate("");
  };
  const handleNavigate = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <NavBar name="movies" />
      <div style={styles.container}>
        <div style={styles.filterSection}>
          <input
            type="text"
            placeholder="Search Movies"
            value={searchTerm}
            onChange={handleSearch}
            style={styles.searchBox}
          />
          <div style={styles.filterContainer}>
            <div style={styles.filterCategory}>
              <h3 style={styles.filterTitle}>Filter By Genre</h3>
              <ul style={styles.filterList}>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => handleGenreSelect("Family")}
                >
                  Family
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => handleGenreSelect("Action")}
                >
                  Action
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => handleGenreSelect("Crime")}
                >
                  Crime
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => handleGenreSelect("Horror")}
                >
                  Horror
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => handleGenreSelect("Romantic")}
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
                  onClick={() => handleLanguageSelect("Sinhala")}
                >
                  Sinhala
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => handleLanguageSelect("Tamil")}
                >
                  Tamil
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => handleLanguageSelect("Hindi")}
                >
                  Hindi
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => handleLanguageSelect("English")}
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
                  onClick={() => handleDateSelect("Now Showing")}
                >
                  Now Showing
                </li>
                <li
                  style={{ paddingTop: "15px" }}
                  onClick={() => handleDateSelect("Upcoming")}
                >
                  Upcoming
                </li>
              </ul>
            </div>
          </div>
          <button
            style={styles.showtimesButton}
            onClick={() => {
              navigate("/movies/showtimes");
            }}
          >
            View Showtimes
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            maxWidth: "70%",
            justifyContent: "center",
          }}
        >
          {filteredMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} onNavigate={handleNavigate} />
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
    cursor: "pointer",
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
};

export default MoviePage;
