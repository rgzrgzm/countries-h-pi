import { Link } from "react-router-dom";
import styles from "../../pages/home/home.module.css";
import InputSearch from "../inputSearch/InputSearch";

const HomeTap = ({ setIsSearched }) => {
  return (
    <div className={styles.home__tap}>
      <InputSearch setIsSearched={setIsSearched} />

      <Link className={styles.home__link} to="/activity">
        Activity
      </Link>
    </div>
  );
};

export default HomeTap;
