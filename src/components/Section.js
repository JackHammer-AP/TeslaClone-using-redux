import React from "react";

import "./Section.css";

import Fade from "react-reveal/Fade"

import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Section = ({
  title,
  desc,
  leftbtn,
  rightbtn,
  bgimg,
  downarrow = "/images/down-arrow.svg",
}) => {

  return (
    <Wrap bgImage={bgimg} className="section">
      <Fade bottom cascade>
        <div className="section__header">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </Fade>

      <Fade bottom cascade>
        <div>
          <div className="section__button">
            <div className="section__leftButton">{leftbtn}</div>

            {rightbtn && <div className="section__rightButton">{rightbtn}</div>}
          </div>

          <div className="section__downArrow">
            {/* <img src={downarrow} alt="" /> */}
          </div>

        </div>
      </Fade>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
