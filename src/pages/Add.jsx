import { createMovie } from "../store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Form from "../components/Form";
import CardHeader from "../components/CardHeader";

const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e, newMovie) => {
    e.preventDefault();
    dispatch(createMovie(newMovie));
    navigate("/");
  };
  return (
    <>
      <CardHeader title="Add Movie" btnText={" Dashboard"} />
      <div className="form-container">
        <Form onSubmit={handleSubmit} btnTextValue={"Create"} />
      </div>
    </>
  );
};

export default Add;
