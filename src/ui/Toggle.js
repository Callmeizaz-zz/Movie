import React, { useState } from "react";
//Framer motion
import { motion } from "framer-motion";
//styled components

export const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export const ToggleList = ({ author, children }) => {
  const [toggleList, setToggleList] = useState(false);
  return (
    <motion.div layout onClick={() => setToggleList(!toggleList)}>
      <motion.h3 layout>Review by: {author}</motion.h3>
      {toggleList ? children : ""}
      <motion.div layout className="faq-line"></motion.div>
    </motion.div>
  );
};
