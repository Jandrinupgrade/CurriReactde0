import { useState } from "react";
import { connect } from "react-redux";
import "./Login.scss";


const Login = (props) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const submitLogin = (ev) => {
    ev.preventDefault();
    props.loginUser(form);
    
  };

  const handleInput = (ev) =>
    setForm({ ...form, [ev.target.name]: ev.target.value });

  return (
    <div>
      <form onSubmit={submitLogin}>
        <label>
          <p>Email</p>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleInput}
          />
        </label>

        <label>
          <p>Contraseña</p>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleInput}
          />
        </label>

        <div>
          <button className="button" type="submit">
            Acceder
          </button>
        </div>
      </form>
      <img
        className="imgtwo"
        src=".././images/candado.jpg"
        alt="foto candado"
      />
    </div>
  );
};

export default connect()(Login);
