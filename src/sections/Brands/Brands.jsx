import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;
  text-align: center;
  h1 {
    font-size: 24px;
    line-height: 28px;
  }
`;

const BrandWrapper = styled.section`
  span {
    img {
      width: 100px;
      height: 100px;
      margin: 2rem 1rem;
    }
  }
`;

const Brands = () => {
  return (
    <Wrapper>
      <h1>Some of the brands you love</h1>
      {/* Brands */}
      <BrandWrapper>
        <span>
          <img src="/assets/brands/tbrand1.png" alt="" />
        </span>
        <span>
          <img src="/assets/brands/tbrand3.png" alt="" />
        </span>
        <span>
          <img src="/assets/brands/tbrand4.png" alt="" />
        </span>
        <span>
          <img src="/assets/brands/tbrand5.png" alt="" />
        </span>
        <span>
          <img src="/assets/brands/tbrand6.png" alt="" />
        </span>
        <span>
          <img src="/assets/brands/tbrand7.png" alt="" />
        </span>
      </BrandWrapper>
    </Wrapper>
  );
};

export default Brands;
