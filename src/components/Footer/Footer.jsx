import whiteLogo from "../../assets/images/LOGO-white.svg";
import classes from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <img
        src={whiteLogo}
        alt="Logo blanc de Kasa"
        width="122"
        height="40"
        className={classes.footer__logo}
      />
      <p className={classes.footer__text}>© 2026 Kasa. All rights reserved</p>
    </footer>
  );
}
