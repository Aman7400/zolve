import React from "react";
import styled from "styled-components";

const CardWrapper = styled.section`
  background-color: transparent;
  width: 200px;
  height: 315px;
  perspective: 1000px;
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  &:hover .card-inner {
    transform: rotateY(180deg);
  }
  .front-card,
  .back-card {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .back-card {
    transform: rotateY(180deg);
  }
`;

const RotatingCard = () => {
  return (
    <CardWrapper>
      <section className="card-inner">
        {/* Front */}
        <section className="front-card">
          <img src="/assets/hero/cblur-card.png" alt="" />
        </section>
        {/* Back */}
        <section className="back-card">
          <img src="/assets/hero/cblur-card-b.png" alt="" />
        </section>
      </section>
    </CardWrapper>
  );
};

export default RotatingCard;
