import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Svgs from "./Svgs";

export default function Navbar() {
  const [showNav, setshowNav] = useState(false);
  const [PopupState, setPopupState] = useState(false);
  const onPopupTrigger = () => setPopupState(!PopupState);
  const onNavTrigger = () =>{
      if(window.scrollY > 100){
          setshowNav(true);
      }else{
          setshowNav(false);
      }
  }
  useEffect(() => {
      const navLink = document.querySelectorAll("#links");
      navLink.forEach(element => {
          element.addEventListener("click", ()=>{
              setPopupState(false);
          })
      });

      window.addEventListener("scroll", onNavTrigger);
      return ()=> {
          window.removeEventListener("scroll", onNavTrigger);
      };
  }, []);
  const LinksAPI = [ { "linkText": "Home", "url": "/" },{ "linkText": "Services", "url": "#" },{ "linkText": "Features", "url": "#" },{ "linkText": "Work", "url": "#" },{ "linkText": "About", "url": "#" },{ "linkText": "Blogs", "url": "#" },{ "linkText": "Contact", "url": "#" } ];

  return (
    <>
      <Header className={`navonFixed ${showNav && "navonStikcy"}`}>
        <Nav className="d-flex-between">
          <Link href={`/`} passHref><a className="nav_brand"><Image src={Svgs.blackLogo} alt="logo/img" priority decoding="async" objectFit="contain" width={51} height={41} /></a></Link>
          <Menu className="d-flex" onpopupShow={PopupState}>
            {LinksAPI.map((link, ind) => (
                <li key={ind}><Link href={link.url} passHref><a className={`${showNav && "navlink-nobg"}`}><span>{link.linkText}</span></a></Link></li>
              ))}
            <li><button type="button" role="button" name="estimate_project">Join US</button></li>
          </Menu>
          <HamburgerMenu onClick={onPopupTrigger}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6H22"/><path d="M2 12H14"/><path d="M2 18H22"/></svg></HamburgerMenu>
        </Nav>
      </Header>
    </>
  );
}
const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 5vh;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: 2500;
  display: flex;
  min-height: auto;
  align-items: center;
  transition: all 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
`;
const HamburgerMenu = styled.div`
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 0.4rem;
  background: rgb(255, 255, 255, 0.6);
  backdrop-filter: blur(1rem);
  box-shadow: 0px 0px 7px rgb(0 0 0 / 3%);
  border: 0.1px solid rgba(0, 0, 0, 0.3);
  display: none;
  
  @media screen and (max-width: 991px){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 31px;
    height: 31px;
  }
  svg{
    width: 27px;
    height: 27px;
    @media screen and (max-width: 991px){
      width: 21px;
      height: 21px;
    }
    path{
      stroke: #000;
      stroke-width: 1.7;
      stop-opacity: 1;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }
`;
const Nav = styled.nav`
  position: fixed;
  top: 2vh;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: 2000;
  width: 85vw;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    width: 95vw;
  }
  @media screen and (max-width: 991px) {
    position: fixed;
    top: 1.5vh;

    > .nav_brand{
      display: flex;
      align-items: center;
      span{
        img{
          width: 41px !important;
          height: 33px !important;
        }
      }
    }
  }
`;

const Menu = styled.ul`
  @media screen and (max-width: 991px){
    position: fixed;
    top: 3.3rem;
    right: 2.5rem;
    width: 11rem;
    z-index: 3000;
    padding: 1rem 0;
    display: flex;
    min-height: auto;
    align-items: flex-start;
    align-content: center;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border-bottom: 0.15rem solid #0070f3;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(0.7rem);
    box-shadow: rgba(0 114 245 / 21%) 0px 0px 0px 0.5px  inset;

    transition: all 350ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
    opacity: ${event => event.onpopupShow ? '1' : '0'};
    visibility: ${event => event.onpopupShow ? 'visible' : 'hidden'};
    transform: ${event => event.onpopupShow ? 'skewY(0deg) rotate(0deg) translateY(0px)' : 'skewY(-5deg) rotate(5deg) translateY(-30px)'};
  }
  li {
    @media screen and (max-width: 991px){
      width: 9rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding: 0.15rem 0;
      border-bottom: 1px solid rgba(0 114 245 / 55%);
    }

    a {
      opacity: 1;
      z-index: 1500;
      margin: 0 0.15rem;
      border-radius: 0.5rem;
      padding: 0.55rem 1rem;
      border: 0.5px solid rgba(255, 255, 255, 0);
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

      span {
        color: #000;
        font-weight: 500;
        font-size: 0.9rem;
        font-style: normal;

        @media screen and (max-width: 991px){
          color: #0070f3;
        }
      }

      &:hover {
        background: rgb(255, 255, 255, 0.1);
        box-shadow: 0px 0px 7px rgb(0 0 0 / 5%);
        border: 0.1px solid rgba(0, 0, 0, 0.1);
      }

      @media screen and (max-width: 991px){
        padding: 0 0;
        &:hover {
          background: none;
          box-shadow: none;
          border: none;
        }
      }
    }
    button {
      color: #fff;
      font-size: 1rem;
      font-weight: 500;
      margin-left: 1rem;
      border-radius: 0.5rem;
      padding: 0.55rem 1rem;
      background-color: #0070f3;
      border: 0.5px solid #0071f1;
      box-shadow: 0 0 15px rgb(0 118 255 / 39%);
      transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
      &:active {
        transform: scale(0.85);
      }
      &:hover {
        background: #005df3;
        box-shadow: 0 0 5px rgb(0 118 255 / 85%);
      }

      @media screen and (max-width: 991px){
        padding: 0.35rem 0.7rem;
        box-shadow: none;
        margin-left: 0rem;
        font-size: 0.8rem;
        border-radius: 0.5rem;
        width: 100%;
      }
    }
  }
`;
