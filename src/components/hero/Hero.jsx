import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";

const Hero = ({ hero }) => {
  return (
    <>
    <motion.div
    initial={{ opacity: 0, y: "+79px" }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: "50px" }}
    transition={{ ease: "easeOut", duration: 3}}
  >
    <div className="hero">
      <img  src={hero.image} alt="logo jandrin" />
      <div className="card">
        <h1>
          {hero.name} {hero.adress}
        </h1>
        <p>{hero.city} </p>
        <p>{hero.birthDate}</p>
        <p>
        ✉️<a href={"mailto:" + hero.email}>alexrodri13@hotmail.com</a>
        </p>
        <p>☎️{hero.phone}</p>
        <p>
        💻<a href={hero.gitHub}>GitHub</a>
        </p>
      </div>
      
    </div>
    </motion.div>
   
</>
  );
};
export default Hero;