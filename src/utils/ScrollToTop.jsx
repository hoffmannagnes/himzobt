import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Wrapper>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  left: 90%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #f1c50e;

  @media screen and (max-width: 768px) {
    bottom: 8rem;
  }
`;

export default ScrollButton;
