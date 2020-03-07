import React from "react";
import styles from "./BuildControl.module.css";

const BuildControl = props => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}> {props.label}</div>
      <button className={styles.More} onClick={props.more}>
        More
      </button>
      <button
        className={styles.Less}
        onClick={props.less}
        disabled={props.disabled}
      >
        Less
      </button>
    </div>
  );
};

export default BuildControl;
