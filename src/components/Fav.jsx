import { useState } from "react";
import styles from "./Fav.module.css";
import fireFilled from "../assets/fire-filled.svg";
import fireOutline from "../assets/fire-outline.svg";

const Fav = () => {
  const [toggleState, setToggleState] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleFavoriteClick = (props) => {
    if (!visible) {
      props.addFavorite(props.movie.id);
    } else {
      props.removeFavorite(props.movie.id);
    }
    setVisible(!visible);
  };

  // const handleClick = () => {
  //   setVisible(!visible);
  //   setToggleState(!toggleState);
  // };

  // const handleFunctionOne = () => {
  //   console.log("Function One called!");
  // };

  // const handleFunctionTwo = () => {
  //   console.log("Function Two called!");
  // };
  return (
    <button onClick={handleFavoriteClick}>
      <img src={visible ? fireFilled : fireOutline} alt="fire" />
    </button>
  );
};

export default Fav;
