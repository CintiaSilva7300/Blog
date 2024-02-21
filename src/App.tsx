import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./paginas/home/Home";
import { Navbar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";
import Cadastro from "./paginas/cadastro/Cadastro";
import Login from "./paginas/login/Login";
import ListaTemas from "./components/temas/cardTema/ListaTemas";
import FormularioTema from "./components/temas/formularioTema/formularioTema";
import DeletarTema from "./components/temas/DeletarTema/DeletarTema";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastroTema" element={<FormularioTema />} />
            <Route path="/editarTema/:id" element={<FormularioTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
