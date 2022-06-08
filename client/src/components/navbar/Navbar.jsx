import { Link } from "react-router-dom";
import InputSearch from "../inputSearch/InputSearch";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Countries</h1>
      <div className={styles.navbar__main}>
      </div>
    </div>
  );
};

export default Navbar;
