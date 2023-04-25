import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/images/logo_01.png';
import facebook from '../assets/icons/face-icon.png';
import insta from '../assets/icons/insta.png';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  const isMain = location.pathname === '/';

  return (
    <Wrapper id='nav'>
      <div className='desktop-menu-wrapper'>
        {isMain ? (
          <>
            <div className='logo-wrapper'>
              <Link
                className='logo'
                to='top'
                spy={true}
                hashSpy={true}
                smooth={true}
                offset={-120}
                duration={100}
              >
                <img src={logo} alt='himzobt' />
              </Link>
            </div>
            <div className='desktop-menu'>
              <Link
                className='link'
                activeClass='active'
                to='himzes'
                spy={true}
                hashSpy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                Gépi hímzés
              </Link>

              <Link
                className='link'
                activeClass='active'
                to='rolunk'
                spy={true}
                hashSpy={true}
                offset={-100}
                smooth={true}
                duration={100}
              >
                Rólunk
              </Link>
              <Link
                className='link'
                activeClass='active'
                to='kapcsolat'
                spy={true}
                hashSpy={true}
                offset={-100}
                smooth={true}
                duration={100}
              >
                Kapcsolat
              </Link>
              <div className='social-wrapper'>
                <a
                  href='https://www.facebook.com/profile.php?id=100057207260220'
                  className='social'
                >
                  <img src={facebook} alt='facebook' />
                </a>
                <a href='https://www.instagram.com/himzobt/' className='social'>
                  <img src={insta} alt='insta' />
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='desktop-menu-wrapper'>
              <div className='logo-wrapper'>
                <a className='logo' href='/'>
                  <img src={logo} alt='' />
                </a>
              </div>
              <div className='desktop-menu'>
                <a href='/#himzes' className='link'>
                  Gépi hímzés
                </a>
                <a href='/#rolunk' className='link'>
                  Rólunk
                </a>
                <a href='/#kapcsolat' className='link'>
                  Kapcsolat
                </a>
                <div className='social-wrapper'>
                  <a
                    href='https://www.facebook.com/profile.php?id=100057207260220'
                    className='social'
                  >
                    <img src={facebook} alt='facebook' />
                  </a>
                  <a
                    href='https://www.instagram.com/himzobt/'
                    className='social'
                  >
                    <img src={insta} alt='insta' />
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className='mobile-wrapper'>
        <a className='logo' href='/'>
          <img src={logo} alt='' />
        </a>
        <div className='mobile-nav'>
          <div className='hamburger-ul' onClick={() => setClicked(!clicked)}>
            <div className={`hamburger-1 ${clicked ? 'close-1' : ''}`}></div>
            <div className={`hamburger-2 ${clicked ? 'close-2' : ''}`}></div>
            <div className={`hamburger-3 ${clicked ? 'close-3' : ''}`}></div>
          </div>
          <div className={`mobile-menu ${clicked ? 'menu-active' : ''}`}>
            <div className='nav-items'>
              <a href='/#himzes' className='link'>
                <span
                  className='mobile-menuitem'
                  onClick={() => setClicked(false)}
                >
                  Gépi hímzés
                </span>
              </a>
              <a href='/#rolunk' className='link'>
                <span
                  className='mobile-menuitem'
                  onClick={() => setClicked(false)}
                >
                  Rólunk
                </span>
              </a>
              <a href='/#kapcsolat' className='link'>
                <span
                  className='mobile-menuitem'
                  onClick={() => setClicked(false)}
                >
                  Kapcsolat
                </span>
              </a>
              <div className='social-wrapper'>
                <a
                  href='https://www.facebook.com/profile.php?id=100057207260220'
                  className='social'
                >
                  <img src={facebook} alt='facebook' />
                </a>
                <a href='https://www.instagram.com/himzobt/' className='social'>
                  <img src={insta} alt='insta' />
                </a>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  height: 80px;
  width: 100%;
  background: white;

  .desktop-menu-wrapper {
    display: flex;
    max-width: 1140px;
    width: 100%;
    height: 100%;
    flex-direction: row;
    list-style: none;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1024px) {
      display: none;
    }
  }

  .logo img {
    height: 40px;
    cursor: pointer;
  }

  .desktop-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    cursor: pointer;

    img {
      height: 35px;
    }

    .social-wrapper {
      display: flex;

      .social {
        height: 35px;
      }
    }

    .link {
      position: relative;
      text-decoration: none;
    }

    a {
      font-family: 'Open Sans', sans-serif;
      font-size: clamp(1rem, 0.96rem + 0.1333vw, 1.125rem);

      button {
        font-size: clamp(1rem, 0.96rem + 0.1333vw, 1.125rem);

        :hover {
          cursor: pointer;
        }
      }
    }

    .active {
      position: relative;
      transition: all 0.3s ease-in-out;
      color: #f1c50e;

      ::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
    }

    a {
      display: flex;
      justify-content: center;
      color: black;
    }
  }

  .mobile-wrapper {
    display: none;
  }

  @media (max-width: 1024px) {
    .mobile-wrapper {
      display: flex;
      width: 100%;
      height: 80px;
      align-items: center;
      justify-content: space-between;
      padding-inline: 5%;
    }

    .hamburger-ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-evenly;
      width: 32px;
      height: 35px;
      cursor: pointer;
    }

    .hamburger-1,
    .hamburger-2,
    .hamburger-3 {
      width: 30px;
      height: 5px;
      transition: all 0.3s ease-in-out;
      background-color: black;
    }

    .close-1 {
      transform: rotate(45deg) translateY(8px);
    }
    .close-3 {
      transform: rotate(-45deg) translateY(-9px) translateX(0.5px);
    }
    .close-2 {
      display: none;
    }

    img {
      height: 35px;
    }

    .mobile-menu {
      position: absolute;
      top: 80px;
      right: 0;
      display: flex;
      flex-direction: column;
      background-color: white;
      width: 100%;
      height: calc(100vh - 80px);
      justify-content: space-evenly;
      transform: translateX(100%);
      transition: all 0.3s ease-in-out;
      list-style: none;

      .link {
        text-decoration: none;
      }

      .btn {
        text-decoration: none;
      }

      .nav-items {
        display: flex;
        flex-direction: column;
        height: 50vh;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
      }
    }

    .header-bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 15%;
      background-color: white;

      p {
        color: black;
      }

      img {
        padding-right: 0.5rem;
      }
      span {
        font-weight: 700;
      }
    }

    .menu-active {
      transform: translateX(0);
    }

    .mobile-menuitem {
      font-weight: 700;
      position: relative;
      width: 100%;
      transition: all 0.3s ease-in-out;
      text-decoration: none;
      font-size: 1.5rem;
      color: black;
    }
    .social-wrapper {
      display: flex;

      .social {
        height: 35px;
      }
    }
  }
`;
