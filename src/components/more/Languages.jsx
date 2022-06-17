import "./More.scss";

const Languages = ( {languages} ) => {
  
    return (
       
    
    <div className="card">
      <h3>Lenguajes</h3>
      <p><strong>Idioma: </strong>{languages.language} </p>
      <p><strong>Nivel escrito: </strong>{languages.wrlevel} </p>
      <p><strong>Nivel hablado: </strong>{languages.splevel} </p>
      </div>
       );
};
export default Languages;