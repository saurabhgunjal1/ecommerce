import React, { useEffect, useState } from "react";
import styles from "./products.module.css";
export default function Products({ hideFilter }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setData(json);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.filterdiv} style={{ display: hideFilter }}>
        <select>
          <option value="IDEAL FOR">IDEAL FOR</option>
        </select>
        <select>
          <option value="IDEAL FOR">IDEAL FOR</option>
        </select>
        <select>
          <option value="IDEAL FOR">IDEAL FOR</option>
        </select>
        <select>
          <option value="IDEAL FOR">IDEAL FOR</option>
        </select>
        <select>
          <option value="IDEAL FOR">IDEAL FOR</option>
        </select>
        <select>
          <option value="IDEAL FOR">IDEAL FOR</option>
        </select>
        <select>
          <option value="IDEAL FOR">IDEAL FOR</option>
        </select>
        <select>
          <option value="IDEAL FOR">IDEAL FOR</option>
        </select>
      </div>
      <div className={styles.productGrid}>
        {data.length > 0 ? (
          data.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productimg}
              />
              <h6>{product.title}</h6>
              <p>Sign in or Create an account to see pricing</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
