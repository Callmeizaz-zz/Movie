import React from "react";
//Import Components
import { Toggle } from "../ui/Toggle.js";
import { useScroll } from "../ui/useScroll";
//Import styled-components
import { StyleAbout } from "../styles/styles";
import styled from "styled-components";
//Framer motion
import { AnimateSharedLayout } from "framer-motion";
import { ScrollAnim } from "../Animations/Animation";

const FaqSection = () => {
  const [element, control] = useScroll();
  return (
    <FaqStyled
      variants={ScrollAnim}
      animate={control}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How are you doing?">
          <div className="answer">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              dignissimos.
            </p>
          </div>
        </Toggle>
        <Toggle title="How do we work?">
          <div className="answer">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              dignissimos.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule.">
          <div className="answer">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              dignissimos.
            </p>
          </div>
        </Toggle>
        <Toggle title="What do we offer">
          <div className="answer">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              dignissimos.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FaqStyled>
  );
};

//Styled components

const FaqStyled = styled(StyleAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #23d997;
    height: 0.2rem;
    width: 100%;
    margin: 2rem 0rem;
  }

  .question {
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 0.5rem 0rem;
    }
  }
`;

export default FaqSection;
