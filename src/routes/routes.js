import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import RecuperarSenha from "../pages/RecuperarSenha";
import RegistrarAula from "../pages/RegistrarAula";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/recuperar-senha" element={<RecuperarSenha />} />
      <Route exact path="/registrar-aula" element={<RegistrarAula />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
