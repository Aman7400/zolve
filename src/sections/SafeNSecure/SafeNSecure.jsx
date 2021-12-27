import React from "react";
import styled from "styled-components";
import Btn1 from "../../components/Button/Btn1";

const Wrapper = styled.div`
  padding: 6rem 8rem;
  h1 {
    text-align: center;
    font-size: 50px;
    line-height: 70px;
    background: -webkit-linear-gradient(96deg, #fc6076 0%, #ff9a44 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  a {
    font-size: 16px;
    margin: 0 auto;
  }
`;

const FeaTureContentConainer = styled.section`
  display: flex;
  margin: 0 8rem;
  padding-bottom: 2rem;
`;

const FeatureCard = styled.section`
  text-align: center;
  padding: 2rem 1rem;
  span {
    display: block;
    padding-bottom: 0.8rem;
    img {
      width: 36px;
      height: 40px;
    }
  }

  h6 {
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
  }
`;

const SafeNSecure = () => {
  return (
    <Wrapper>
      {/* Heading */}
      <h1>Safe and Secure.</h1>
      {/* Feature Content */}
      <FeaTureContentConainer>
        {/* Card 1 */}
        <FeatureCard>
          {/* Icon */}
          <span>
            <img src="/assets/safeNSecure/ss-1.svg" alt="" />
          </span>
          {/* Heading */}
          <h6>Your money is safe with us.</h6>
          {/* Description */}
          <p>
            Your money is protected by FDIC insurance up to $250,000 through our
            partner bank.
          </p>
        </FeatureCard>
        {/* Card 2 */}
        <FeatureCard>
          {/* Icon */}
          <span>
            <img src="/assets/safeNSecure/ss-2.svg" alt="" />
          </span>
          {/* Heading */}
          <h6>Lost your card?</h6>
          {/* Description */}
          <p>
            Simply freeze/unfreeze the card with just a click on the app. It’s
            really that easy!
          </p>
        </FeatureCard>
      </FeaTureContentConainer>
      {/* Apply Now Button */}
      <Btn1 title="Apply Now" size="lg" />
    </Wrapper>
  );
};

export default SafeNSecure;
