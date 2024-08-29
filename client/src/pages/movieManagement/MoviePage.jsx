<<<<<<< HEAD
import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';
import movie1 from '../../../public/movie1.jpeg';
import movie2 from '../../../public/movie2.jpeg';
import movie3 from '../../../public/movie3.jpeg';
import movie4 from '../../../public/movie4.jpeg';
import movie5 from '../../../public/movie5.jpeg';
import movie6 from '../../../public/movie6.jpeg';

const MovieSection = () => {
  const movies = [
    {
      title: 'My Red Comrade',
      image: movie1,
    },
    {
      title: 'Thangalaan',
      image: movie2,
    },
    {
      title: 'Despicable Me4',
      image: movie3,
    },
    {
      title: 'Kambili',
      image: movie4,
    },
    {
      title: 'Deadpool and Wolverine',
      image: movie5,
    },
    {
      title: 'Demote Colony 2',
      image: movie6,
    },
  ];

  return (
    <div>
      <NavBar />
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <div style={styles.filterGroup}>
            <h3>Filter By Genre</h3>
            <ul style={styles.list}>
              <li>Family</li>
              <li>Action</li>
              <li>Comedy</li>
              <li>Horror</li>
              <li>Romantic</li>
            </ul>
          </div>
          <div style={styles.filterGroup}>
            <h3>Filter By Language</h3>
            <ul style={styles.list}>
              <li>Sinhala</li>
              <li>Tamil</li>
              <li>Hindi</li>
              <li>English</li>
            </ul>
          </div>
          <div style={styles.filterGroup}>
            <h3>Filter By Date</h3>
            <button style={styles.button}>Now Showing</button>
            <button style={styles.button}>Upcoming</button>
=======
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
>>>>>>> b386fc60a66a27619defd9340eeb1e7926e552f4
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
<<<<<<< HEAD
        <div style={styles.moviesGrid}>
          {movies.map((movie, index) => (
            <div key={index} style={styles.movieCard}>
              <img src={movie.image} alt={movie.title} style={styles.movieImage} />
              <p style={styles.movieTitle}>{movie.title}</p>
            </div>
=======

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
>>>>>>> b386fc60a66a27619defd9340eeb1e7926e552f4
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
<<<<<<< HEAD
    display: 'flex',
    padding: '20px',
    backgroundColor: '#1b1f38',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#0c1024',
    padding: '15px',
    borderRadius: '10px',
    marginRight: '20px',
    color: 'white',  // Set sidebar text color to white
  },
  filterGroup: {
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
    color: 'white',  // Set list item text color to white
  },
  button: {
    backgroundColor: '#1b5e20',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    margin: '10px 0',
    cursor: 'pointer',
    display: 'block',
  },
  showtimesButton: {
    backgroundColor: '#ff9800',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
  moviesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
    flexGrow: 1,
  },
  movieCard: {
    textAlign: 'center',
    backgroundColor: '#0c1024',
    padding: '15px',
    borderRadius: '10px',
  },
  movieImage: {
    width: '90%',
    borderRadius: '10px',
=======
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
>>>>>>> b386fc60a66a27619defd9340eeb1e7926e552f4
  },
  movieTitle: {
    color: '#fff',
    marginTop: '10px',
  },
};

export default MovieSection;
