import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./paginas/home/Home";
import { Login } from "./paginas/login/Login";
import { Navbar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";

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
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
