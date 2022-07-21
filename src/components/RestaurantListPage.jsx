import React, { useState } from "react";
import NewRestaurantForm from "./NewRestaurantForm";

export default function RestaurantListPage() {
  const [restaurants, setRestaurants] = useState([]);
  function saveHandler(name) {
    setRestaurants((prevRestaurants) => [...prevRestaurants, name]);
  }
  return (
    <section>
      <NewRestaurantForm saveHandler={saveHandler} />
      <button data-testid="addRestaurantButton">Add restaurant</button>
      <ul data-testid="restaurantList">
        {restaurants.map((restaurant) => (
          <li key={restaurant}>{restaurant}</li>
        ))}
      </ul>
    </section>
  );
}
