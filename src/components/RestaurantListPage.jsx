import React, { useState } from "react";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export default function RestaurantListPage() {
  const [restaurants, setRestaurants] = useState([]);

  function saveHandler(name) {
    setRestaurants((prevRestaurants) => [...prevRestaurants, name]);
  }
  return (
    <section>
      <NewRestaurantForm saveHandler={saveHandler} />
      <RestaurantList restaurants={restaurants} />
    </section>
  );
}
