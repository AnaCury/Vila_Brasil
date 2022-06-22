import React from "react";
import MenuVilaBrasil from "../../components/Menu/MenuVilaBrasil";
import "./styles.css";

const Estudantes = () => {
  return (
    <div className="page">
      <MenuVilaBrasil aux={2}/>
      <div className="content">
        <h1>Estudantes</h1>
      </div>
    </div>
  )
};
export default Estudantes;
