import "./App.scss";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Busine from "./pages/Busine";
import { MyContext } from "./MyContext";

function App() {
  const { t, i18n } = useTranslation(["translation"]); 

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <MyContext.Provider value={{ t, changeLanguage }}>
    <div className="app">
      <Navbar />
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/empresas" element={<Busine />} />
        
      </Routes>
    </div>
    </MyContext.Provider>
  );
}

export default App;
