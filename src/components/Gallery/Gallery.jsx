import { use } from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import classes from "./gallery.module.scss";

/**
 * Crée la liste de vignettes de la galerie de la page d'accueil.
 * Affiche un message d'erreur si problème lors de la récupération des données.
 *
 * @param {Promise<{Object}>} promise - toutes les données des logements provenant de l'API.
 *
 */

export default function Gallery({ promise }) {
  const response = use(promise);

  return (
    <ul className={classes.gallery}>
      {response.state === "fulfilled" ? (
        response.data.map((house) => (
          <li key={house.id}>
            <Thumbnail house={house} />
          </li>
        ))
      ) : (
        <li>⚠️ Oups... Quelque chose s'est mal passé</li>
      )}
    </ul>
  );
}
