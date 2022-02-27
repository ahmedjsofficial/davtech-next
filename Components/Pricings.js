import Image from "next/image";
import styled from "styled-components";
import Svgs from "./Svgs";

export default function Pricings({title,subTitle,plans}) {
  return (
    <>
      <div className="container">
        <Wrap>
            <Title className="d-grid">
                <h4>{subTitle}</h4>
                <h1>{title}</h1>
            </Title>
            <Grid>
                <PriceBox className="polygone_1">
                    <Image src={Svgs.personCircle} alt="membership/svg" priority decoding="async" width={45} height={45} objectFit="contain" />
                    <h1 className="price">{plans?.membership.price}</h1>
                    <h1 className="title">{plans?.membership.title}</h1>
                    <p className="duration">{plans?.membership.duration}</p>
                    <p className="choose">Choose plan that right for you</p>
                    <button type="button" role={"link"}>Subscribe Now</button>
                </PriceBox>
                <PriceBox className="polygone_2">
                    <Image src={Svgs.server} alt="membership/svg" priority decoding="async" width={45} height={45} objectFit="contain" />
                    <h1 className="price">{plans?.dedicated.price}</h1>
                    <h1 className="title">{plans?.dedicated.title}</h1>
                    <p className="duration">{plans?.dedicated.duration}</p>
                    <p className="choose">Choose plan that right for you</p>
                    <button type="button" role={"link"}>Subscribe Now</button>
                </PriceBox>
                <PriceBox className="polygone_3">
                    <Image src={Svgs.gem} alt="membership/svg" priority decoding="async" width={45} height={45} objectFit="contain" />
                    <h1 className="price">{plans?.private.price}</h1>
                    <h1 className="title">{plans?.private.title}</h1>
                    <p className="duration">{plans?.private.duration}</p>
                    <p className="choose">Choose plan that right for you</p>
                    <button type="button" role={"link"}>Subscribe Now</button>
                </PriceBox>
            </Grid>
        </Wrap>
      </div>
    </>
  );
};
const Wrap = styled.div`
    padding: 3rem 0 1rem 0;
`;
const Title = styled.div`
    h1{
        font-size: 2.5rem;
        background-image: linear-gradient(89.4deg,rgba(194, 0, 39, 1) 0.8%,rgba(10, 35, 104, 1) 99.4%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;
const Grid = styled.div`
    display: grid;
    gap: 25px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 3vh;

    @media screen and (max-width: 767px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 550px){
        grid-template-columns: 1fr;
    }
`;
const PriceBox = styled.div`
    color: rgba(255,255,255,1);
    position: relative;
    text-align: center;
    flex: 1 1 auto;
    padding: 3rem 0;
    opacity: 1;
    z-index: 2000;
    border-radius: 1rem;
    display: grid;
    gap: 21px;
    cursor: pointer;
    align-items: center;
    justify-items: center;
    justify-content: center;
    transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    box-shadow: rgb(0 0 0 / 50%) 0 0 0.1rem;

    &:hover{
        transform: scale(1.05);
    }

    p{
        font-size: 0.85rem;
    }
    > .duration{
        max-width: 170px;
    }
    h1{
        font-size: 2rem;
        @media screen and (max-width: 1200px){
            font-size: 1.5rem;  
        }
    }

    button{
        width: 100%;
        color: #000;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        padding: 0.55rem 0;
        border-radius: 1rem;
        position: relative;
        border: 0.5px solid rgba(255, 255, 255, 0.5);
        background: linear-gradient(rgb(255, 255, 255) 0%, rgb(230, 236, 240) 100%);
        backdrop-filter: blur(0.5rem);
        transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;

        @media screen and (max-width: 1200px){
            font-size: 0.9rem;  
        }

        &:active{
            transform: scale(0.85);
        }
        &:hover{
            background: rgba(230, 236, 240, 0.5);
        }
    }
`;