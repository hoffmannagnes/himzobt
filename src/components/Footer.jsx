import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import copyright from '../assets/icons/copyright.png';
import logo from '../assets/images/logo_02.png';
import facebook from '../assets/icons/face-icon.png';
import insta from '../assets/icons/insta.png';

const Footer = () => {
  return (
    <Wrapper>
      <footer className='footer'>
        <div className='container'>
          <div className='footer-logo'>
            <img src={logo} alt='himzobt' />
          </div>

          <div className='social-icons'>
            <a href='https://www.facebook.com/profile.php?id=100057207260220'>
              <img src={facebook} alt='facebook' />
            </a>
            <a href='https://www.instagram.com/himzobt/'>
              <img src={insta} alt='insta' />
            </a>
          </div>
        </div>
        <hr />
        <div className='footer-links'>
          <NavLink to='/impresszum'>Impresszum</NavLink>
          <NavLink to='/adatkezelesi'>Adatkezelési tájékoztató</NavLink>
          <NavLink to='/sutik'>Süti szabályzat</NavLink>

          <p className='copyright'>
            <img src={copyright} alt='copyright' /> Minden jog fenntartva
          </p>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #2b253c;
  width: 100%;
  text-align: center;
  padding: 4rem;

  .footer {
    max-width: 1140px;
    margin: auto;

    .social-icons {
      margin: 1rem 0;
    }

    hr {
      width: 80%;
      margin: auto;
    }

    .footer-links {
      margin-top: 2rem;
      font-size: 1.2rem;
      line-height: 2rem;

      a:hover {
        color: yellow !important;
      }

      .copyright {
        margin: 1rem 0;
      }

      .creator {
        display: flex;
        justify-content: center;

        a {
          color: yellow;
        }
      }
    }
  }

  a {
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
  }

  p {
    color: white;
  }

  .footer-logo {
    img {
      height: 180px;
      margin-bottom: 3rem;
    }
  }

  .social-icons {
    display: flex;
    justify-content: center;

    img {
      height: 30px;
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 470px) {
    .footer-logo img {
      height: 100px;
    }

    .footer-links {
      a,
      .copyright,
      .creator {
        font-size: 1rem;
      }

      .creator {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export default Footer;
