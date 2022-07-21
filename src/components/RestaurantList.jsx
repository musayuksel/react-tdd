import React from "react";

export default function RestaurantList({ restaurants }) {
  const restaurantsList = restaurants.map((restaurant) => (
    <li key={restaurant}>{restaurant}</li>
  ));
  return <ul>{restaurantsList}</ul>;
}
