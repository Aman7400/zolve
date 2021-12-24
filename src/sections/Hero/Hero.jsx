import React from "react";
import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";
import Btn1 from "../../components/Button/Btn1";
import RotatingCard from "../../components/RotatingCard/RotatingCard";
import VideoMock from "../../components/VideoMock/VideoMock";

const SectionWrapper = styled.div`
  margin-top: var(--desktop-nav);
  width: 100%;
  height: calc(100vh - var(--desktop-nav));
  color: #fff;
`;

const TopSectionWrapper = styled.div`
  padding: 0 6rem;
  border-bottom-left-radius: 50px;
  background-color: var(--dark-blue);
  height: 88%;
  display: flex;
`;
// Hero text
const HeroTextWrapper = styled.section`
  padding: 2rem 1rem;
  padding-top: 5rem;
  flex: 1;
  h1 {
    span {
      color: var(--light-grey);
    }
  }
  p {
    color: var(--light-grey);
    margin: 2rem 0;
    span {
      color: #fff;
      font-weight: 700;
    }
  }
  h6 {
    display: flex;
    margin-bottom: 2rem;
    span {
      margin-right: 1rem;
    }
  }
`;
// Hero Illustrations
const HeroIllustrationWrapper = styled.section`
  display: flex;
  flex: 1;
  position: relative;
  align-items: end;
`;

// Bottom Logos
const BottomLogosWrapper = styled.section`
  background-color: #fff;
  padding: 2rem;
  height: 12%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    display: inline-block;
    width: 120px;
    height: 30px;
    display: grid;
    place-items: center;
    img {
      filter: grayscale(100%);
    }
  }
`;

const Hero = () => {
  return (
    <SectionWrapper>
      {/* Top Header Section */}
      <TopSectionWrapper>
        {/* Hero Text */}

        <HeroTextWrapper>
          <h1 className="heading-text">
            Ambitions <br />
            <span>beyond borders</span>
          </h1>

          <p className="subheading-text">
            It’s not really time travel, but with Zolve you can apply for a{" "}
            <span>U.S. bank account & U.S. Credit Card</span> even before you
            set foot in America!
          </p>

          <h6 className="subheading-text">
            <span className="center">
              <BsCheck2Circle />
            </span>
            Zero application fees
          </h6>

          <Btn1 title="Get it Started" size="lg" />
        </HeroTextWrapper>

        {/* Hero Illustrations */}
        <HeroIllustrationWrapper>
          {/* Card */}
          <RotatingCard />
          {/* Video */}
          <VideoMock />
        </HeroIllustrationWrapper>
      </TopSectionWrapper>

      {/* Bottom Logos */}
      <BottomLogosWrapper>
        <a href="#">
          <img src="/assets/hero/accel.png" alt="Accel" />
        </a>
        <a href="#">
          <img src="/assets/hero/bloomberg.png" alt="Bloomberg" />
        </a>
        <a href="#">
          <img src="/assets/hero/business-today.png" alt="Business Today" />
        </a>
        <a href="#">
          <img src="/assets/hero/forbes.png" alt="Forbes" />
        </a>
        <a href="#">
          <img src="/assets/hero/inc42.png" alt="Inc42" />
        </a>
      </BottomLogosWrapper>
    </SectionWrapper>
  );
};

export default Hero;
