import styles from "./Nav.module.scss";
import account from "../assets/account.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className={styles.navContainer}>
      <article className={styles.navContent}>
        <Link to="/">
          <h3>Disney +</h3>
        </Link>
        <Link to="/add">
          <h5>Add</h5>
        </Link>

        <Link to="/watchlist">
          <h5>Top List</h5>
        </Link>
        <Link to="/dashboard">
          <h5>Dashboard</h5>
        </Link>

        <Link to="/dashboard">
          <img src={account} alt="login" />
        </Link>
      </article>
    </section>
  );
};

export default Nav;
