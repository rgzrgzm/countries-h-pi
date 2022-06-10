import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h1>Countries</h1>
      </Link>
      <div className={styles.navbar__main}></div>
    </div>
  );
};

export default Navbar;
