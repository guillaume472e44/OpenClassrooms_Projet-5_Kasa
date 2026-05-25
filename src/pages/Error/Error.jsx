import { Link } from "react-router";
import classes from "./error.module.scss";

export default function Error() {
  return (
    <section className={classes.error}>
      <h1>404</h1>
      <p>
        <span>Oups! La page que</span> <span>vous demandez n'existe pas.</span>
      </p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  );
}
