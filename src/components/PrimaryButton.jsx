import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button type="button" className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
