import "./More.scss";

const Volunters = ( {volun} ) => {
  
    return (
      <>
      <p><strong>Nombre: </strong>{volun.name} </p>
      <p><strong>Lugar: </strong>{volun.where} </p>
      <p><strong>Descripción: </strong>{volun.description} <br/><br/><br/><br/></p>
      </>
     );
};
export default Volunters;