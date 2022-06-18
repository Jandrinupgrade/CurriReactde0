import "./Experience.scss";

const Experience = (props) => {
  return (
    <>
      <h3>Experiencia</h3>
      {props.experience.length > 0 &&
        props.experience.map((exp, index) => {
          return (
            <div key={index}>
              <p>
                <strong>Empresa: </strong>
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
              <p>
                <strong>Descripción: </strong>
                {exp.description}
              </p>
              <br /> <br /> <br />
            </div>
          );
        })}
    </>
  );
};
export default Experience;
