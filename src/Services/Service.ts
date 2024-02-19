import axios from "axios";

const api = axios.create({
  baseURL: `https://blogpessoal-pfgs.onrender.com`,
});

export const cadastrarUsuario = async (
  url: string,
  dados: Object,
  setDados: function
) => {
  const response = await api.post(url, dados);
  setDados(response.data);
  console.log(response.data);
};

export const login = async (url: string, dados: Object, setDados: function) => {
  const response = await api.post(url, dados);
  setDados(response.data);
  console.log(response.data);
};
