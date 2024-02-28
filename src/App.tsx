import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./componets/navBar";
import Footer from "./componets/footer";
import { Home } from "./screens/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
