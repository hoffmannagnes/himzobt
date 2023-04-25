import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';

import tshirt from '../assets/icons/t-shirt.png';
import coat from '../assets/icons/coat.png';
import cap from '../assets/icons/cap.png';

const data = [
  {
    id: 1,
    img: tshirt,
    name: 'Póló'
    /* description: 'Ide is szeretnénk kérni rövid leírást' */
  },
  {
    id: 2,
    img: coat,
    name: 'Munkaruha'
    /* description: 'Ide is szeretnénk kérni rövid leírást' */
  },
  {
    id: 3,
    img: cap,
    name: 'Baseball sapka'
    /* description: 'Ide is szeretnénk kérni rövid leírást' */
  }
];

const CardList = () => {
  return (
    <Wrapper>
      {data.map((item, i) => {
        return <Card data={item} key={item.id} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  margin-top: 2rem;
  justify-content: space-evenly;

  @media screen and (max-width: 970px) {
    flex-direction: column;
  }
`;

export default CardList;
