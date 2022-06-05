import React from "react";
import Planta from "../../components/Footer/Planta";
import Vilas from "../../components/Footer/Vilas";
import ButtonLogin from "../../components/Forms/ButtonLogin";
import Checkbox from "../../components/Forms/Checkbox";
import InputPassword from "../../components/Forms/InputPassword";
import InputText from "../../components/Forms/InputText";
import "./styles.css";

const Login = () => {
  return (
    <div className="principal">
      <img src="assets/detalhe1.png" alt="" className="detalhe detalhe1" />
      <img src="assets/detalhe2.png" alt="" className="detalhe detalhe2" />
      <img src="assets/detalhe3.png" alt="" className="detalhe detalhe3" />
      <div className="container">
        <div className="form">
          <h1 className="form-title">Boas-vindas <br />ao sistema das Vilas</h1>
          <InputText name="email" placeholder="Digite seu e-mail" />
          <InputPassword name="senha" placeholder="Digite sua senha" />
          <div className="rodape-form">
            <Checkbox label="Lembrar-me" name="lembrar" />
            <a href="#">Esqueci minha senha</a>
          </div>
          <ButtonLogin />
        </div>
      </div>
      <div className="footer">
          <div className="esq" style={{ width: '30%' }}></div>
          <div className="mid" style={{ width: '40%' }}><Vilas /></div>
          <div className="dir"><Planta /></div>
      </div>
    </div>
  );
};

export default Login;
