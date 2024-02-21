import Postagem from "./Postagem";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  postagem?: Postagem | null;
}
