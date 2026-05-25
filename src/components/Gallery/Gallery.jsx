import { use } from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import classes from "./gallery.module.scss";

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
        <li>⚠️ Oups... Something went wrong</li>
      )}
    </ul>
  );
}
