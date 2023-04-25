import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import hero_image from '../assets/images/hero-image.jpg';

const Hero = () => {
  return (
    <Wrapper id='hero'>
      <div className='hero-container'>
        <div className='hero-text'>
          <h1>Gépi hímzés egyedi igények szerint</h1>
          <p>
            Gépi hímzés cégeknek és magánszemélyeknek, akár 1 db-tól a több ezer
            darabos tételig. Pólónyomás, szitanyomás, logózás, egyedimunkaruha,
            céges póló készítés és textilkereskedelem.
          </p>
          <Link
            className='btn btn-blue'
            to='kapcsolat'
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Kérjen ingyenes árajánlatot!
          </Link>
        </div>
        <div className='hero-image'>
          <img src={hero_image} alt='embroidery-machine' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  justify-content: center;

  .hero-container {
    max-width: 1140px;
    display: flex;
    flex-direction: row;

    h1 {
      font-weight: 700;
      margin: 0 2.5rem 0 1rem;
      font-size: 3rem;
      line-height: 1.1;
      margin: 0;
    }

    img {
      width: 100%;
    }

    .hero-text {
      margin-right: 6.2rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      p {
        font-style: italic;
        line-height: 2;
        margin-top: 30px;
        font-size: 1.1rem;
      }

      a {
        background-color: #2b253c;
        color: #fff;
        font-size: 1rem;
        letter-spacing: 1px;
        font-weight: 700;
        margin-top: 30px;
        padding: 14px 40px;
        border-radius: 50px;
        text-transform: uppercase;
        cursor: pointer;

        :hover {
          background-color: #f1c50e !important;
        }
      }
    }
  }

  @media screen and (max-width: 970px) {
    margin-top: 5rem;
    .hero-container {
      flex-direction: column;

      img {
        order: 1;
      }
      .hero-text {
        order: 2;
        margin-right: 0;
        padding: 2rem;

        h1 {
          margin-right: 0%;
          text-align: center;
          font-size: 1.6rem;
        }

        a {
          margin: 2rem auto;
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    margin-top: 3rem;
    .hero-container {
      flex-direction: column;
      text-align: center;

      img {
        order: 1;
      }
      .hero-text {
        order: 2;
        margin-right: 0;
        padding: 2rem;

        h1 {
          font-size: 2rem;
        }

        a {
          margin: 2rem auto;
          padding: 1rem;
          font-size: 0.875rem;
        }
      }
    }
  }
`;

export default Hero;
