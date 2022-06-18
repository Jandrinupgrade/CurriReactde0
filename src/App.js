import "./App.scss";
import { useTranslation } from "react-i18next";

import Navbar from "./components/navbar/Navbar";
import Juegos from "./components/games/Games";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Busine from "./pages/Busine";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import { MyContext } from "./MyContext";
import { saveUser } from "./redux/auth/auth.actions";
import { connect } from "react-redux";
import { authenticateUser } from "./helpers/auth.helper";
import Games from "./components/games/Games";
import Personalizame from "./components/personalizame/Personalizame";

const App = ({ user, dispatch }) => {
  const { t, i18n } = useTranslation(["translation"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  const navigate = useNavigate();

  const loginUser = (user) => {
    const userLogged = authenticateUser(user);
    dispatch(saveUser(userLogged));

    if (userLogged) navigate("/");
  };

  return (
    <MyContext.Provider value={{ t, changeLanguage }}>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/private"
            element={<PrivateRoute component={<Juegos />} />}
          />
          <Route
            path="/persononalizacion"
            element={<PrivateRoute component={<Personalizame />} />}
          />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          <Route path="/" element={<Home />} />
          <Route path="/empresas" element={<Busine />} />
          <Route
            path="/private/*"
            element={<PrivateRoute component={<Games />} />}
          />
          <Route
            path="/personalizacion/*"
            element={<PrivateRoute component={<Personalizame />} />}
          />
        </Routes>
      </div>
    </MyContext.Provider>
  );
};

export default connect((state) => ({ user: state.auth.user }))(App);
