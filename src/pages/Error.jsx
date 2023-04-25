import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <h1>Hoppá, az oldal nem található!</h1>
      <Link to='/'>Kezdőlap</Link>
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default Error;
