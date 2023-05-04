import React from "react";
import styles from "./Page404.module.scss";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h2 className={styles.errorText}>
        OOOOOOPS!{" "}
        <span className={styles.errorTextDetails}>
          there is nothing here ...
        </span>
      </h2>
      <Link to="/">
        <button className={styles.btnError}>GO HOME!!!</button>
      </Link>
    </div>
  );
};

export default Page404;
