import axios from "axios";
import { GetProfessorById } from "./ProfessorService";
import { API_URL }  from "../constants";

export const LoginSvc = async (email, senha) => {
  console.log(email, senha);
  const formData = new FormData();
  formData.append("usr", email);
  formData.append("senha", senha);
  return await axios({
    method: "POST",
    url: `${API_URL}login/`,
    data: formData,
  }).then(async (data) => {
    if (data.data.sucesso === true) {
      await localStorage.setItem("token_vila", data.data.token);
      var professorId = parseJwt(data.data.token).id;
      await localStorage.setItem("professorId", professorId);
      var professor = await GetProfessorById(professorId);
      await localStorage.setItem("professor", JSON.stringify(professor));
      return true;
    } else {
      // remove o token_vila do localStorage
      await localStorage.removeItem("token_vila");
      await localStorage.removeItem("professorId");
      await localStorage.removeItem("professor");
      return false;
    }
  });
};

export const isAuthenticated = () => {
  return localStorage.getItem("token_vila") !== null;
};

function parseJwt(token_vila) {
  var base64Url = token_vila.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
