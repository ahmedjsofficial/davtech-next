import Image from "next/image";
import styled from "styled-components";
import Svgs from "../Svgs";

export default function WhyPeople({
  maintitle,
  subTitle,
  choose: { performance, maintenance, reliable, secure },
}) {
  return (
    <>
      <div className="container">
        <Wrap className="d-grid">
          <Titles>
            <h2>{maintitle}</h2>
            <h1>{subTitle}</h1>
          </Titles>
          <ChooseGrid>
            <ChooseBox className="d-flex-blox-column">
              <div className="d-flex-blox-column polygone_1">
                <Image
                  src={Svgs.performance}
                  alt="svg/choose"
                  decoding="async"
                  priority
                  width={55}
                  height={55}
                  objectFit="contain"
                />
              </div>
              <h2 className="polygone_1">{performance.title}</h2>
              <p>{performance.description}</p>
            </ChooseBox>
            <ChooseBox className="d-flex-blox-column">
              <div className="d-flex-blox-column polygone_2">
                <Image
                  src={Svgs.maintenance}
                  alt="svg/choose"
                  decoding="async"
                  priority
                  width={55}
                  height={55}
                  objectFit="contain"
                />
              </div>
              <h2 className="polygone_2">{maintenance.title}</h2>
              <p>{maintenance.description}</p>
            </ChooseBox>
            <ChooseBox className="d-flex-blox-column">
              <div className="d-flex-blox-column polygone_3">
                <Image
                  src={Svgs.reliable}
                  alt="svg/choose"
                  decoding="async"
                  priority
                  width={55}
                  height={55}
                  objectFit="contain"
                />
              </div>
              <h2 className="polygone_3">{reliable.title}</h2>
              <p>{reliable.description}</p>
            </ChooseBox>
            <ChooseBox className="d-flex-blox-column">
              <div className="d-flex-blox-column polygone_4">
                <Image
                  src={Svgs.secured}
                  alt="svg/choose"
                  decoding="async"
                  priority
                  width={55}
                  height={55}
                  objectFit="contain"
                />
              </div>
              <h2 className="polygone_4">{secure.title}</h2>
              <p>{secure.description}</p>
            </ChooseBox>
          </ChooseGrid>
        </Wrap>
      </div>
    </>
  );
}

const Wrap = styled.div`
  padding: 5rem 0;
  text-align: center;
`;
const Titles = styled.div`
  h2 {
    color: #0070f3;
    font-weight: 600;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    @media screen and (max-width: 1200px) {
      font-size: 1.7rem;
    }
  }
`;
const ChooseGrid = styled.div`
  display: grid;
  gap: 0 25px;
  margin-top: 5vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 1200px) {
    gap: 25px;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    place-content: center;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;    
  }
`;
const ChooseBox = styled.div`
cursor: pointer;
  height: 43vh;
  object-fit: fill;
  border: 1px solid #fafafa;
  padding: 1rem;
  background-clip: border-box;
  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(1rem);
  transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 50%) 0 0 0.1rem;
  div {
    width: 250px;
    height: 250px;
    transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    backdrop-filter: blur(20px);
    clip-path: polygon(
      92.3205% 40%,
      93.7939% 43.1596%,
      94.6962% 46.527%,
      95% 50%,
      94.6962% 53.473%,
      93.7939% 56.8404%,
      92.3205% 60%,
      79.8205% 81.6506%,
      77.8209% 84.5064%,
      75.3558% 86.9715%,
      72.5% 88.9711%,
      69.3404% 90.4445%,
      65.973% 91.3468%,
      62.5% 91.6506%,
      37.5% 91.6506%,
      34.027% 91.3468%,
      30.6596% 90.4445%,
      27.5% 88.9711%,
      24.6442% 86.9715%,
      22.1791% 84.5064%,
      20.1795% 81.6506%,
      7.67949% 60%,
      6.20615% 56.8404%,
      5.30384% 53.473%,
      5% 50%,
      5.30384% 46.527%,
      6.20615% 43.1596%,
      7.67949% 40%,
      20.1795% 18.3494%,
      22.1791% 15.4936%,
      24.6442% 13.0285%,
      27.5% 11.0289%,
      30.6596% 9.55551%,
      34.027% 8.65321%,
      37.5% 8.34936%,
      62.5% 8.34936%,
      65.973% 8.65321%,
      69.3404% 9.55551%,
      72.5% 11.0289%,
      75.3558% 13.0285%,
      77.8209% 15.4936%,
      79.8205% 18.3494%
    );

    @media screen and (max-width: 1200px) {
      width: 200px;
      height: 200px;
    }
  }
  h2 {
    font-size: 1.7rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (max-width: 1200px) {
      font-size: 1.3rem;
    }
  }
  p {
    font-weight: 500;
    color: #000;
    font-size: 0.85rem;
    margin-top: 1vh;
  }

  &:hover {
    opacity: 1;
    z-index: 2500;
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 20%) 0 0 1rem;
    div{
      transform: scale(0.91);
    }
  }

  @media screen and (max-width: 767px) {
    padding: 1rem 1rem;
    height: fit-content;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 1rem 2rem 1rem;
    height: fit-content;
  }
  
  
`;
