import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import clothes from '../assets/icons/garnments.png';
import embroidery from '../assets/videos/video.mp4';
import tshirt from '../assets/images/tshirt.jpg';

const Services = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <Wrapper id='rolunk'>
      <div className='service-container'>
        <div className='service-upper'>
          <h2>Az árajánlattól a kész termékig!</h2>
          <img src={clothes} alt='clothes-icons' />
        </div>
        <p>
          Több mint 20 éve kínálunk magas színvonalú szolgáltatást promóciós,
          céges és modern munkaruházat minden területén. Műhelyünk jól
          gépesített (ZSK, Drucktech, Brother, Gunold, SUMMA, EPSON DTF).
        </p>
        <p>
          Mi levesszük a válláról a beszerzés terhét is. Önnek csak annyi a
          dolga, hogy megküldi részünkre a hímzendő minta grafikáját és hogy
          milyen alapanyagra készítsük el megrendelését. A folyamat többi részét
          elvégzik szakértő kollégáink.
        </p>
      </div>
      <div>
        <video
          src={embroidery}
          className='video'
          autoPlay
          loop
          ref={vidRef}
          muted
        />
      </div>
      <div className='recommend'>
        <div className='list'>
          <h3>Milyen anyagokra dolgozunk?</h3>
          <ul>
            <li>póló</li>
            <li>szabvány</li>
            <li>munkaruha</li>
            <li>baseball sapka</li>
            <li>pulóver</li>
            <li>kötött sapka</li>
          </ul>
        </div>
        <div className='bg-image'></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  padding-bottom: 5rem;
  text-align: center;

  .service-container {
    max-width: 1140px;
    margin: auto;

    .service-upper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      h2 {
        margin-top: 57px;
        line-height: 1.15;
        font-size: 3rem;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
      }
    }
    p {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.8;
      text-align: left;
      margin: 2rem 3rem 3rem 0;
      word-wrap: break-word;
    }
  }

  .video {
    max-width: 1140px;
    width: 100%;
  }

  .recommend {
    display: flex;
    justify-content: center;
    max-width: 1140px;
    margin: auto;
    margin-top: 6rem;

    h3 {
      font-size: 3rem;
      font-weight: 400;
      line-height: 53px;
      text-align: left;
      margin-bottom: 3rem;
    }

    .bg-image {
      background-image: url(${tshirt});
      border-radius: 20px;
      background-repeat: no-repeat;
      background-size: cover;
      /* min-height: 430px;
      min-width: 630px; */
      width: 630px;
      background-position: 50% 50%;
      margin-left: 4rem;
    }

    ul {
      background-color: #2b253c;
      color: white;
      border-radius: 20px;
      padding: 3rem;
      text-align: left;

      li {
        font-size: 1.25rem;
        margin-left: 2rem;
        line-height: 32px;
      }
    }

    img {
      border-radius: 20px;
      width: 600px;
      height: 50%;
    }
  }

  @media screen and (max-width: 1140px) {
    padding-bottom: 0;
  }

  @media screen and (max-width: 970px) {
    .service-container {
      margin: 0 2rem;
      p {
        margin: 2rem 0 3rem 0;
      }

      .service-upper {
        display: flex;
        align-items: center;
        h2 {
          font-size: 2rem;
          margin-top: 0;
        }

        img {
          height: 75px;
        }
      }
    }
    .recommend {
      display: flex;
      flex-direction: column;
      margin: 2rem;

      .list {
        margin-bottom: 2rem;

        h3 {
          text-align: center;
          margin-top: 2rem;
          font-size: 2rem;
          line-height: 1.15;
        }
      }

      .bg-image {
        margin-left: 0;
        width: 350px;
      }
    }
  }
`;
export default Services;
