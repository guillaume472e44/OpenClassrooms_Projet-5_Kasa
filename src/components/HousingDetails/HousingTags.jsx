import classes from "./housingTags.module.scss";

/**
 * mots-clé associés aux logements
 *
 * @param {string[]} tags
 * 
 */

export default function HousingTags({ tags }) {
  return (
    <div className={classes.tags}>
      {tags.map((tag, index) => (
        <span key={`tag-${index}`} className={classes.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
