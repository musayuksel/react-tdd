import React from "react";

export default function EachRestaurant({ restaurant, setRestaurants }) {
  function handleDelete() {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.filter((eachRestaurant) => eachRestaurant !== restaurant)
    );
  }
  return (
    <li className="collection-item restaurant-list-item">
      <p className="col s10">{restaurant}</p>
      <button onClick={handleDelete} className="delete-item">
        <i className="small material-icons col s2 ">delete_forever</i>
      </button>
    </li>
  );
}
