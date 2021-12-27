import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 6rem 8rem;
`;

const Heading = styled.section`
  display: flex;
  margin-bottom: 2rem;

  .main-heading {
    width: 35%;
    padding-left: 5rem;

    h1 {
      font-size: 60px;
      font-weight: 700;
      line-height: 60px;
      span {
        color: #e83c41;
      }
    }
  }
  .sub-heading {
    width: 65%;
    padding: 0 0.5rem;

    p {
      font-size: 30px;
      line-height: 55px;
      font-weight: 300;
      span {
        font-weight: 600;
      }
    }
  }
`;

const InvestorsImagesContainer = styled.section`
  padding: 0 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    max-width: 200px;
    height: 130px;
    margin: 0.5rem 1rem;
    padding: 1.5rem;
  }
`;

const Investors = () => {
  return (
    <Wrapper>
      {/* Heading */}
      <Heading>
        {/* Main */}
        <section className="main-heading">
          <h1>
            <span>Our</span> <br />
            Investors
          </h1>
        </section>
        {/* Sub */}
        <section className="sub-heading">
          <p>
            We have raised <span>$55 million</span> to fuel dreams -{" "}
            <span>Ours</span> and <span>Yours</span>
          </p>
        </section>
      </Heading>
      {/* Investor Images */}
      <InvestorsImagesContainer>
        <img src="/assets/investors/accel.png" alt="" />
        <img src="/assets/investors/alkeon.png" alt="" />
        <img src="/assets/investors/dst-global.png" alt="" />
        <img src="/assets/investors/tiger-global.png" alt="" />
        <img src="/assets/investors/founder.png" alt="" />
        <img src="/assets/investors/lightspeed.png" alt="" />
      </InvestorsImagesContainer>
    </Wrapper>
  );
};

export default Investors;
