import React from "react";
import styles from "./CardHeader.module.scss";
import arrowIcon from "../assets/arrow.svg";
import { Link } from "react-router-dom";

const CardHeader = ({ title, btnText, linkToPage }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <h3 className={styles.headerTitle}>{title}</h3>
      </div>
      <Link to={linkToPage} className={styles.btnWithIcon}>
        <img src={arrowIcon} alt="back button" className={styles.icon} />
        {btnText}
      </Link>
    </div>
  );
};

export default CardHeader;
