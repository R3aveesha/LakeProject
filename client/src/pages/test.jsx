import React, { Component } from "react";
import Card from "../components/reUseable/card";
import Rating from "../components/reUseable/rating";

export default class Test extends Component {
  render() {
    const handleView = () => {
      alert("View button clicked!");
    };
    return (
      <div style={{ backgroundColor: "#1D284C" }}>
        <Card
          image="/images/game1.jpeg"
          title="Card Title"
          onView={handleView}
        />

        <Rating rating={4.5} totalRating={100} />
      </div>
    );
  }
}
