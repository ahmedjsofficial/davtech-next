import Image from "next/image";
import styled from "styled-components";
import Svgs from "./Svgs";
import TrustBrands from "./TrustBrands";

export default function Footer() {
  return (
    <>
      <TrustBrands />
      <DavFooter>
        <Container>
          <Content>
            <FooterTitle>Quick Links</FooterTitle>
              <li><span>How it works</span></li>
              <li><span>Security</span></li>
              <li><span>Pricing</span></li>
              <li><span>Resources</span></li>
              <li><span>Report a Bug</span></li>    
          </Content>
          <Content>
            <FooterTitle>About us</FooterTitle>
              <li><span>About US</span></li>
              <li><span>JOBs</span></li>
              <li><span>Our Teams</span></li>
              <li><span>Testimonials</span></li>
              <li><span>News & Press</span></li>
          </Content>
          <Content>
            <FooterTitle>Legal</FooterTitle>
              <li><span>Privacy Policy</span></li>
              <li><span>Terms of Service</span></li>
              <li><span>Trademark Policy</span></li>
              <li><span>Inactivity Policy</span></li>
              <li><span>DMCA Policy</span></li>
          </Content>
        </Container>
        
        <FooterBottom className="container d-flex-between">
          <div className="footer_copyright">
            <div className="brand_footer">
              <Image src={Svgs.blackLogo} alt="img/logo" width={41} height={35} priority decoding="async" objectFit="contain" />
              <h3>Dauptech</h3>
            </div>
            <p>Copyright &copy; 2022 Davuptech Inc. All rights reserved.</p>
          </div>
          <div className="d-flex-blox-row">
            <li className="d-flex"><Image src={Svgs.facebook} alt="facebook/icon" width={29} height={29} objectFit="contain" priority decoding="async" /></li>
            <li className="d-flex"><Image src={Svgs.github} alt="github/icon" width={29} height={29} objectFit="contain" priority decoding="async" /></li>
            <li className="d-flex"><Image src={Svgs.twitter} alt="twitter/icon" width={29} height={29} objectFit="contain" priority decoding="async" /></li>
          </div>
          <div className="d-flex">
            <button type="button">Dark</button>
          </div>
        </FooterBottom>
      </DavFooter>
    </>
  );
}

const FooterBottom = styled.div`
  max-width: 750px;
  margin: 5vh auto 0 auto;

  @media screen and (max-width: 600px){
    justify-content: center;
    flex-direction: column-reverse;
    margin: 3vh auto 0 auto;
  }

  div{
    @media screen and (max-width: 600px){
      &:nth-child(2){
        margin: 1vh 0;
      }

      li{
        span{
          img{
            width: 21px !important;
            height: 21px !important;
          }
        }
      }
    }
    li:nth-child(2){
      margin: 0 0.7rem;
    }
    li{
      cursor: pointer;
    }
  }

  > .footer_copyright{
    > .brand_footer{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      
      @media screen and (max-width: 600px){
        justify-items: center;
        justify-content: center;
        text-align: center;

        span{
          img{
            width: 31px !important;
            height: 31px !important;
          }
        }
      }
      h3{
        color: #000;
        font-weight: 700;
        margin-left: 0.35rem;
        text-transform: uppercase;
      }
    }
    p{
      font-weight: 500;
      font-size: 0.9rem;
    }
  }
`;

const DavFooter = styled.footer`
  opacity: 1;
  z-index: 1500;
  min-height: auto;
  overflow: hidden;
  position: relative;
  padding: 4rem 0;
  border: 1px solid #fafafa;
  background-clip: border-box;
  backdrop-filter: blur(1rem);
  background: rgba(255, 255, 255, 1);
  transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  box-shadow: rgb(0 0 0 / 50%) 0 0 0.1rem;

  @media screen and (max-width: 767px){
    padding: 2rem 0;
  }
`;
const Container = styled.div`
  width: 31rem;
  margin: 0 auto;

  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 550px){
    width: 20rem;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 350px){
    width: 17rem;
  }
  @media screen and (max-width: 319px){
    width: auto;
    padding: 0 1rem;
  }
`;
const FooterTitle = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 2vh;

  @media screen and (max-width: 550px){
    margin-bottom: 1vh;
  }
`;
const Content = styled.div`
  width: 9rem;
  display: grid;
  align-items: flex-start;
  justify-items: flex-start;
  
  @media screen and (max-width: 550px){
    width: 100%; 
    &:nth-child(3){
      margin: 3vh 0;
    }
  }

  li{
    cursor: pointer;
    padding: 0.15rem 0;
    span{
      color: #000;
      font-size: 0.9rem;
    }
  }
`;
