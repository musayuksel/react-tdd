import React, { useState } from "react";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export default function RestaurantListPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [isShowNewRestaurantForm, setIsShowNewRestaurantForm] = useState(false);
  function showAddRestaurantForm() {
    setIsShowNewRestaurantForm(!isShowNewRestaurantForm);
  }
  function saveHandler(name) {
    setRestaurants((prevRestaurants) => [...prevRestaurants, name]);
  }
  return (
    <section>
      {isShowNewRestaurantForm ? (
        <NewRestaurantForm
          saveHandler={saveHandler}
          setIsShowNewRestaurantForm={setIsShowNewRestaurantForm}
        />
      ) : (
        <>
          <button
            className="waves-effect waves-light btn"
            onClick={showAddRestaurantForm}
            data-testid="addRestaurantButton"
          >
            Add restaurant
          </button>
        </>
      )}
      <RestaurantList restaurants={restaurants} />
    </section>
  );
}
