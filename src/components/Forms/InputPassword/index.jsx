import React from "react";
import "./styles.css";

const visibilityOffOn = () => {
  const input = document.querySelector("#input-password");
  const iconEyeOff = document.querySelector("#icon-eye-off");
  
  if (input.type === "password") {
    input.type = "text";
    iconEyeOff.innerHTML = "visibility";
  } else {
    input.type = "password";
    iconEyeOff.innerHTML = "visibility_off";
  }
  
};
const InputPassword = (props) => {
  return (
    <div className="dv-inputPassword">
      {!props.error && (
        <input
          type="password"
          name={props.name}
          className="inputPassword"
          id="input-password"
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.change(e.target.value)}
        />
      )}
      {props.error && (
        <input
          type="password"
          name={props.name}
          className="inputPassword inputError"
          id="input-password"
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.change(e.target.value)}
        />
      )}
      <button>
        <div
          className="material-icons icon-eye"
          onClick={visibilityOffOn}
          id="icon-eye-off"
        >
          visibility_off
        </div>
      </button>
    </div>
  );
};

export default InputPassword;
