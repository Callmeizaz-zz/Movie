import React from "react";
//import styled
import styled from "styled-components";
//Import framer motion and animations
import { motion } from "framer-motion";
import { AnimatePage, ScrollAnim, Fade } from "../Animations/Animation";

const Contact = () => {
  return (
    <StyledContact
      variants={AnimatePage}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={ScrollAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <ContactStyle>
          <Circle />
          <motion.h2 variants={ScrollAnim}>Visit Us</motion.h2>
        </ContactStyle>
        <AddressStyle>
          <motion.p variants={Fade}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            at voluptatum vel necessitatibus facere perspiciatis
          </motion.p>
        </AddressStyle>
      </Hide>
      <Hide>
        <ContactStyle>
          <Circle />
          <motion.h2 variants={ScrollAnim}>Contact Number</motion.h2>
        </ContactStyle>
        <AddressStyle>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </AddressStyle>
      </Hide>
    </StyledContact>
  );
};

//styled

const StyledContact = styled(motion.div)`
  min-height: 90vh;
  color: #353535;
  padding: 5rem 10rem;
`;

const AddressStyle = styled(motion.div)`
  width: 30%;
  padding: 0rem 2rem;
  p {
    font-size: 1rem;
    padding: 0;
    color: #353535;
  }
  ul {
    list-style: none;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  background: #353535;
  width: 1rem;
  height: 1rem;
`;

const ContactStyle = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin: 1rem 1rem;
    font-size: 2rem;
  }
  p {
    color: #353535;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Title = styled.div`
  margin-bottom: 1rem;
  color: #353535;
`;

export default Contact;
