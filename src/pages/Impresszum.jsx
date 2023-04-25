import React from 'react';
import styled from 'styled-components';

const Impresszum = () => {
  return (
    <Wrapper className='content-wrapper'>
      <div className='hero-title'>
        <h1>Impreszum</h1>
      </div>
      <div className='hosting'>
        <h2>Tárhelyszolgáltató:</h2>
        <h3>3 in 1 Hosting Bt.</h3>

        <div>
          <h3>Székhely:</h3>
          <p>2310 Szigetszentmiklós, Brassó utca 4/A.</p>
          <h3>Levelezési cím:</h3>
          <p>2310 Szigetszentmiklós, Dévai utca 10/A.</p>
        </div>
      </div>

      <div className='owner'>
        <h2>Weboldal üzemeltetője:</h2>
        <h4>2000 Hímző Bt.</h4>
        <div>
          <h3>Székhely/levelezési cím:</h3>
          <p>7150 Bonyhád, Vörösmarty tér 25.</p>
          <h3>Bejegyző hatóság:</h3>
          <p>Tolna Megyei Bíróság mint Cégbíróság</p>
          <h3>Adószám:</h3>
          <p>20783659-2-17</p>
          <h3>Cégjegyzékszám:</h3>
          <p>17-06-004801</p>
          <h3>Telefonszám:</h3>
          <p>+36(30)293-9347</p>
          <h3>Email:</h3>
          <p>info@himzobt.hu, himzobt@himzobt.hu</p>
          <h3>Iparkamara:</h3>
          <p>Magyar Kereskedelmi és Iparkamara</p>
          <h3>Kamarai nyilvántartási szám: </h3>
          <p>TO20783659</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 5rem;
  padding-bottom: 5rem;
  text-align: center;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 150px;
    width: 1140px;
    margin: auto;
    height: 100%;
    max-width: 90%;
    margin: auto;
    padding-bottom: 5rem;
  }
  .main-title {
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      text-align: center;
    }
  }

  h1 {
    display: inline-block;
    position: relative;
    margin-bottom: 2rem;
  }

  h1::after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 5px;
  }

  .hosting img {
    width: 80px;
    height: auto;
  }

  .hosting h2,
  .owner h2 {
    margin: 1rem 0;
    position: relative;
  }

  .owner h2 {
    margin-top: 2rem;
  }

  .hosting h4,
  .owner h4 {
    margin-block: 0.5rem;
    font-weight: 400;

    @media (max-width: 1024px) {
      text-align: center;
    }
  }

  img {
    height: 60px;
  }

  h3 {
    margin: 1rem 0 0.3rem;
    position: relative;
  }
`;

export default Impresszum;
