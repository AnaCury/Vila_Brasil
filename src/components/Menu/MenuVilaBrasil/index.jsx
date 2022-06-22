import React from "react";
import "./styles.css";

const MenuVilaBrasil = () => {
  const handleMenu = (aux) => {
    const parteSuperior = document.querySelector(".parte-superior");
    const registrarAula = document.querySelector("#registrar-aula");
    const estudantes = document.querySelector("#estudantes");
    const financeiro = document.querySelector("#financeiro");
    const parteInferior = document.querySelector(".parte-inferior");

    if (aux === 1) {
      parteSuperior.classList = "parte-superior pre-menu-item";
      registrarAula.classList = "menu-item menu-item-selected";
      estudantes.classList = "menu-item pos-menu-item";
      financeiro.classList = "menu-item";
      parteInferior.classList = "parte-inferior";
    }else if (aux === 2) {
      parteSuperior.classList = "parte-superior";
      registrarAula.classList = "menu-item pre-menu-item";
      estudantes.classList = "menu-item menu-item-selected";
      financeiro.classList = "menu-item pos-menu-item";
      parteInferior.classList = "parte-inferior";
    }else if (aux === 3) {
      parteSuperior.classList = "parte-superior";
      registrarAula.classList = "menu-item";
      estudantes.classList = "menu-item pre-menu-item";
      financeiro.classList = "menu-item menu-item-selected";
      parteInferior.classList = "parte-inferior pos-menu-item";
    }
  }

  return (
    <div className="menuVilaBrasil">
      <div className="pai-parte-superior">  
        <div className="parte-superior" id="parte-superior">
          <div className="foto-perfil"></div>
          <h3 className="nome-pessoa">Nome da pessoa</h3>
          <h4 className="email">teste@testemail.com.br</h4>
          <div className="contador">
            <h4>
              Contador <span class="material-icons info-icon">info_outline</span>
            </h4>
            <div className="quadro-contador">
              <div className="registradas">
                <h5 className="qtd">54h 15min</h5>
                <p className="qtd">Registradas</p>
              </div>
              <div className="confirmadas">
                <h5 className="qtd">54h 15min</h5>
                <p className="qtd">Confirmadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lista-menu" id="lista-menu">
        <div className="menu-item" id="registrar-aula" onClick={() => handleMenu(1)}>
          <h3>Registrar aula</h3>
        </div>
        <div className="menu-item" id="estudantes" onClick={() => handleMenu(2)}>
          <h3>Estudantes</h3>
        </div>
        <div className="menu-item" id="financeiro" onClick={() => handleMenu(3)}>
          <h3>Financeiro</h3>
        </div>
      </div>
      <div className="pai-parte-inferior">
        <div className="parte-inferior">
          <div className="imagem-inferior">
            <img src="./assets/vilaBrasil.png" alt=""/>
            <button className="btn-sair">Sair</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuVilaBrasil;
