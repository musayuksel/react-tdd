import React, { useState } from "react";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

export default function RestaurantListPage() {
  const [restaurants, setRestaurants] = useState([]);
  function saveHandler(name) {
    setRestaurants((prevRestaurants) => [...prevRestaurants, name]);
  }
  return (
    <section>
      <NewRestaurantForm saveHandler={saveHandler} />
      <button data-testid="addRestaurantButton">Add restaurant</button>
      <RestaurantList restaurants={restaurants} />
    </section>
  );
}
