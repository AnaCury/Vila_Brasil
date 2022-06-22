import React from "react";
import "./styles.css";
import { isAuthenticated } from "../../services/AuthService";
import { Navigate } from "react-router-dom";
import MenuVilaBrasil from "../../components/Menu/MenuVilaBrasil";

const RegistrarAula = () => {
    if(!isAuthenticated()){
        return <Navigate to="/" />
    }
    return (
        <div className="registrar-aula">
            <MenuVilaBrasil aux={1} />
        </div>
    );
}
export default RegistrarAula;