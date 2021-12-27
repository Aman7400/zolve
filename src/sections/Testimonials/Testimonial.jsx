import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10rem 8rem;
`;
const Heading = styled.section`
  h1 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 0.5rem;
    span {
      color: #e83c41;
      font-weight: bold;
    }
  }
  p {
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
  }
`;
const TestimonialCardsWrapper = styled.section`
  padding-top: 5rem;
  display: flex;
`;
const TestimonialCard = styled.section`
  width: 370px;
  height: 400px;
  padding: 1rem;
`;

const Testimonial = () => {
  return (
    <Wrapper>
      {/* Heading */}
      <Heading>
        <h1 className="heading-text">
          Don’t take <span>our word</span> for it.
        </h1>
        <p>Join the 50,000 + users who love us already!</p>
      </Heading>
      {/* Cards */}
      <TestimonialCardsWrapper>
        {/* Testimonial Card 1 */}
        <TestimonialCard>
          {/* Image */}
          <section className="test-img">
            <img src="/assets/testimonial/sarthak.jpg" alt="" />
          </section>
          {/* Body */}
          <section className="test-body">
            Loved the onboarding experience with Zolve! Super quick sign-up
            process and the app is very seamless to use. The cherry on top - I
            got a high credit limit instantly!
          </section>
          {/* By */}
          <section className="test-by">
            <h1>Sarthak Shah</h1>
            <p>Infosys</p>
          </section>
        </TestimonialCard>
        {/* Testimonial Card 2 */}
        <TestimonialCard>
          {/* Image */}
          <section className="test-img">
            <img src="/assets/testimonial/renumakkar.jpg" alt="" />
          </section>
          {/* Body */}
          <section className="test-body">
            With Zolve, I was able to take care of all my big ticket purchases
            within the first week of landing in the U.S. Thanks to the high
            credit limit and easy payments!
          </section>
          {/* By */}
          <section className="test-by">
            <h1>Renu Makkar</h1>
            <p>Boeing</p>
          </section>
        </TestimonialCard>
        {/* Testimonial Card 3 */}
        <TestimonialCard>
          {/* Image */}
          <section className="test-img">
            <img src="/assets/testimonial/aashish.jpg" alt="" />
          </section>
          {/* Body */}
          <section className="test-body">
            With so much to plan for my U.S. move, I would definitely recommend
            getting a Zolve account before one flies to the U.S. Cannot wait to
            start transacting the moment I land!
          </section>
          {/* By */}
          <section className="test-by">
            <h1>Aashish Rochwani</h1>
            <p>Wipro</p>
          </section>
        </TestimonialCard>
      </TestimonialCardsWrapper>
    </Wrapper>
  );
};

export default Testimonial;
