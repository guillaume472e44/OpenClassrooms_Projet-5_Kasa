import { NavLink } from "react-router";
import redLogo from "../../assets/images/LOGO-red.svg";
import classes from "./header.module.scss";

export default function Header() {
  return (
    <header className={`${classes.header} container`}>
      <img
        src={redLogo}
        alt="logo rouge de Kasa"
        width="210"
        height="68"
        className={classes.header__logo}
      />
      <nav className={classes.header__navigation}>
        <NavLink
          to="/"
          end=""
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
