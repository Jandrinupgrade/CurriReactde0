import React, { useState, useEffect } from "react";
import "./Personalizame.scss";
const Personalizame = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="hometwo">
      <h1> {clockState}</h1>
      <h1>Personalizame</h1>
      <form className="cardi">
        <div>
          <span>Nombre</span>
          <input type="text" name="name" />
        </div>
        <div>
          <span>Apellidos</span>
          <input type="text" name="date" />
        </div>
        <div>
          <span>Residencia</span>
          <input type="text" name="where" />
        </div>
        <div>
          <span>Email</span>
          <input type="text" name="description" />
        </div>
        <div>
          <span>Fecha de nacimiento</span>
          <input type="text" name="description" />
        </div>
        <div>
          <span>telefono</span>
          <input type="text" name="description" />
        </div>
        <div>
          <span>GitHub</span>
          <input type="text" name="description" />
        </div>
        <button className="button">Añade datos personales</button>
      </form>
      <form className="cardi">
        <div>
          <span>Sobre Mi</span>
          <input type="text" name="name" />
        </div>

        <button className="button">Añade información adicional</button>
      </form>
      <form className="cardi">
        <div>
          <span>Nombre</span>
          <input type="text" name="name" />
        </div>
        <div>
          <span>Fecha</span>
          <input type="text" name="date" />
        </div>
        <div>
          <span>Lugar</span>
          <input type="text" name="where" />
        </div>

        <button className="button">Añade estudios</button>
      </form>
      <form className="cardi">
        <div>
          <span>Nombre</span>
          <input type="text" name="name" />
        </div>
        <div>
          <span>Fecha</span>
          <input type="text" name="date" />
        </div>
        <div>
          <span>Lugar</span>
          <input type="text" name="where" />
        </div>
        <div>
          <span>Descripción</span>
          <input type="text" name="where" />
        </div>

        <button className="button">Añade experiencia</button>
      </form>
    </div>
  );
};

export default Personalizame;
