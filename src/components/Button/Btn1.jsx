import React from "react";
import styled from "styled-components";
import { BsArrowUpRight } from "react-icons/bs";

const Wrapper = styled.a`
  text-decoration: none;
  color: #fff;
  background-image: linear-gradient(96deg, #fc6076 0%, #ff9a44 100%);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
`;

const Btn1 = ({ title, variant, size }) => {
  return (
    <Wrapper
      className={size === "lg" ? "cta-btn-lg" : "cta-btn-md"}
      variant={variant}
    >
      {title}{" "}
      <span>
        {" "}
        <BsArrowUpRight />
      </span>
    </Wrapper>
  );
};

export default Btn1;
