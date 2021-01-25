import React from "react";
//Importing about components
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";
//Animation Framer motion
import { motion } from "framer-motion";
import { AnimatePage } from "../Animations/Animation";

const AboutUs = () => {
  return (
    <React.Fragment>
      <motion.div
        variants={AnimatePage}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <AboutSection />
        <ServiceSection />
        <FaqSection />
      </motion.div>
    </React.Fragment>
  );
};

export default AboutUs;
