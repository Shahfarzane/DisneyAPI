import Movies from "../components/Movies";
import WatchList from "../components/WatchList";
import { useSelector } from "react-redux";
import styles from "./Mainpage.module.css";

const MainPage = () => {
  const watchListItems = useSelector((state) => state.watchList.watchList);

  return (
    <div className={styles.container}>
      {watchListItems.length > 0 && <WatchList />}
      <Movies />
    </div>
  );
};

export default MainPage;
