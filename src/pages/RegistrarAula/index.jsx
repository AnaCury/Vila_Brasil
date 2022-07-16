import React from "react";
import "./styles.css";
import { isAuthenticated } from "../../services/AuthService";
import { Navigate } from "react-router-dom";
import MenuVilaBrasil from "../../components/Menu/MenuVilaBrasil";
import MenuVilaInternacional from "../../components/Menu/MenuVilaInternacional";

const RegistrarAula = () => {
    if(!isAuthenticated()){
        return <Navigate to="/" />
    }
    return (
        <div className="page">
            <MenuVilaInternacional aux={1} />
            <div className="content">
                <h1 className="page-title">Registrar Aula</h1>
            </div>
        </div>
    );
}
export default RegistrarAula;