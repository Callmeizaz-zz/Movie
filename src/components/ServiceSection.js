import React from "react";
//Importing Icons
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Import hook
import { useScroll } from "../ui/useScroll";
//Import styled-components
import { StyleAbout, StyleImage } from "../styles/styles";
import styled from "styled-components";
//import Animation
import { ScrollAnim } from "../Animations/Animation";

const ServiceSection = () => {
  const [element, control] = useScroll();
  return (
    <StyledServices variants={ScrollAnim} animate={control} ref={element}>
      <StyleImage>
        <img src={home2} alt="Services" />
      </StyleImage>
      <StyleSerDesc>
        <h2>
          High <span>quality</span> service
        </h2>
        <StyleCards>
          <StyleCard>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
        </StyleCards>
      </StyleSerDesc>
    </StyledServices>
  );
};

const StyledServices = styled(StyleAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyleSerDesc = styled.div`
  flex: 1;
  padding-left: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyleCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyleCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      background: white;
      color: black;
      margin-left: 1rem;
      padding: 1rem;
    }
  }
`;

export default ServiceSection;
