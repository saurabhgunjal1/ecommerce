import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/navbar";
import Herosection from "./components/herosection/herosection";
import Filterbar from "./components/filterbar/filterbar";
import Products from "./components/products/products";
import footer from "./assets/footer.png";

function App() {
  const [hideFilter, setHideFilter] = useState("flex");

  const toggleFilterVisibility = () => {
    setHideFilter(hideFilter === "flex" ? "none" : "flex");
  };

  return (
    <>
      <Navbar />
      <Herosection />
      <Filterbar
        hideFilter={hideFilter}
        toggleFilterVisibility={toggleFilterVisibility}
      />
      <Products hideFilter={hideFilter} />
      <img src={footer} alt="" className="img" />
    </>
  );
}

export default App;
