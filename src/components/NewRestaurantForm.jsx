import React, { useState } from "react";

export default function NewRestaurantForm() {
  return (
    <div>
      <form>
        <label>Name:</label>
        <input type="text" name="name" data-test="newRestaurantName" />
        <button data-test="saveNewRestaurantButton">SAVE</button>
      </form>
    </div>
  );
}
