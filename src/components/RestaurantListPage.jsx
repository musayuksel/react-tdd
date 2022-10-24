import React, { useState } from "react";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
export default function RestaurantListPage() {
  // LAZY LOADING
  const [count, setCount] = React.useState(0);
  const increment = async () => {
    return await setTimeout(() => {
      console.log(count);
      setCount((prev) => prev + 1);
    }, 1000);
  };

  function testDelete() {
    // setTimeout(() => {
    console.log("LAZY LOADING");
    return [];
    // }, 1000);
  }
  const [restaurants, setRestaurants] = useState(() => testDelete());

  function saveHandler(name) {
    setRestaurants((prevRestaurants) => [...prevRestaurants, name]);
  }
  return (
    <section>
      <button onClick={increment}>TEST-{count}</button>
      <NewRestaurantForm saveHandler={saveHandler} />
      <RestaurantList
        restaurants={restaurants}
        setRestaurants={setRestaurants}
      />
    </section>
  );
}
