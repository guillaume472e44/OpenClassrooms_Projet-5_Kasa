import { useState } from "react";
import classes from "./accordion.module.scss";
import chevron from "/src/assets/images/chevron.svg";

/**
 * Composant Accordéon, fermé par défaut.
 *
 * @param {string} title
 * @param {(string|string[])} content - une description, ou un tableau d'équipements
 *
 */

export default function Accordion({ title, content }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={classes.accordion}>
      <h2
        className={classes.accordion__title}
        onClick={() => setToggle(!toggle)}
      >
        <span>{title}</span>
        <img
          src={chevron}
          alt="icône de chevron"
          width={32}
          height={32}
          className={toggle ? classes.isOpen : ""}
        />
      </h2>
      <div
        className={`${classes.accordion__content} ${toggle ? classes.isOpen : ""}`}
      >
        <div>
          {Array.isArray(content) ? (
            content.map((p, index) => <p key={`paragraph-${index}`}>{p}</p>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}
