import InfoItem from "../components/InfoItem";
import styles from "./info.module.css";
import { useParams } from "react-router-dom";


import { useSelector } from "react-redux";

const Info = () => {

  const { movieId } = useParams();
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id.toString() === movieId)
  );


  return (
    <>
      <InfoItem movie={movie} />
    </>
  );
};

export default Info;
