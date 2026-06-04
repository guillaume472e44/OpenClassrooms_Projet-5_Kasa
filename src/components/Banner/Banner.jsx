import classes from "./banner.module.scss";

/**
 * Bannière affichée sur les pages Home et About
 *
 * @param {string} img - url locale de l'image, (/src/assets/images/).
 * @param {string} [title] - (pas de titre sur la page About).
 * @param {string} className - classe scss pour la page Home ou About.
 *
 */

export default function Banner({ img, title, className }) {
  return (
    <div className={classes[className]}>
      <img src={img} alt="image de nature" width="1240" height="223" />
      {title && <h1> {title} </h1>}
    </div>
  );
}
