import classes from "./thumbnail.module.scss";
import { Link } from "react-router";

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
