// src/components/pages/GameMainPage.jsx
import React, { useState, useEffect } from "react";
import NavFunction from "../../functions/navFunction"; // Ensure the path is correct
import Footer from "../../components/core/Footer"; // Ensure the path is correct
import ActivitiesGrid from "./ActivitiesGrid";
import CategorizeNav from "../../components/core/CategorizeNav";
import axios from "axios";

const GameMainPage = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/games/games"); // Proxy will handle this
        setGames(response.data);
        setFilteredGames(response.data); // Set the initial filtered games
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  const handleIndoorClick = () => {
    console.log("Indoor Games clicked");
    setFilteredGames(games.filter((game) => game.category === "Indoor"));
  };

  const handleOutdoorClick = () => {
    console.log("Outdoor Games clicked");
    setFilteredGames(games.filter((game) => game.category === "Outdoor"));
  };

  const handleWaterClick = () => {
    console.log("Water Games clicked");
    setFilteredGames(games.filter((game) => game.category === "Water"));
  };

  const handleCategoryClick = () => {
    console.log("Show All Games clicked");
    setFilteredGames(games); // Reset to show all games
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredGames(games.filter((game) => game.name.toLowerCase().includes(query)));
  };

  return (
    <section style={{ backgroundColor: "#161E38" }}>
      <NavFunction name={"games"} />
      <div
        className="main"
        style={{
          display: "flex",
          flexDirection: "column", // Added to handle search input above the grid
          justifyContent: "start",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <CategorizeNav
          onIndoorClick={handleIndoorClick}
          onOutdoorClick={handleOutdoorClick}
          onWaterClick={handleWaterClick}
          onCategoryClick={handleCategoryClick} // For "Show All Games"
        />
       
        <ActivitiesGrid activities={filteredGames} />
        {/* Pass filteredGames to ActivitiesGrid */}
      </div>
      <Footer />
    </section>
  );
};

export default GameMainPage;
