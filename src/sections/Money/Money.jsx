import React from "react";
import styled from "styled-components";
import { TiTickOutline } from "react-icons/ti";

const Wrapper = styled.div`
  /* padding: 0 8rem 5rem; */
  position: relative;
`;
const Heading = styled.section`
  text-align: center;
  margin-bottom: 5rem;
  h1 {
    font-size: 50px;
    color: #e83c41;
    line-height: 70px;
    letter-spacing: 0px;
    font-weight: 700;
    span {
      color: #000;
    }
  }
  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
  }
`;

const FeatureList = styled.section`
  padding: 0rem 10rem 3rem;
  background-color: #f0f5f5;
`;

const HorizontalMockup = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  top: -30px;
  img {
    max-width: 500px;
  }
`;
const ListContainer = styled.section`
  display: flex;
  .col {
    margin: 0 1rem;
  }
`;
const ListItem = styled.section`
  display: flex;
  align-items: start;
  margin-bottom: 2rem;
  /* Icon */
  .list-icon {
    background-color: #000;
    color: #fff;
    border-radius: 40px;
    font-size: 1.25rem;
    border-top-right-radius: 0;
    padding: 0.045rem;
    margin-right: 15px;
  }
  p {
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;

    span {
      font-weight: 700;
    }
  }
`;

const Money = () => {
  return (
    <Wrapper>
      {/* Heading */}
      <Heading>
        <h1>
          Money <span>at your</span> fingertips
        </h1>
        <p>
          A powerful new-age online app to manage your money on-the-go. <br />{" "}
          No need to go to a physical branch.
        </p>
      </Heading>

      {/* Feature List */}
      <FeatureList>
        {/* Horizontal Mockup */}
        <HorizontalMockup>
          <img src="/assets/money/onflr.png" alt="" />
        </HorizontalMockup>

        {/* ListContainer */}
        <ListContainer>
          {/* Col 1 */}
          <section className="col">
            <ListItem>
              {/* Icon */}
              <span className="list-icon">
                <TiTickOutline />
              </span>
              {/* Text */}
              <p>
                <span className="bold-text">Payment alerts: </span>
                You don’t have to track your money, because we are
              </p>
            </ListItem>
            <ListItem>
              {/* Icon */}
              <span className="list-icon">
                <TiTickOutline />
              </span>
              {/* Text */}
              <p>
                <span className="bold-text">
                  Payment reminders and auto pay:
                </span>{" "}
                Start building (credit) history by paying bills on time
              </p>
            </ListItem>
          </section>
          {/* Col 2 */}
          <section className="col">
            <ListItem>
              {/* Icon */}
              <span className="list-icon">
                <TiTickOutline />
              </span>
              {/* Text */}
              <p>
                <span className="bold-text">Seamless payments: </span>
                Connect to Apple pay, Google pay, Venmo to pay anyone, anywhere
              </p>
            </ListItem>
            <ListItem>
              {/* Icon */}
              <span className="list-icon">
                <TiTickOutline />
              </span>
              {/* Text */}
              <p>
                <span className="bold-text">Direct Deposits: </span>
                Accept your salary/stipend directly into your account
              </p>
            </ListItem>
          </section>
        </ListContainer>
      </FeatureList>
    </Wrapper>
  );
};

export default Money;
