import styles from "./Nav.module.scss";
import loginIcon from "../assets/login.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className={styles.navContainer}>
      <article className={styles.navContent}>
        <Link to="/">
          <h4>Disney</h4>
        </Link>
        <Link to="/add">
          <h5>add</h5>
        </Link>

        <Link to="/watchlist">
          <h5>Watchlist</h5>
        </Link>
        <Link to="/dashboard">
          <h5>Dashboard</h5>
        </Link>
        <img src={loginIcon} alt="login" width="42px" />
      </article>
    </section>
  );
};

export default Nav;
