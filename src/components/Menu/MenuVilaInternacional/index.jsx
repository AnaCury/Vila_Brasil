import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const MenuVilaInternacional = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [registradas, setRegistradas] = useState("");
  const [confirmadas, setConfirmadas] = useState("");

  const handleMenu = (aux) => {
    const parteSuperior = document.querySelector(".parte-superior-int");
    const registrarAula = document.querySelector("#registrar-aula");
    const estudantes = document.querySelector("#estudantes");
    const parteInferior = document.querySelector(".parte-inferior-int");

    if (aux === 1) {
      parteSuperior.classList = "parte-superior-int pre-menu-item";
      registrarAula.classList = "menu-item-int menu-item-selected-int";
      estudantes.classList = "menu-item-int pos-menu-item";
      parteInferior.classList = "parte-inferior-int";
    } else if (aux === 2) {
      parteSuperior.classList = "parte-superior-int";
      registrarAula.classList = "menu-item-int pre-menu-item";
      estudantes.classList = "menu-item-int menu-item-selected-int";
      parteInferior.classList = "parte-inferior-int pos-menu-item";
    }
  };

  const navigate = useNavigate();

  const recuperaInformacoes = () => {
    const info = JSON.parse(localStorage.getItem("professor")).conteudo;
    setNome(info.nomeProf);
    setEmail(info.email);
    setRegistradas(info.registradas);
    setConfirmadas(info.confirmadas);
  };

  const handleSair = () => {
    localStorage.removeItem("professor");
    localStorage.removeItem("token_vila");
    localStorage.removeItem("professorId");
    navigate("/");
  }

  useEffect(() => {
    handleMenu(props.aux);
    recuperaInformacoes();
  });

  return (
    <div className="menuVilaInternacional">
      <div className="pai-parte-superior-int">
        <div className="parte-superior-int" id="parte-superior">
          <div className="foto-perfil-int"></div>
          <h3 className="nome-pessoa-int">{nome}</h3>
          <h4 className="email-int">{email}</h4>
          <div className="contador-int">
            <h4>
              Contador{" "}
              <span className="material-icons info-icon">info_outline</span>
            </h4>
            <div className="quadro-contador-int">
              <div className="registradas">
                <h5 className="qtd">{registradas}</h5>
                <p className="qtd">Registradas</p>
              </div>
              <div className="confirmadas">
                <h5 className="qtd">{confirmadas}</h5>
                <p className="qtd">Confirmadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lista-menu" id="lista-menu">
        <div
          className="menu-item-int"
          id="registrar-aula"
          onClick={() => handleMenu(1)}
        >
          <Link
            className="link-menu-int"
            to="/registrar-aula"
            onClick={() => handleMenu(1)}
          >
            <h3>Registrar aula</h3>
          </Link>
        </div>
        <div
          className="menu-item"
          id="estudantes"
          onClick={() => handleMenu(2)}
        >
          <Link
            className="link-menu-int"
            to="/estudantes"
            onClick={() => handleMenu(2)}
          >
            <h3>Estudantes</h3>
          </Link>
        </div>
      </div>
      <div className="pai-parte-inferior-int">
        <div className="parte-inferior-int">
          <div className="imagem-inferior-int">
            <img src="./assets/vilaInternacionalBranca.png" alt="" />
            <button className="btn-sair-int" onClick={handleSair}>Sair</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuVilaInternacional;
