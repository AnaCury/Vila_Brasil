import React from "react";
import MenuVilaBrasil from "../../components/Menu/MenuVilaBrasil";
import MenuVilaInternacional from "../../components/Menu/MenuVilaInternacional";
import "./styles.css";
import { isAuthenticated } from "../../services/AuthService";
import { Navigate } from "react-router-dom";

const Estudantes = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/" />;
  }
  return (
    <div className="page">
      <MenuVilaInternacional aux={2}/>
      <div className="content">
        <h1 className="page-title">Estudantes</h1>
      </div>
    </div>
  )
};
export default Estudantes;
