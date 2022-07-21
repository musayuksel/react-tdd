import { useState } from "react";
import Viewers from "./components/Viewers";

function App() {
  const [viewer, setViewer] = useState("MMMMM");
  return (
    <>
      <Viewers viewer={viewer} />
    </>
  );
}

export default App;
