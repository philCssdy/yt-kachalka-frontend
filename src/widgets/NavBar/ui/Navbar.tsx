import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { Logo } from "../../Logo";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={"/"} className={styles.logo}>
        <Logo size={60} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={"howtouse"}>Как использовть</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
