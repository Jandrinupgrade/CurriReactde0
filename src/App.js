
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Busine from "./pages/Busine";

function App() {
  return (
    <div className="app">
   <Navbar/>
   <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresas" element={<Busine />} />
           
          </Routes>
   
    </div>
  );
}

export default App;
