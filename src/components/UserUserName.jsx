import React from "react";
import styles from "./styles.module.css";

export function UserUserName(props) {
  return (
    <>
      <b className={styles.username}>Username: </b>
      <span>{props.username}</span>
    </>
  );
}
