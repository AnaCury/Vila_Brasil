import axios from "axios";

export const GetProfessorById = async (id) => {
  const response = axios("http://localhost/vilabrasil/api/professor/", {
    method: "GET",
    headers: {
      Authorization: `bearer ${localStorage.getItem("token_vila")}`,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    params: {
      id: id,
    },
  })
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error);
    });
    return response;
};
