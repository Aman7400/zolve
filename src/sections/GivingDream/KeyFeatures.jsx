import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 2rem;
  padding-right: 5rem;
  display: flex;
  flex-wrap: wrap;
`;

const FeatureItem = styled.section`
  max-width: 50%;
  width: 335px;
  height: 115px;
  display: flex;
  padding: 1.5rem;
  align-items: center;
  span {
    margin-right: 20px;
    img {
      width: 70px;
      height: 50px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
    color: #b5b5b5;
    font-weight: 700;
    line-height: 22px;
  }
`;

const KeyFeatures = () => {
  return (
    <Wrapper>
      {/* Feature Item 1 */}
      <FeatureItem>
        {/* Icon */}
        <span>
          <img src="/assets/dream/cc1.svg" alt="" />
        </span>
        {/* Text */}
        <p>No Annual fee</p>
      </FeatureItem>
      {/* Feature Item 2 */}
      <FeatureItem>
        {/* Icon */}
        <span>
          <img src="/assets/dream/cc2.svg" alt="" />
        </span>
        {/* Text */}
        <p>0% APR(interest rate) for 6 months (introductory offer)*</p>
      </FeatureItem>
      {/* Feature Item 3*/}
      <FeatureItem>
        {/* Icon */}
        <span>
          <img src="/assets/dream/cc3.svg" alt="" />
        </span>
        {/* Text */}
        <p>International card with no foreign transaction fees</p>
      </FeatureItem>
      {/* Feature Item 4 */}
      <FeatureItem>
        {/* Icon */}
        <span>
          <img src="/assets/dream/cc4.svg" alt="" />
        </span>
        {/* Text */}
        <p>No Credit History nor SSN required</p>
      </FeatureItem>
      {/* Feature Item 5 */}
      <FeatureItem>
        {/* Icon */}
        <span>
          <img src="/assets/dream/cc5.svg" alt="" />
        </span>
        {/* Text */}
        <p>Amazing partner store reward programs</p>
      </FeatureItem>
      {/* Feature Item 6 */}
      <FeatureItem>
        {/* Icon */}
        <span>
          <img src="/assets/dream/cc6.svg" alt="" />
        </span>
        {/* Text */}
        <p>High credit limit upto $10,000</p>
      </FeatureItem>
    </Wrapper>
  );
};

export default KeyFeatures;
