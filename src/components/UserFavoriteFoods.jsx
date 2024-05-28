import { createElement } from "react";
import styles from "./user.module.scss";

export function UserFavoriteFoods() {
  return createElement(
    "section",
    null,

    <span className={styles.foodTitle}>Favorite Food:</span>,
    <br />,
    <ul>
      <li>Sinigang</li>
      <li>Adobo</li>
      <li>Giniling</li>
      <li>Pinakbet</li>
      <li>Sweet and Sour Tilapya</li>
    </ul>
  );
}
