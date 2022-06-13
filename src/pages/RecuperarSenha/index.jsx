import React from "react";
import "./styles.css";
import InputText from "../../components/Forms/InputText";
import { Link } from "react-router-dom";

const RecuperarSenha = () => {
  const [email, setEmail] = React.useState("");

  return (
    <div className="principal">
      <img src="assets/detalhe1.png" alt="" className="detalhe detalhe1" />
      <img src="assets/detalhe2.png" alt="" className="detalhe detalhe2" />
      <img src="assets/detalhe3.png" alt="" className="detalhe detalhe3" />
      <div className="recuperar-senha">
        <Link to="/" className="go-back">
            <div className="material-icons">arrow_back</div>
        </Link>
        <img
          src="./assets/recuperar-senha-img.png"
          alt="Imagem recuperar senha"
          className="img-rec-senha"
        />
        <h1 className="form-title">Esqueceu sua senha?</h1>
        <form>
          <InputText
            name="email"
            placeholder="Digite seu e-mail"
            value={email}
            change={setEmail}
          />
          <div className="dv-btn">
            <button type="submit" className="btn">Redefinir senha</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecuperarSenha;
