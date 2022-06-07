import { Link } from "react-router-dom";
import Form from "../form/Form";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Countries</h1>
      <div className={styles.navbar__main}>
        <div>
          <Form />
        </div>
        <Link to="">Activity</Link>
      </div>
    </div>
  );
};

export default Navbar;
