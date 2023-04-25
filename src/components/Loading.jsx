import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return <Wrapper>Betöltés...</Wrapper>;
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.5rem;
`;

export default Loading;
