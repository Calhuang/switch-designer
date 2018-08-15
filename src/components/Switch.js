import React from "react";
import RightController from "../assets/rightcontroller.png";
import LeftController from "../assets/leftcontroller.png";

import Base from "../assets/base.png";

import styles from "./Switch.css";

const Switch = props => {
  const style = {
    filter:
      "hue-rotate(" +
      props.hue +
      "deg) saturate(" +
      props.saturation +
      "%) brightness(" +
      props.brightness +
      "%)"
  };
  const style2 = {
    filter:
      "hue-rotate(" +
      props.hue2 +
      "deg) saturate(" +
      props.saturation2 +
      "%) brightness(" +
      props.brightness2 +
      "%)"
  };
  return (
    <div>
      <img
        src={LeftController}
        alt="leftcontroller"
        className={styles.LeftController}
        style={style}
      />
      <img src={Base} alt="base" className={styles.Base} />
      <img
        src={RightController}
        alt="rightcontroller"
        className={styles.RightController}
        style={style2}
      />
    </div>
  );
};

export default Switch;
