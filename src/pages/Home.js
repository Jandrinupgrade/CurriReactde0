//import React from 'react';
import { useState } from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import { CV } from "../cv/cv";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Education from "../components/education/Education";
import Skills from "../components/more/Skills";
import Languages from "../components/more/Languages";
import Volunters from "../components/more/Volunters";
import Business from "../components/business/Business";


const {hero, education, experience, languages, habilities, volunteer, business } = CV;



const Home = () => {
  const [educat, setEducat] = useState(false);
  let mostrar = "";
  !educat ? (mostrar = "Educación") : (mostrar = "Experiencia");
  return (
  <div className="home">
    
<Hero hero={hero} />
<motion.div
        initial={{ opacity: 0, y: "79px" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "50px" }}
        transition={{ ease: "easeOut", duration: 3}}
      >
<div className="card">
        <h3>Sobre mi</h3>
        {hero.aboutMe.length > 0 &&
          hero.aboutMe.map((he,index) => {
            return <About key={index} {...he} />;
          })}
      </div>
      </motion.div>
      <label><h2>Educación/Experiencia:</h2><button className="button eduexp" onClick={() => setEducat(!educat)}><strong>{mostrar}</strong></button></label>
      <div className="card">
      {educat ? <Education education={education} /> : <Experience experience={experience}/>}
    
      </div>
      <div className="divcontainer">
      <Languages languages={languages} />

      {/* <div className="linea"></div> */}
      <div className="card">
        <h3>Habilidades</h3>
        {habilities.length > 0 &&
          habilities.map((hab,index) => {
            return <Skills key={index}  hab={hab} />;
          })}
      </div>
      </div>
      <div className="card">
        <h3>Voluntariados</h3>
        {volunteer.length > 0 &&
          volunteer.map((vo,index) => {
            return <Volunters key= {index} volun={vo} />;
          })}
      </div>
      <div className="card">
      <Business />
      </div>
      <div className="linea"></div>
      <h2>&copy;Alejandro Rodríguez Suárez</h2>


</div>
    
  );
}

export default Home