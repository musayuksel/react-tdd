import { useState } from "react";
import RestaurantListPage from "./components/RestaurantListPage";
import Viewers from "./components/Viewers";
import "./app.css";

function App() {
  const [viewer, setViewer] = useState("Musa");
  return (
    <>
      <Viewers viewer={viewer} />
      <RestaurantListPage />
    </>
  );
}

export default App;
