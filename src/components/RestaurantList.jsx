import React from "react";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
export default function RestaurantList({ restaurants }) {
  const restaurantsList = restaurants.map((restaurant) => (
    <li key={restaurant}>
      <a className="collection-item" href="">
        {restaurant}
      </a>
    </li>
  ));
  return <ul className="collection">{restaurantsList}</ul>;
}
