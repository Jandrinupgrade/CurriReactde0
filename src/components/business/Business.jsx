import React from 'react'
import "./Business.scss";
import { useSelector, useDispatch } from 'react-redux';
import { deleteBusiness } from '../../redux/business/business.actions';

const Business = () => {
    const {business} = useSelector(state => state.business);
    const dispatch = useDispatch();
  return (
    <>
      <h3>Empresas</h3>
      {business.length > 0 &&
        business.map((bus,index) => {
          return (
            <div key={index}>
              <p>
                <strong>Empresa: </strong>
                {bus.name}
              </p>
              <p>
                <strong>Fecha: </strong>
                {bus.date}
              </p>
              <p>
                <strong>Lugar: </strong>
                {bus.where}
              </p>
              <p>
                <strong>Descripción: </strong>
                {bus.description}
              </p>
              <button className="button" onClick={()=> {dispatch(deleteBusiness(bus))}}>Eliminar</button>
              <br /> <br /> <br />
            </div>
          );
        })}
    </>
  );
};
export default Business;