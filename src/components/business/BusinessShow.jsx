import React from 'react'
import "./Business.scss";
import { useSelector, } from 'react-redux';


const BusinessShow = () => {
    const {business} = useSelector(state => state.business);
  
  return (
    <>
      <h3>Empresas Interesadas</h3>
      {business.length > 0 &&
        business.map((bus,index) => {
          return (
            <div key={index}>
              <p>
                <strong>Empresa: </strong>
                {bus.name}
              </p>
             
            </div>
          );
        })}
    </>
  );
    };
 
export default BusinessShow;