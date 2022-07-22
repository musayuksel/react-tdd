import React, { useState } from "react";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
export default function NewRestaurantForm({
  saveHandler,
  setIsShowNewRestaurantForm,
}) {
  const [restaurantName, setRestaurantName] = useState("");
  function changeHadler(event) {
    setRestaurantName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    saveHandler(restaurantName);
    setIsShowNewRestaurantForm(false);
  }
  return (
    <>
      <form data-testid="newRestaurantForm" onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            className="input-field"
            id="restaurantName"
            value={restaurantName}
            type="text"
            name="name"
            data-testid="newRestaurantName"
            onChange={changeHadler}
          />
          <label htmlFor="restaurantName">Name:</label>
        </div>
        <button
          className="waves-effect waves-light btn"
          onClick={handleSubmit}
          data-testid="saveNewRestaurantButton"
        >
          SAVE
        </button>
      </form>
    </>
  );
}
