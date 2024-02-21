import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tema from "../../../models/Tema";
import { AuthContext } from "../../../context/AuthContext";
import { Dna } from "@phosphor-icons/react";
import CardTemas from "./CardTemas";
import { buscar } from "../../../Services/Service";

export default function ListaTemas() {
  const [temas, setTemas] = useState<Tema[]>([]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario?.token;

  async function buscarTemas() {
    try {
      await buscar("/temas", setTemas, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("Sua sessão expirou, faça login novamente!");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Sua sessão expirou, faça login novamente!");
      handleLogout();
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
  }, [temas.length]);

  return (
    <>
      {temas.length === 0 && (
        <Dna
          size={104}
          height={104}
          className="text-center text-indigo-500 m-10 animate-spin"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temas.map((tema) => (
              <>
                <CardTemas key={tema.id} tema={tema} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
