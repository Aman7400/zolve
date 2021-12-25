import React from "react";
import styled from "styled-components";
import Btn1 from "../../components/Button/Btn1";

const Wrapper = styled.div`
  padding-top: 5rem;
`;
const MainHeading = styled.section`
  text-align: center;
  h1 {
    font-weight: 700;
    font-size: 50px;
    line-height: 70px;
    span {
      color: #e83c41;
    }
  }
`;
const CounterBoxContainer = styled.section`
  background: url("/assets/rewards/bg_rewards.jpeg");
  padding: 8rem 5rem 2rem;
  border-radius: 100px;
  border-bottom-left-radius: 0px;
  margin-top: 2rem;
  .counter-text {
    display: flex;
    h1 {
      width: 50%;
      text-align: center;
      color: #fce7da;
      font-size: 36px;
      line-height: 40px;
      font-weight: 500;
      span {
        font-size: 140px;
        line-height: 154px;
        color: #fff;
      }
    }
  }
  a {
    background: #fff;
    color: #000;
    font-size: 16px;
    margin: auto;
    margin-top: 5rem;
  }
`;

const Rewards = () => {
  return (
    <Wrapper>
      {/* MAIN Heading */}
      <MainHeading>
        {/* Gift Icon */}
        <span className="gift-icon">
          <img src="/assets/rewards/gift.png" alt="" />
        </span>
        {/* Heading Text */}
        <h1 className="">
          <span>Rewards</span> so awesome, <br /> you'll be{" "}
          <span>spoiled for choice</span>
        </h1>
      </MainHeading>
      {/* COUNTER BOX */}
      <CounterBoxContainer>
        {/* Counter Text */}
        <section className="counter-text">
          {/* Cashback */}
          <h1>
            Up to <span>10%</span> <br />
            Cashback
          </h1>
          {/* Merchant */}
          <h1>
            <span>10k+</span> <br />
            Merchant
          </h1>
        </section>
        {/* Apply Button */}
        <Btn1 title="Apply Now" size="lg" />
      </CounterBoxContainer>
    </Wrapper>
  );
};

export default Rewards;
