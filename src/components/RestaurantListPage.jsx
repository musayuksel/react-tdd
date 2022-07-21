import React, { useState } from "react";
import NewRestaurantForm from "./NewRestaurantForm";

export default function RestaurantListPage() {
  const [restaurants, setRestaurants] = useState([]);
  return (
    <section>
      <NewRestaurantForm />
      <button data-test="addRestaurantButton">Add restaurant</button>
    </section>
  );
}
