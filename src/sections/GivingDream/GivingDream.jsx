import React from "react";
import styled from "styled-components";
import Btn1 from "../../components/Button/Btn1";
import KeyFeatures from "./KeyFeatures";

const Wrapper = styled.div`
  padding: 6rem 8rem;
  background-color: #171717;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  .apply-btn {
    width: 100%;
    margin: 3rem 0;
    display: flex;
    justify-content: center;
    a {
      font-size: 16px;
    }
  }
`;

const TextContainer = styled.section`
  width: 60%;

  /* Main Heading */
  .main-heading {
    h1 {
      color: #fff;
      word-spacing: 0px;
      span {
        color: #7f7f7f;
      }
    }
    p {
      color: #c7c7ca;
      font-size: 20px;
      font-weight: 300;
      line-height: 30px;
      margin-top: 1rem;
    }
  }

  /* Info Text */

  .info-text {
    margin-top: 1rem;
    p {
      color: #8a8a8a;
      font-size: 12px;
      line-height: 20px;
      font-weight: 600;
    }
  }
`;

const CardContainer = styled.div`
  width: 40%;
  display: grid;
  place-items: center;
  img {
    transform: scale(1.5);
  }
  /* position: relative;
  .img1,
  .img2 {
    display: flex;
    position: absolute;
    img {
      width: 200px;
      height: 300px;
    }
  }
  .img1 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
`;

const GivingDream = () => {
  return (
    <Wrapper>
      {/* Container */}
      <Container>
        {/* Text Container */}
        <TextContainer>
          {/* Main Heading */}
          <section className="main-heading">
            <h1 className="heading-text">
              <span>Giving</span> your dream <br /> <span>the</span> credit it’s
              due.
            </h1>
            <p className="">
              Access to money should be the least of your worries when you have{" "}
              <br />
              aimed to win the world. With a high limit U.S. credit card with no{" "}
              <br />
              annual fee, we give you the power to do more from Day 1.
            </p>
          </section>
          {/* Key Features */}
          <KeyFeatures />
          {/* Notice Info Text */}
          <section className="info-text">
            <p>
              *After 6 months APR(interest rate) will be 14.99% (variable with
              prime rate as follows: 11.74% + WSJ Prime Rate)
            </p>
          </section>
        </TextContainer>

        {/* Cards */}
        <CardContainer>
          <img src="/assets/dream/comb-card.png" alt="" />
        </CardContainer>
        {/* Apply Now Button */}
        <section className="apply-btn">
          <Btn1 size="lg" title="Apply Now" />
        </section>
      </Container>
    </Wrapper>
  );
};

export default GivingDream;
