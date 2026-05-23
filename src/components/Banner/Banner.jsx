import classes from "./banner.module.scss";

export default function Banner({ img, title = null, shadow = false }) {
  return (
    <div className={`${classes.bannerWrapper} ${shadow && classes.shadow}`}>
      <img src={img} alt="image from nature" />
      {title && <h1> {title} </h1>}
    </div>
  );
}
