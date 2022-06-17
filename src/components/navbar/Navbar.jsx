
import { Link,  } from 'react-router-dom';
import { motion } from "framer-motion";
//import { useDispatch, useSelector } from 'react-redux';
//import { logoutUser } from '../redux/auth/auth.actions';
import './Navbar.scss';

const Navbar = () => {
  //const navigate = useNavigate();
  //const user = useSelector(state => state.auth.user);
  //const dispatch = useDispatch();

  //const logoutCallback = () => navigate("/");

  return (
    <motion.div className="navbar"
      initial={{ opacity: 0, y: '-79px' }}//Juan Macias
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-50px' }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className='left'>
        <Link to="/">
          <img className="imglog" src="../images/log.jpg" alt="logo jandrin" />
        </Link>
      </div>
      <div className='right'>
        <Link to="/"  >Inicio</Link>





        {/* {!user &&
          <>
            <Link to="/register">Registro</Link>
            <Link to="/login">Iniciar sesión</Link>
          </>
        }
        {user &&
          <>
            <Link to="/characters">Personajes</Link>
            <p>Bienvenido, {user.name}</p>
            <button onClick={() => dispatch(logoutUser(logoutCallback))}>Logout</button>
          </>
        } */}
     
      <Link to="/empresas">Sigueme</Link>
      </div>


    </motion.div>
  )
};

export default Navbar;