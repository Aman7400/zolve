import React from "react";
import styled from "styled-components";
import { GrSubtract } from "react-icons/gr";

const Wrapper = styled.div`
  padding: 5rem 10rem;
  .bg-black {
    height: 50%;
    background-color: #000;
    width: 100%;
  }
  .content {
  }
`;

const Heading = styled.section`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 50px;
    line-height: 70px;
    font-weight: 700;
    margin-bottom: 2rem;
    span {
      color: #e83c41;
    }
  }
  .more-blogs {
    margin-top: 1.5rem;
    span {
      margin-right: 1rem;
    }
    a {
      text-decoration: none;
    }
  }
`;

const CardContainer = styled.section`
  display: flex;
  section {
    flex: 1;
  }
`;

const BlogCard = styled.section``;

const WhatsNew = () => {
  return (
    <Wrapper>
      {/* Black BG */}
      <section className="bg-black"></section>
      {/* Content */}
      <section className="content">
        {/* Heading */}
        <Heading>
          <h1>
            What’s <span>new</span> with us
          </h1>
          {/* Visit All Blogs Link */}
          <section className="more-blogs">
            <span>
              <GrSubtract />
            </span>
            <a href="#">Visit all blogs</a>
          </section>
        </Heading>
        {/* Cards */}
        <CardContainer>
          {/* Card 1 */}
          <BlogCard>
            {/* Image */}
            <section className="blog-card-img">
              <img src="/assets/WhatsNew/blog1.jpg" alt="" />
            </section>
            {/* Text */}
            <section className="blog-card-text">
              <h1>How to Avoid Holiday Debt Read Now Banner</h1>

              <p className="center">
                {" "}
                <span className="center">
                  <GrSubtract />
                </span>{" "}
                Know more about Us
              </p>
            </section>
          </BlogCard>
          {/* Card 2 */}
          <BlogCard>
            {/* Image */}
            <section className="blog-card-img">
              <img src="/assets/WhatsNew/blog2.jpg" alt="" />
            </section>
            {/* Text */}
            <section className="blog-card-text">
              <h1>How to Avoid Holiday Debt Read Now Banner</h1>

              <p className="center">
                {" "}
                <span className="center">
                  <GrSubtract />
                </span>{" "}
                Know more about Us
              </p>
            </section>
          </BlogCard>
          {/* Card 3 */}
          <BlogCard>
            {/* Image */}
            <section className="blog-card-img">
              <img src="/assets/WhatsNew/blog3.jpg" alt="" />
            </section>
            {/* Text */}
            <section className="blog-card-text">
              <h1>How to Avoid Holiday Debt Read Now Banner</h1>

              <p className="center">
                {" "}
                <span className="center">
                  <GrSubtract />
                </span>{" "}
                Know more about Us
              </p>
            </section>
          </BlogCard>
        </CardContainer>
      </section>
    </Wrapper>
  );
};

export default WhatsNew;
