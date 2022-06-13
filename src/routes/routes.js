import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import RecuperarSenha from "../pages/RecuperarSenha";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/recuperar-senha" element={<RecuperarSenha />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
