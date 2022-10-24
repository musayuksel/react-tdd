import React from "react";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import EachRestaurant from "./EachRestaurant";
export default function RestaurantList({ restaurants, setRestaurants }) {
  const restaurantsList = restaurants
    .filter((restaurant) => restaurant)
    .map((restaurant) => (
      <EachRestaurant
        setRestaurants={setRestaurants}
        restaurant={restaurant}
        key={restaurant}
      />
    ));
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Restaurants</h4>
      </li>
      {restaurantsList}
    </ul>
  );
}
