import React from "react";
import home1 from "../img/home1.png";
import Wave from "../ui/Wave";
//Import styled-components
import { StyleAbout, StyleHide, StyleImage, StyleDesc } from "../styles/styles";
//Animation Framer motion
import { motion } from "framer-motion";
import { TitleAnim, Fade, PhotoAnim } from "../Animations/Animation";

const AboutSection = () => {
  return (
    <StyleAbout>
      <StyleDesc>
        <div className="title">
          <StyleHide>
            <motion.h2 variants={TitleAnim}>We work to make</motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variants={TitleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variants={TitleAnim}>come true.</motion.h2>
          </StyleHide>
        </div>
        <motion.p variants={Fade}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, veritatis
          soluta provident ex dolorem enim!
        </motion.p>
        <motion.button whileHover={{ scale: 1.1 }}>Contact Us</motion.button>
      </StyleDesc>
      <StyleImage>
        <motion.img variants={PhotoAnim} src={home1} alt="Man with camera." />
      </StyleImage>
      <Wave />
    </StyleAbout>
  );
};

//styled components

export default AboutSection;
