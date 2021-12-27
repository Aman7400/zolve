import React from "react";
import styled from "styled-components";
import { GrSubtract } from "react-icons/gr";

const Wrapper = styled.div`
  padding: 10rem 8rem;
  background-color: #f0f5f5;
`;

const HeaderText = styled.section`
  padding-left: 10rem;
  p {
    font-size: 48px;
    font-weight: 300;
    line-height: 58px;
    letter-spacing: 0px;
    span {
      font-weight: 500;
    }
  }
  .body-text-2 {
    padding-top: 3rem;
  }
`;
const SubText = styled.section`
  margin-top: 4rem;
  text-align: center;
  p {
    font-size: 18px;
    font-weight: 700;
    span {
      margin-right: 1rem;
    }
  }
`;

const Harness = () => {
  return (
    <Wrapper>
      {/* Header */}
      <HeaderText>
        {/* Body Text 1 */}
        <p>
          <span>Harness</span> the power of your <br />{" "}
          <span>financial freedom.</span>
        </p>
        {/* Body Text 2 */}
        <p className="body-text-2">
          We sweat the finance so you can sweat <br /> the important stuff, and
          make <br />
          your dream a reality.
        </p>
      </HeaderText>

      {/* Sub */}
      <SubText>
        {/* Icon Image */}
        <span className="icon-image">
          <img src="/assets/elem8.svg" alt="" />
        </span>
        {/* Text */}
        <p className="center">
          {" "}
          <span className="center">
            <GrSubtract />
          </span>{" "}
          Know more about Us
        </p>
      </SubText>
    </Wrapper>
  );
};

export default Harness;
