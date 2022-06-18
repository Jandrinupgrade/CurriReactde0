import React from "react";
import "./Business.scss";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { deleteBusiness } from "../../redux/business/business.actions";

const Business = ({user,dispath}) => {
  const { business } = useSelector((state) => state.business);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Empresas</h3>
      {business.length > 0 &&
        business.map((bus, index) => {
          return (
            <div key={index}>
              <p>
                <strong>Empresa: </strong>
                {bus.name}
              </p>
              <p>
                <strong>Fecha creacion: </strong>
                {bus.date}
              </p>
              <p>
                <strong>Sede: </strong>
                {bus.where}
              </p>
              <p>
                <strong>Correo electronico: </strong>
                {bus.description}
              </p>
              {user && <button
                className="button"
                onClick={() => {
                  dispatch(deleteBusiness(bus));
                }}
              >
                Eliminar
              </button>}
              <br /> <br /> <br />
            </div>
          );
        })}
    </>
  );
};
export default connect(state => ({user: state.auth.user}))(Business);
