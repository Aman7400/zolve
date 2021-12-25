import React from "react";
import styled from "styled-components";
import Btn1 from "../../components/Button/Btn1";
import FeatureIcons from "./FeatureIcons";

const Wrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 5rem;
  display: flex;
`;
const TextWrapper = styled.section`
  padding-left: 8rem;
  width: 50%;
  .heading {
    h1 {
      font-size: 50px;
      font-weight: 700;
      span {
        font-weight: 800;
        color: #e83c41;
      }
    }
    p {
      margin-top: 2rem;
      font-size: 25px;
      line-height: 42px;
      letter-spacing: 0px;
      /* font-weight: bold; */
      font-weight: 500;

      span {
        font-weight: 300;
      }
    }
  }
`;
const CardWrapper = styled.section`
  width: 50%;
  padding-top: 5rem;
  .orange-container {
    background-color: #fa8840;
    border-radius: 40px;
    border-bottom-right-radius: 0px;
    padding: 5rem 2rem;
    .white-card-img {
      display: grid;
      place-items: center;
    }
    a {
      margin: auto;
      color: #000;
      background: #fff;
      /* border: 1px solid #000; */
      font-size: 16px;
    }
  }
`;

const Account = () => {
  return (
    <Wrapper>
      {/* Text */}
      <TextWrapper>
        {/* Heading */}
        <section className="heading">
          <h1 className="heading-text">
            <span>An account,</span> <br /> designed for You
          </h1>
          <p>
            Apply for a U.S. Bank Account at home <br />
            <span>
              and operate when you arrive. It’s safer than carrying cash.
            </span>
          </p>
        </section>
        {/* Feature Icons */}
        <FeatureIcons />
      </TextWrapper>
      {/* Card */}
      <CardWrapper>
        <section className="orange-container">
          {/* Card Image */}
          <section className="white-card-img">
            <img src="/assets/account/white_card.svg" alt="" />
          </section>
          {/* Apply Button */}
          <Btn1 title="Apply" size="lg" />
        </section>
      </CardWrapper>
    </Wrapper>
  );
};

export default Account;
