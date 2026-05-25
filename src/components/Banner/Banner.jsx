import classes from "./banner.module.scss";

export default function Banner({ img, title = null, className }) {
  return (
    <div className={classes[className]}>
      <img src={img} alt="image de nature" width="1240" height="223" />
      {title && <h1> {title} </h1>}
    </div>
  );
}
