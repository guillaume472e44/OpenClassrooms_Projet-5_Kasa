import { use } from "react";
import { Navigate } from "react-router";
import Slideshow from "../Slideshow/Slideshow.jsx";
import HousingTitle from "./HousingTitle.jsx";
import HousingTags from "./HousingTags.jsx";
import HousingHost from "./HousingHost.jsx";
import HousingRating from "./HousingRating.jsx";
import Accordion from "../Accordion/Accordion.jsx";
import classes from "./index.module.scss";

export default function HousingDetails({ linkState, promise }) {
  const dataSource = linkState || use(promise);

  return dataSource.state === "rejected" ? (
    <Navigate to={"/housing"} />
  ) : (
    <>
      <Slideshow pictures={dataSource.data.pictures} />

      <div className={classes.container__top}>
        <div>
          <HousingTitle
            title={dataSource.data.title}
            location={dataSource.data.location}
          />
          <HousingTags tags={dataSource.data.tags} />
        </div>
        <div className={classes.hostAndRating}>
          <HousingRating rating={dataSource.data.rating} />
          <HousingHost
            name={dataSource.data.host.name}
            picture={dataSource.data.host.picture}
          />
        </div>
      </div>

      <div className={classes.accordions}>
        <Accordion title="Description" content={dataSource.data.description} />
        <Accordion title="Équipement" content={dataSource.data.equipments} />
      </div>
    </>
  );
}
