import React from "react";
import styled from "styled-components";

const FeaturesContainer = styled.section`
  /* position: relative; */
  margin: 1rem 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center; */
  .card {
    /* height: 230px; */
    width: 460px;
    /* margin: 1rem; */
    position: relative;

    padding: 1rem;
    .feature-icon {
      img {
        width: 25px;
        height: 50px;
      }
    }
    h1 {
      margin: 1rem 0 0.5rem;
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
    }
    p {
      font-size: 18px;
      font-weight: 300;
      line-height: 27px;
    }

    &:nth-of-type(3) {
      left: 30px;
      right: -30px;
      margin: 30px 0 20px 0;
      /* background: #302b2c; */
    }
    &:nth-of-type(4) {
      left: 30px;
      right: -30px;
      margin: 30px 0 20px 0;

      /* background: #630717; */
    }
    &:nth-of-type(5) {
      /* background: pink; */
      left: 60px;
      right: -60px;
      margin: 60px 0 20px 0;
    }
  }
`;

const AbstractElement = styled.section`
  position: absolute;
  top: 100px;
  left: 100px;
  width: 500px;
`;

const TailorFeature = () => {
  return (
    <FeaturesContainer>
      {/* Element */}
      <AbstractElement>
        <p>im hre</p>
        <img src="/assets/tailor/elem6.svg" alt="" />
      </AbstractElement>
      {/* Card 1 */}
      <section className="card">
        {/* Icon */}
        <span className="feature-icon">
          <img src="/assets/tailor/tail-1.svg" alt="" />
        </span>
        {/*  Body */}
        <h1>No upfront fees</h1>
        <p>
          Moving across countries can be financially overwhelming. A Zolve
          account comes with no application fee, no annual credit card fee and
          no monthly bank account fees.
        </p>
      </section>
      {/* Card 2 */}
      <section className="card">
        {/* Icon */}
        <span className="feature-icon">
          <img src="/assets/tailor/tail-2.svg" alt="" />
        </span>
        {/*  Body */}
        <h1>No SSN required</h1>
        <p>
          We know you are new to America, your visa, passport and basic personal
          information is enough to get you started with your Zolve Account.
        </p>
      </section>
      {/* Card 3 */}
      <section className="card">
        {/* Icon */}
        <span className="feature-icon">
          <img src="/assets/tailor/tail-3.svg" alt="" />
        </span>
        {/*  Body */}
        <h1>5-min online application</h1>
        <p>
          Sign up before you leave home, so that when you land in the U.S. you
          can focus on your dreams, worry-free.
        </p>
      </section>
      {/* Card 4 */}
      <section className="card">
        {/* Icon */}
        <span className="feature-icon">
          <img src="/assets/tailor/tail-4.svg" alt="" />
        </span>
        {/*  Body */}
        <h1>High limit credit card</h1>
        <p>
          Whether it’s grocery shopping or that dream laptop or an emergency
          expense, we’ve got your back with a high limit credit card.
        </p>
      </section>
    </FeaturesContainer>
  );
};

export default TailorFeature;
