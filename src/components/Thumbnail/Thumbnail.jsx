import classes from "./thumbnail.module.scss";

export default function Thumbnail({ house }) {
  return (
    <article className={classes.thumbnail}>
      <img src={house.cover} alt={house.title} />
      <h2>{house.title}</h2>
    </article>
  );
}
