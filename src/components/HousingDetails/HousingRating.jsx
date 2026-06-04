import classes from "./housingRating.module.scss";

/**
 * Notation du logement, crée et affiche 5 étoiles.
 *
 * @param {string} rating - parsée en nombre, et permet d'afficher l'étoile de la couleur appropriée.
 *
 */

export default function HousingRating({ rating }) {
  return (
    <div className={classes.ratingWrapper}>
      {Array.from({ length: 5 }, (v, i) => (
        <span
          key={`star-${i}`}
          className={i < parseInt(rating) ? classes.red : classes.gray}
        ></span>
      ))}
    </div>
  );
}
