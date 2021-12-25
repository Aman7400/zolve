import React from "react";
import styled from "styled-components";
import TailorFeature from "./Tailor-Feature/TailorFeature";

const Wrapper = styled.div`
  padding: 5rem 0;
`;

const HeadingContainer = styled.section`
  margin: 0 5rem;
  padding: 0 5rem;
  display: flex;
  .main-heading {
    flex: 0.4;
    margin: 0 1rem;
    h1 {
      line-height: 72px;
      letter-spacing: 0px;
      word-spacing: 0;
      span {
        color: #e83c41;
        font-weight: 900;
      }
    }
  }
  .main-description {
    flex: 0.6;
    display: flex;
    align-items: center;
    p {
      word-spacing: 0px;
      font-size: 28px;
      line-height: 42px;
      font-weight: 300;
    }
  }
`;

const Tailor = () => {
  return (
    <Wrapper>
      {/* Heading */}
      <HeadingContainer>
        {/* Main Heading */}
        <section className="main-heading">
          <h1 className="heading-text">
            Tailor-made <br /> <span>for You</span>{" "}
          </h1>
        </section>
        {/* Description */}
        <section className="main-description">
          <p className="subheading-text">
            We have re-engineered banking to make money work for you and your
            global ambitions
          </p>
        </section>
      </HeadingContainer>
      {/* Features Body */}
      <TailorFeature />
    </Wrapper>
  );
};

export default Tailor;
