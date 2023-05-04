import React from "react";
import styles from "./CardHeader.module.scss";
import arrowIcon from "../assets/arrow.svg";

const CardHeader = ({ title, btnText }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <h3 className={styles.headerTitle}>{title}</h3>
      </div>
      <a href="/" className={styles.btnWithIcon}>
        <img src={arrowIcon} alt="back button" className={styles.icon} />
        {btnText}
      </a>
    </div>
  );
};

export default CardHeader;
