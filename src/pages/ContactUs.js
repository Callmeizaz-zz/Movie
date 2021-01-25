import React from "react";
//import comp
import Contact from "../components/ContactComp";
//Animation Framer motion
import { motion } from "framer-motion";
import { AnimatePage } from "../Animations/Animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={AnimatePage}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Contact />
    </motion.div>
  );
};

export default ContactUs;
