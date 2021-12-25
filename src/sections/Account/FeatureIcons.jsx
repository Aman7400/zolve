import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;
const Feature = styled.section`
  width: 150px;
  margin: 2rem 0;
  span {
    img {
      width: 40px;
      height: 50px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

const FeatureIcons = () => {
  return (
    <Wrapper>
      {/* Feature 1 */}
      <Feature>
        {/* icon */}
        <span>
          <img src="/assets/account/bnfees.svg" alt="" />
        </span>
        {/* description */}
        <p>No min balance required</p>
      </Feature>
      {/* Feature 2 */}
      <Feature>
        {/* icon */}
        <span>
          <img src="/assets/account/bnupfees.svg" alt="" />
        </span>
        {/* description */}
        <p>No upfront account fees</p>
      </Feature>
      {/* Feature 1 */}
      <Feature>
        {/* icon */}
        <span>
          <img src="/assets/account/bnssn.svg" alt="" />
        </span>
        {/* description */}
        <p>No SSN required</p>
      </Feature>
    </Wrapper>
  );
};

export default FeatureIcons;
