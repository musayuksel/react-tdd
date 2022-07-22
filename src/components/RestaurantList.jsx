import React from "react";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
export default function RestaurantList({ restaurants }) {
  const restaurantsList = restaurants.map((restaurant) => (
    <li className="collection-item" key={restaurant}>
      {restaurant}
    </li>
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
