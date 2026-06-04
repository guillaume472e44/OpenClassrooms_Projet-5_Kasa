import classes from "./housingHost.module.scss";

/**
 * Propriétaire du logement
 *
 * @param {string} name
 * @param {string} picture - url de l'image du proprio
 *
 */

export default function HousingHost({ name, picture }) {
  return (
    <div className={classes.host}>
      <h3 className={classes.host__name}>
        <span>{name.split(" ")[0]}</span>
        <span>{name.split(" ")[1]}</span>
      </h3>
      <img src={picture} alt={name} className={classes.host__picture} />
    </div>
  );
}
