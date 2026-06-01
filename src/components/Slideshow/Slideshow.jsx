import { useState } from "react";
import classes from "./slideshow.module.scss";
import chevron from "../../assets/images/chevron.svg";

export default function Slideshow({ pictures }) {
  const [imageIndex, setImageIndex] = useState(0);

  function moveTo(direction) {
    if (direction === "prev") {
      setImageIndex(imageIndex - 1 < 0 ? pictures.length - 1 : imageIndex - 1);
    } else if (direction === "next") {
      setImageIndex(imageIndex + 1 > pictures.length - 1 ? 0 : imageIndex + 1);
    }
  }

  function getAltText(url) {
    return url.split("/")[url.split("/").length - 1].split(".")[0];
  }

  return (
    <div className={classes.slideshowWrapper}>
      <ul
        className={classes.slideshow}
        style={{ transform: `translate(${imageIndex * -100}%)` }}
      >
        {pictures.map((img, index) => (
          <li key={index}>
            <img src={img} alt={getAltText(img)} width={1240} height={415} />
          </li>
        ))}
      </ul>
      {pictures.length > 1 && (
        <div className={classes.controls}>
          <button onClick={() => moveTo("prev")} className={classes.prevBtn}>
            <img
              src={chevron}
              alt="chevron vers la gauche"
              width={96}
              height={96}
            />
            <span className="sr-only">passer l'image précédente</span>
          </button>
          <p className={classes.infoDisplay}>
            {imageIndex + 1}/{pictures.length}
          </p>
          <button onClick={() => moveTo("next")} className={classes.nextBtn}>
            <img
              src={chevron}
              alt="chevron vers la droite"
              width={96}
              height={96}
            />
            <span className="sr-only">passer l'image suivante</span>
          </button>
        </div>
      )}
    </div>
  );
}
