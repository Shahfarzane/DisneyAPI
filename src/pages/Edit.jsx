import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateMovie } from "../store";
import Form from "../components/Form";
import CardHeader from "../components/CardHeader";

const EditPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id.toString() === movieId)
  );

  const handleSubmit = (e, updatedMovie) => {
    e.preventDefault();
    dispatch(updateMovie(updatedMovie));
    navigate(`/details/${updatedMovie.id}`);
  };

  return (
    <div>
      <CardHeader title="Edit Movie" btnText={"Back to Details"} />
      <Form movie={movie} onSubmit={handleSubmit} btnTextValue={"Update"} />
    </div>
  );
};

export default EditPage;
