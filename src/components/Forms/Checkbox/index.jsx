import React from "react";
import "./styles.css";

const Checkbox = (props) => {
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" name={props.name} />
        {props.label}
      </label>
    </div>
  );
};
export default Checkbox;
