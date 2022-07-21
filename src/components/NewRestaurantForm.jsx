import React, { useState } from "react";

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
        <label>Name:</label>
        <input
          value={restaurantName}
          type="text"
          name="name"
          data-testid="newRestaurantName"
          onChange={changeHadler}
        />
        <button onClick={handleSubmit} data-testid="saveNewRestaurantButton">
          SAVE
        </button>
      </form>
    </>
  );
}
