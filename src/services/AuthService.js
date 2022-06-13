import axios from "axios";

export const LoginSvc = async (email, senha) => {
  console.log(email, senha)
  const formData = new FormData();
  formData.append("usr", email);
  formData.append("senha", senha);
  axios({
    method: "POST",
    url: "https://anagabatteli.com/vilabrasil/api/login/",
    data: formData
  }
  )
    .then((data) => {
      console.log(data);
    });
};
