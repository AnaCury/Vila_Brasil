import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Estudantes from "../pages/Estudantes";
import Financeiro from "../pages/Financeiro";
import Login from "../pages/Login";
import RecuperarSenha from "../pages/RecuperarSenha";
import RegistrarAula from "../pages/RegistrarAula";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/recuperar-senha" element={<RecuperarSenha />} />
      <Route exact path="/registrar-aula" element={<RegistrarAula />} />
      <Route exact path="/estudantes" element={<Estudantes />} />
      <Route exact path="/financeiro" element={<Financeiro />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
