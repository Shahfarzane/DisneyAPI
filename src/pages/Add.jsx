import styles from "./Add.module.css";
import arrowIcon from "../assets/arrow.svg";
import Form from "../components/Form";
import { createMovie } from "../store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CardHeader from "../components/CardHeader";

const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e, newMovie) => {
    e.preventDefault();
    dispatch(createMovie(newMovie));
    navigate("/main");
  };
  return (
    <>
      <CardHeader title="Add Movie" btnText={" Dashboard"} />
      <div className={styles.container}>
        <Form onSubmit={handleSubmit} btnTextValue={"Create"} />
      </div>
    </>
  );
};

export default Add;
