import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import "./Navbar.scss";
import { saveUser } from "../../redux/auth/auth.actions";

const Navbar = ({ user, dispatch }) => {
  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0, y: "-79px" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-50px" }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className="left">
        <Link to="/">
          <img className="imglog" src="../images/log.jpg" alt="logo jandrin" />
        </Link>
      </div>
      <div className="right">
        <Link to="/">Inicio</Link>
        <Link to="/empresas">Sigueme</Link>
        <Link to="/private">Juegos </Link>
        <Link to="/persononalizacion">Personalizame</Link>

        {!user && (
          <>
            <Link to="/login">
              <button className="button">Login</button>
            </Link>
            <img
              className="imglog"
              src="../.././images/candado.jpg"
              alt="candado"
            />
          </>
        )}
        {user && (
          <>
            <Link to="/">
              <button
                className="button"
                onClick={() => dispatch(saveUser(false))}
              >
                Logout
              </button>
            </Link>
            <img
              className="imglog"
              src="../.././images/candadoopen.jpg"
              alt="candado"
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default connect((state) => ({ user: state.auth.user }))(Navbar);
