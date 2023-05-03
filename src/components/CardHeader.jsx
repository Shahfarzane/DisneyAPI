import React from "react";
import styles from "./CardHeader.module.css";
import arrowIcon from "../assets/arrow.svg";

const CardHeader = ({ title, btnText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <a href="/" className={styles.buttonSmall}>
          <img src={arrowIcon} alt="back button" className={styles.icon} />
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default CardHeader;
