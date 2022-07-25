import React, { useId } from "react";

export default function EachRestaurant({ restaurant, index }) {
  console.log("first");
  const id = useId();

  return (
    <li className="collection-item restaurant-list-item">
      <p className="col s10">{restaurant}</p>
      <button className="delete-item">
        <i className="small material-icons col s2 ">delete_forever</i>
      </button>
    </li>
  );
}
