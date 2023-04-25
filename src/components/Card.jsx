import React from 'react';
import styled from 'styled-components';

const Card = props => {
  return (
    <Wrapper>
      <img src={props.data.img}></img>
      <h6>{props.data.name}</h6>
      <p>{props.data.description}</p>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  border: 1px solid #5f567a;
  border-radius: 20px;
  list-style-type: none;
  padding: 1.7rem;
  min-width: 300px;

  img {
    height: 94px;
    width: 94px;
  }

  h6 {
    color: #f1c50e;
    margin: 1.5rem;
    font-size: 1.3rem;
    font-weight: 500;
  }

  p {
    font-style: italic;
    font-size: 1rem;
    margin: 1.5rem 0;
  }

  @media screen and (max-width: 970px) {
    margin-bottom: 2rem;
  }
`;

export default Card;
