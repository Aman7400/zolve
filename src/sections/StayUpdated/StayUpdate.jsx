import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 5rem;
  display: flex;
`;

const TextWrapper = styled.section`
  flex: 1;
  display: flex;
  padding-left: 4rem;
  .mailbox-icon {
    img {
      height: 70px;
      width: 80px;
    }
  }
  .mailbox-text {
    margin-left: 1rem;
    h1 {
      margin-bottom: 0.25rem;
    }
    p {
      line-height: 24px;
      font-size: 16px;
      color: #2c2c2c;
    }
  }
`;
const EmailWrapper = styled.section`
  flex: 1;
  padding-left: 4rem;

  input {
    outline: none;
    display: block;
    padding: 1rem;
    padding-left: 0;
    padding-top: 0;
    width: 70%;
    border: none;
    border-bottom: 1px solid #b5b5b5;
    font-family: inherit;
    ::placeholder {
      font-weight: 500;
      font-size: 16px;
    }
  }

  button {
    background-color: #2c2c2c;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    padding: 1rem 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
    line-height: 24px;
    outline: none;
    border: none;
  }
`;

const StayUpdate = () => {
  return (
    <Wrapper>
      {/* Text Container */}
      <TextWrapper>
        {/* Mail Box Icon */}
        <span className="mailbox-icon">
          <img src="/assets/hero/newsletter.svg" alt="" />
        </span>
        {/* Text */}
        <section className="mailbox-text">
          <h1>Stay updated with all things Zolve!</h1>
          <p>
            Subscribe for latest happenings and updates at Zolve. Don’t <br />{" "}
            worry, we won’t spam!
          </p>
        </section>
      </TextWrapper>
      {/* Email */}
      <EmailWrapper>
        <form action="">
          {/* <label htmlFor="#email">Your Email Address</label> */}
          <input name="email" placeholder="Your email address*" type="email" />
          <button>Stay Updated</button>
        </form>
      </EmailWrapper>
    </Wrapper>
  );
};

export default StayUpdate;
