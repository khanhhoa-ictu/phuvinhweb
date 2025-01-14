import React from "react";
import styles from "./styles.module.scss";

function DashCount({ item }) {
  return (
    <div
      className={styles.dashItem}
      style={{ backgroundColor: item.backgroundColor }}
    >
      <div className={styles.count}>
        <h4>{item.count}</h4>
        <h5>{item.title}</h5>
      </div>
      <div className={styles.dashImg}>{item.icon}</div>
    </div>
  );
}

export default DashCount;
