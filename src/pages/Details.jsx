import MovieEntity from "../components/MovieEntity";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {
  const { movieId } = useParams();
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id.toString() === movieId)
  );

  return (
    <>
      <MovieEntity movie={movie} />
    </>
  );
};

export default Details;
