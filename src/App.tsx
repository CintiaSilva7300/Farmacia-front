import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./componets/navBar";
import Footer from "./componets/footer";
import { Home } from "./screens/home/Home";
import CreateProduct from "./screens/createProduct";
import Categoria from "./screens/categoria";
import CategoriasUpdate from "./screens/categoriaUpdate";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/createproduct" element={<CreateProduct />} />
            <Route path="/createproduct/:id" element={<CreateProduct />} />

            <Route path="/categoria" element={<Categoria />} />
            <Route path="/categoria/:id" element={<CategoriasUpdate />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
