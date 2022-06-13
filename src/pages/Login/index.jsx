import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Planta from "../../components/Footer/Planta";
import Vilas from "../../components/Footer/Vilas";
import ButtonLogin from "../../components/Forms/ButtonLogin";
import Checkbox from "../../components/Forms/Checkbox";
import InputPassword from "../../components/Forms/InputPassword";
import InputText from "../../components/Forms/InputText";
import { LoginSvc } from "../../services/AuthService";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    LoginSvc(email, password);
  };

  return (
    <div className="principal">
      <img src="assets/detalhe1.png" alt="" className="detalhe detalhe1" />
      <img src="assets/detalhe2.png" alt="" className="detalhe detalhe2" />
      <img src="assets/detalhe3.png" alt="" className="detalhe detalhe3" />
      <div className="container">
        <div className="form">
          <h1 className="form-title" style={{marginLeft: "-50px"}}>Boas-vindas <br />ao sistema das Vilas</h1>
          <InputText name="email" placeholder="Digite seu e-mail" value={email} change={setEmail} reset/>
          <InputPassword name="senha" placeholder="Digite sua senha" value={password} change={setPassword} />
          <div className="rodape-form">
            <Checkbox label="Lembrar-me" name="lembrar" />
            <Link to="/recuperar-senha">Esqueci minha senha</Link>
          </div>
          <ButtonLogin onClick={handleLogin} />
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
