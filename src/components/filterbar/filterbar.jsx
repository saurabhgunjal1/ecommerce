import React from "react";
import styles from "./filterbar.module.css";

export default function Filterbar({ hideFilter, toggleFilterVisibility }) {
  return (
    <div className={styles.navbarcss}>
      <div className={styles.leftitem}>
        <h4>3425 ITEMS</h4>
        <button onClick={toggleFilterVisibility}>HIDE FILTER</button>
      </div>
      <select name="" id="" className={styles.selectbtn}>
        <option value="recommended">RECOMMENDED</option>

        <option value="newestFirst">NEWEST FIRST</option>

        <option value="popular">POPULAR</option>

        <option value="highToLow">PRICE: HIGH TO LOW</option>

        <option value="lowToHigh">PRICE: LOW TO HIGH</option>
      </select>
    </div>
  );
}
