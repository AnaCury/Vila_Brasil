import React from "react";
import "./styles.css";
const ButtonLogin = (props) => {
  return (
    <div className="dv-btn-login">
      <button className="btn-login" onClick={props.onClick} type="submit">Entrar</button>
    </div>
  );
};

export default ButtonLogin;
