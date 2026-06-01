import classes from "./housingRating.module.scss";

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
