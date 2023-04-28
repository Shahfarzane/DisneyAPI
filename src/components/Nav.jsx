import styles from "./Nav.module.css";
import loginIcon from "../assets/login.png";

const Nav = () => {
  return (
    <section className={styles.navContainer}>
      <article className={styles.navContent}>
        <h3>Disney Diary</h3>

        <div className={styles.avatarContainer}></div>
      </article>
    </section>
  );
};

export default Nav;
