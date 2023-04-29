import InfoItem from "../components/InfoItem";
import styles from "./info.module.css";
import { useLocation } from "react-router-dom";

const Info = () => {
  const location = useLocation();
  const movie = location.state;

  return (
    <>
      <div
        className={styles.cover}
        style={{
          backgroundImage: `url(${movie.image})`
        }}
      ></div>

      <InfoItem movie={movie} />
    </>
  );
};

export default Info;
