import Movies from "../components/Movies";
import WatchList from "../components/WatchList";
import { useSelector } from "react-redux";

const MainPage = () => {
  const watchListItems = useSelector((state) => state.watchList.watchList);

  return (
    <div className="container-space">
      {watchListItems.length > 0 && <WatchList />}
      <Movies />
    </div>
  );
};

export default MainPage;
