import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/navbar";
import Herosection from "./components/herosection/herosection";
import Filterbar from "./components/filterbar/filterbar";
import Products from "./components/products/products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Herosection />
      <Filterbar />
      <Products />
    </>
  );
}

export default App;
