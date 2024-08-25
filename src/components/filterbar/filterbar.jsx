import React from "react";
import styles from "./filterbar.module.css";

export default function Filterbar() {
  return (
    <div className={styles.navbarcss}>
      <div className={styles.leftitem}>
        <h4>3425 ITEMS</h4>
        <button>HIDE FILTER</button>
      </div>
      <select name="" id="" className={styles.selectbtn}>
        <option value="RECOMMENDED">RECOMMENDED</option>
      </select>
    </div>
  );
}
