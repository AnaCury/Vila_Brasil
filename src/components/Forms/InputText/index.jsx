import React from "react";
import "./styles.css";

const InputText = (props) => {
  
  const handleReset = () => {
    const input = document.querySelector("#input-text");
    input.value = "";
  };
  
  return (
    <div className="dv-inputText">
      <input
        type="text"
        name={props.name}
        className="inputText"
        placeholder={props.placeholder}
        id="input-text"
      />
      <button type="reset" onClick={handleReset}>&times;</button>
    </div>
  );
};

export default InputText;
