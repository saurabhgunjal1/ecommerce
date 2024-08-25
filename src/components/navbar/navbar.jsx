import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import styles from "./navbar.module.css";
import logo from "../../assets/Logo.png";
export default function () {
  return (
    <div className={styles.maindiv}>
      <div className={styles.container}>
        <div>
          <img src={logo} alt="img" className={styles.containerimg} />
        </div>
        <div>
          <h1>LOGO</h1>
        </div>
        <div className={styles.navbaricondiv}>
          <CiSearch />
          <CiHeart />
          <CiUser />
          <select name="" id="">
            <option value="eng">eng</option>
          </select>
        </div>
      </div>
      <div className={styles.secondnavbar}>
        <h5>SHOP</h5>
        <h5>SKILLS</h5>
        <h5>STORIES</h5>
        <h5>ABOUT</h5>
        <h5>CONTACT US</h5>
      </div>
    </div>
  );
}
