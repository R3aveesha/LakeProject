import React from "react";
import NavBar from "../components/core/NavBar";
import Sidebar from "../components/core/Sidebar";
import Card from "../components/reUseable/card";
import NavFunction from "../functions/navFunction";

const Home = () => {

  const handleView = () => {
    alert('View button clicked!');
};

  return (
    <section>
      <NavFunction name={"home"} />
    </section>
  );
};

export default Home;
