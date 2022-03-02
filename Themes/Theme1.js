import { useTheme } from "next-themes";
import Image from "next/image";
import styled from "styled-components";

export default function Theme1({title,description,button,themeImg, ifRowReverse,ifJustifyEnd}) {
    const { resolvedTheme } = useTheme();
  return (
    <>
      <div className="container">
        <Wrap className={`${ifRowReverse && "ifRowReverse ifColumnReverse"}`}>
            <TextContent>
                <h1 style={{ color: resolvedTheme === 'dark' ? "white" : "black" }}>{title}</h1>
                <p style={{ color: resolvedTheme === 'dark' ? "rgba(249,249,249,0.8)" : "black" }}>{description}</p>
                <button type="button" role={"link"}>{button}</button>
            </TextContent>
            <ImageContent className={`${ifJustifyEnd && "ifJustifyEnd"}`}><Image src={themeImg} alt="theme/image" priority decoding="async" objectFit="cover" /></ImageContent>
        </Wrap>          
      </div>
    </>
  );
};

const Wrap = styled.div`    
    padding: 2rem 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 1200px){
        padding: 2rem 0;
    }
    @media screen and (max-width: 991px){
        flex-direction: column;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        text-align: center;
    }

    div{
        width: 48%;
        opacity: 1;
        z-index: 1500;
        flex: 0 1 auto;
        display: grid;
        align-items: center;
        align-content: center;

        @media screen and (max-width: 991px){
            width: auto;
            max-width: 600px;
            justify-items: center;
        }
        @media screen and (max-width: 550px){
            width: auto;
            max-width: fit-content;
            justify-items: center;
        }
    }
`;
const TextContent = styled.div`
    justify-items: start;

    h1 {
        font-size: 2rem;
        font-weight: 700;
        font-style: normal;
        line-height: 1.15;

        @media screen and (max-width: 991px){
            font-size: 1.7rem;
        }
        @media screen and (max-width: 550px){
            font-size: 1.3rem;
        }
        @media screen and (max-width: 375px){
            font-size: 1rem;
        }
    }
    p {
        font-size: 1rem;
        font-weight: 500;
        text-align: justify;
        margin: 2vh 0 3vh 0;
        
        @media screen and (max-width: 991px){
            font-size: 0.9rem;
        }
        @media screen and (max-width: 550px){
            font-size: 0.75rem;
        }
    }

    button{
        font-size: 0.9rem;
        font-weight: 500;
        padding: 0.7rem 2rem;
        border-radius: 0.5rem;
        transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
        color: #fff;
        background-color: #0070f3;
        border: 0.5px solid #0071f1;
        box-shadow: 0 4px 14px 0 rgb(0 118 255 / 29%);
        @media screen and (max-width: 767px) {
            font-size: 0.7rem;
            padding: 0.6rem 1.5rem;
        }
        &:hover {
            background: #005df3;
            box-shadow: 0 0 5px rgb(0 118 255 / 85%);
        }
        &:active{
            transform: scale(0.85);
        }
    }
`;
const ImageContent = styled.div`
    justify-items: end;
    @media screen and (max-width: 991px){
        margin-top: 3vh;
    }
    span{
        img{
            z-index: 1500;
            width: 100% !important;
            height: 37vh !important;
            
            @media screen and (max-width: 991px){
                height: 35vh !important;
                object-fit: contain !important;
            }
        }
    }
`;