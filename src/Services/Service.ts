import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const cadastrarUsuario = async (
  url: string,
  dados: Record<string, any>,
  setDados: (data: any) => void
) => {
  const resposta: AxiosResponse<any> = await api.post(url, dados);
  setDados(resposta.data);
};

export const login = async (
  url: string,
  dados: Record<string, any>,
  setDados: (data: any) => void
) => {
  const resposta: AxiosResponse<any> = await api.post(url, dados);
  setDados(resposta.data);
};

export const buscar = async (
  url: string,
  setDados: (data: any) => void,
  header: Record<string, any>
) => {
  const resposta: AxiosResponse<any> = await api.get(url, header);
  setDados(resposta.data);
};

export const cadastrar = async (
  url: string,
  dados: Record<string, any>,
  setDados: (data: any) => void,
  header: Record<string, any>
) => {
  const resposta: AxiosResponse<any> = await api.post(url, dados, header);
  setDados(resposta.data);
};

export const atualizar = async (
  url: string,
  dados: Record<string, any>,
  setDados: (data: any) => void,
  header: Record<string, any>
) => {
  const resposta: AxiosResponse<any> = await api.put(url, dados, header);
  setDados(resposta.data);
};

export const deletar = async (url: string, header: Record<string, any>) => {
  await api.delete(url, header);
};
