import styled from "styled-components";
//import framer motion
import { motion } from "framer-motion";

export const StyleAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const StyleDesc = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const StyleHide = styled.div`
  overflow: hidden;
`;

export const StyleImage = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
