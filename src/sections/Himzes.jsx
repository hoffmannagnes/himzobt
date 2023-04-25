import React from 'react';
import styled from 'styled-components';
import CardList from '../components/CardList';

const Himzes = () => {
  return (
    <Wrapper id='himzes'>
      <div className='embroidery-wrapper'>
        <h2>Milyen esetekben ajánljuk a gépi hímzést?</h2>
        {/* <p className='short-description'>rövid leírás</p> */}
        <CardList />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 6rem;
  padding-top: 6rem;
  padding-bottom: 5rem;
  background: #2b253c;
  color: white;
  text-align: center;

  .embroidery-wrapper {
    max-width: 1140px;
    margin: auto;

    h2 {
      font-weight: 400;
      font-size: 3.7rem;
    }

    .short-description {
      color: #f1c50e;
      margin-top: 2rem;
      font-style: italic;
    }
  }

  @media screen and (max-width: 970px) {
    margin-top: 1rem;

    .embroidery-wrapper {
      margin: 0 2rem;

      h2 {
        font-size: 3rem;
      }
    }
  }

  @media screen and (max-width: 970px) {
    .embroidery-wrapper {
      margin: 0 2rem;

      h2 {
        font-size: 2rem;
      }
    }
  }
`;

export default Himzes;
