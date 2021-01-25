import React from "react";
//Animation Framer motion
import { motion } from "framer-motion";
import { AnimatePage } from "../Animations/Animation";

const OurWork = () => {
  return (
    <motion.div
      variants={AnimatePage}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div>
        <h1>Our Work</h1>
      </div>
    </motion.div>
  );
};

export default OurWork;
