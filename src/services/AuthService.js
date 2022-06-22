import axios from "axios";

export const LoginSvc = async (email, senha) => {
  console.log(email, senha)
  const formData = new FormData();
  formData.append("usr", email);
  formData.append("senha", senha);
  axios({
    method: "POST",
    url: "http://localhost/vilabrasil/api/login/",
    data: formData
  }
  )
    .then((data) => {
      if(data.data.sucesso === true){
        localStorage.setItem("token", data.data.token);
      }else{
        // remove o token do localStorage
        localStorage.removeItem("token");
      }
    });
};

export const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
}

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};