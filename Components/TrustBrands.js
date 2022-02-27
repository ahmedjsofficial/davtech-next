import Image from "next/image";
import styled from "styled-components";
import { TBrandsAPI } from "./Svgs";

export default function TrustBrands() {
  return (
    <>
      <Wrap>
        <Title>TRUSTED BY THE BEST TEAMS</Title>
        <Brands>
            {TBrandsAPI?.map((val, indx) => (
                <li key={indx}><Image src={val.brandSvg} alt="brands/names" priority decoding="async" width={45} height={45} /></li>
            ))}          
        </Brands>
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
    width: 75vw;
    margin: 0 auto;
    padding: 5rem 0;
    position: relative;
    @media screen and (max-width: 1200px){
        padding: 3.5rem 0;
    }
`;
const Title = styled.h1`
    text-align: center;
    margin-bottom: 3vh;
    font-size: 1.5rem;
    font-weight: 800;

    @media screen and (max-width: 767px){
        font-size: 1rem;
    }
`;
const Brands = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    li{
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        margin: 0 0.5rem;

        @media screen and (max-width: 767px){
            margin: 0.34em;
        }

        span{
            img{
                width: 35px !important;
                height: 35px !important;
            }
        }
    }
`;