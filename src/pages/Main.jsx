import React, { useState } from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'react-image-gallery/styles/css/image-gallery.css';

import Hero from '../sections/Hero';
import Himzes from '../sections/Himzes';
import Kapcsolat from '../sections/Kapcsolat';
import Services from '../sections/Services';
import { images } from '../utils/images';

const Main = () => {
  function renderLeftNav(onClick, disabled) {
    return (
      <button
        type='button'
        className='image-gallery-left-nav'
        aria-label='Prev Slide'
        disabled={disabled}
        onClick={onClick}
      >
        <FaArrowLeft size={30} color='#000' />
      </button>
    );
  }

  function renderRightNav(onClick, disabled) {
    return (
      <button
        type='button'
        className='image-gallery-right-nav'
        aria-label='Next Slide'
        disabled={disabled}
        onClick={onClick}
      >
        <FaArrowRight size={30} color='#000' />
      </button>
    );
  }

  const someComponent = props => {
    return <div></div>;
  };

  return (
    <Wrapper id='top'>
      <Hero />
      <Himzes />
      <Services />
      <ImageGallery
        items={images}
        showBullets={true}
        showIndex={true}
        showThumbnails={false}
        lazyLoad={true}
        showPlayButton={false}
        renderCustomControls={someComponent}
      />
      <Kapcsolat />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .image-gallery {
    max-width: 1140px;
    margin: auto;
    margin-bottom: 5rem;
  }

  .image-gallery-content .image-gallery-slide .image-gallery-image {
    max-height: 100%;
  }

  @media screen and (max-width: 970px) {
    .image-gallery-slides {
      margin: 2rem;
    }

    .image-gallery-index,
    .image-gallery-fullscreen-button {
      right: 2rem;
    }

    .image-gallery-right-nav {
      right: 2rem;
    }

    .image-gallery-left-nav {
      left: 2rem;
    }
  }
`;

export default Main;
