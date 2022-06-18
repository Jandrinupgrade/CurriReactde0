import "./Education.scss";
const Education = (props) => {
  return (
    <>
      <h3>Estudios</h3>
      {props.education.length > 0 &&
        props.education.map((exp, index) => {
          return (
            <div key={index}>
              <p>
                <strong>Estudio: </strong>
                {exp.name}
              </p>
              <p>
                <strong>Fecha: </strong>
                {exp.date}
              </p>
              <p>
                <strong>Lugar: </strong>
                {exp.where}
              </p>
              <br />
            </div>
          );
        })}
    </>
  );
};

export default Education;
