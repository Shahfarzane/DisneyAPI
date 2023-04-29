import Form from "../components/Form";

import styles from "./Add.module.css";

const Add = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Add New Movie</h3>

      <Form />
    </div>
  );
};

export default Add;
