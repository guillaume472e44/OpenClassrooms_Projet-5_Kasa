import classes from "./housingTitle.module.scss";

export default function HousingTitle({ title, location }) {
  return (
    <>
      <h1 className={classes.title}> {title} </h1>
      <h2 className={classes.subtitle}> {location} </h2>
    </>
  );
}
