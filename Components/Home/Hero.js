import styled, { keyframes } from "styled-components";

export default function Hero({
  title1,
  title2,
  title3,
  button1,
  button2,
  description,
}) {
  return (
    <>
      <div className="container">
        <HeroContent className="d-flex-blox-column">
          <Titles className="d-grid">
            <h1>
              {title1}
              <span>.</span>
            </h1>
            <h1>
              {title2}
              <span>.</span>
            </h1>
            <h1>
              {title3}
              <span>.</span>
            </h1>
          </Titles>
          <ButtonGroup className="d-flex-between">
            <button type="button">{button1}</button>
            <button type="button">{button2}</button>
          </ButtonGroup>
          <HeroText>{description}</HeroText>
        </HeroContent>
      </div>
    </>
  );
}

const animation_1 = keyframes`
    0%, 16.667%, 100% {
        opacity: 1;
    } 33.333%, 83.333% {
        opacity: 0;
    }
`;
const animation_2 = keyframes`
    0%, 100% {
        opacity: 0;
    }
    33.333%, 50% {
        opacity: 1;
    }
    16.667%, 66.667% {
        opacity: 0;
    }
`;
const animation_3 = keyframes`
    0%, 50%, 100% {
        opacity: 0;
    }
    66.667%, 83.333% {
        opacity: 1;
    }
`;
const HeroContent = styled.div`
  position: relative;
  height: 85vh;
  opacity: 1;
  z-index: 1500;
  @media screen and (max-width: 1200px) {
    height: 75vh;
    justify-content: flex-end;
  }
  @media screen and (max-width: 991px) {
    height: 65vh;
  }
`;
const Titles = styled.div`
  h1 {
    color: var(--color-black);
    font-size: 8rem;
    font-weight: 900;
    position: relative;
    opacity: 1;
    z-index: 1300;
    filter: brightness(1.1);
    text-shadow: rgb(0 0 0 / 5%) 0px 0px 1px;

    &:nth-child(2) {
      margin-block-start: -0.3em;
      margin-block-end: -0.3em;

      @media screen and (max-width: 1200px) {
        margin-block-start: -0.2em;
        margin-block-end: -0.2em;
      }
    }

    &::before {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      opacity: 1;
      z-index: 1500;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:nth-child(1)::before {
      content: "Innovation.";
      background-image: linear-gradient(90deg, #007cf0, #00dfd8);
      animation: 8s ease infinite normal running 0s ${animation_1};
    }
    &:nth-child(2)::before {
      content: "Creativity.";
      background-image: linear-gradient(90deg, #7928ca, #ff0080);
      animation: 8s ease infinite normal running 0s ${animation_2};
    }
    &:nth-child(3)::before {
      content: "Tech.";
      background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
      animation: 8s ease infinite normal running 0s ${animation_3};
    }

    @media screen and (max-width: 1200px) {
      font-size: 6rem;
    }
    @media screen and (max-width: 767px) {
      font-size: 5rem;
    }
    @media screen and (max-width: 550px) {
      font-size: 4rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 3.35rem;
    }
  }
`;
const ButtonGroup = styled.div`
  width: 29vw;
  margin: 1.5vh 0;
  @media screen and (max-width: 1200px) {
    width: 100%;
    justify-content: space-evenly;
  }
  button {
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.7rem 2rem;
    border-radius: 0.5rem;
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;

    @media screen and (max-width: 767px) {
      font-size: 0.7rem;
      padding: 0.6rem 1.5rem;
    }
    &:nth-child(1) {
      color: var(--color-white);
      background-color: #0070f3;
      border: 0.5px solid #0071f1;
      box-shadow: 0 4px 14px 0 rgb(0 118 255 / 29%);

      &:hover {
        background: #005df3;
        box-shadow: 0 0 5px rgb(0 118 255 / 85%);
      }
    }
    &:nth-child(2) {
      color: #000;
      background: #fdfdfd;
      border: 1px solid #dbdbdb;
      box-shadow: 0 1px 5px rgb(0 0 0 / 7%);

      &:hover {
        background: rgb(242, 246, 255);
      }
    }

    &:active {
      transform: scale(0.85);
    }
  }
`;
const HeroText = styled.div`
  max-width: 650px;
  text-align: center;
  font-weight: 500;
  font-size: 0.9rem;
  color: #3c3c3c;
  text-shadow: rgb(0 0 0 / 15%) 0px 10px 40px;

  @media screen and (max-width: 767px) {
    max-width: 450px;
  }
  @media screen and (max-width: 475px) {
    font-size: 0.75rem;
  }
`;
