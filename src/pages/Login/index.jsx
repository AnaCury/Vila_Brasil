import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Planta from "../../components/Footer/Planta";
import Vilas from "../../components/Footer/Vilas";
import ButtonLogin from "../../components/Forms/ButtonLogin";
import Checkbox from "../../components/Forms/Checkbox";
import InputPassword from "../../components/Forms/InputPassword";
import InputText from "../../components/Forms/InputText";
import { isAuthenticated, LoginSvc } from "../../services/AuthService";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    var login = await LoginSvc(email, password);
    if(login){
      navigate("/registrar-aula");
    }else {
      setError(true);
    }
  };

  useEffect(() => {
    setError(false);
  }, [email, password]);

  return (
    <div className="principal">
      <img src="assets/detalhe1.png" alt="" className="detalhe detalhe1" />
      <img src="assets/detalhe2.png" alt="" className="detalhe detalhe2" />
      <img src="assets/detalhe3.png" alt="" className="detalhe detalhe3" />
      <div className="container">
        <div className="form">
          <h1 className="form-title" style={{marginLeft: "-50px"}}>Boas-vindas <br />ao sistema das Vilas</h1>
          <InputText name="email" placeholder="Digite seu e-mail" value={email} change={setEmail} reset error={error} />
          <InputPassword name="senha" placeholder="Digite sua senha" value={password} change={setPassword} error={error} />
          {
            error && <h5 className="error-description">Email ou senha incorreta, tente novamente.</h5>
          }
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
