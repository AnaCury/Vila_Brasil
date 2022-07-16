import React from "react";
import MenuVilaBrasil from "../../components/Menu/MenuVilaBrasil";
import "./styles.css";
import { isAuthenticated } from "../../services/AuthService";
import { Navigate } from "react-router-dom";

const Financeiro = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/" />;
  }
  return (
    <div className="page">
      <MenuVilaBrasil aux={3} />
      <div className="content">
        <h1 className="page-title">Financeiro</h1>
      </div>
    </div>
  );
};
export default Financeiro;
