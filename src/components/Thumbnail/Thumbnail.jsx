import classes from "./thumbnail.module.scss";
import { Link } from "react-router";

/**
 * Vignettes cliquables de la pages d'accueil.
 *
 * Le composant n'utilise que l'image et le titre.
 * Mais il transmet toutes les données du logement à la page housing
 * grâce au state du composant Link de React Router.
 *
 * @param {Object} house
 *
 */

export default function Thumbnail({ house }) {
  return (
    <Link to={`/housing/${house.id}`} state={house}>
      <article className={classes.thumbnail}>
        <img src={house.cover} alt={house.title} />
        <h2>{house.title}</h2>
      </article>
    </Link>
  );
}
