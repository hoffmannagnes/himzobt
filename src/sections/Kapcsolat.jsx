import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import bg from '../assets/images/contact-bg.jpg';
import phone from '../assets/icons/phone.png';
import marker from '../assets/icons/marker.png';
import clock from '../assets/icons/hour.png';

const Kapcsolat = () => {
  const form = useRef();
  const refCaptcha = useRef();
  const [message, setMessage] = useState('');
  const [checked, setChecked] = useState(false);

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        result => {
          setMessage(
            'Köszönjük megkeresését! Kollégánk hamarosan felveszi Önnel a kapcsolatot.'
          );
        },
        error => {
          console.log('Hiba:' + error.text);
          setMessage('Az üzenetet nem sikerült elküldeni!');
        }
      );
    e.target.reset();
  };

  return (
    <Wrapper id='kapcsolat'>
      <div className='form-container'>
        <div className='form-heading'>
          <h4>Vegye fel velünk a kapcsolatot!</h4>
          <div className='form-contact'>
            <div>
              <img src={phone} alt='phone' />
              <div className='title'>Telefon</div>
            </div>
            <a href='tel:+36302939347'>+36-30/293-9347</a>
            <a href='tel:+3674550810'>+36-74/550-810</a>
          </div>
          <div className='form-contact'>
            <div>
              <img src={marker} alt='location' />
              <div className='title'>Cím</div>
            </div>
            <p>7150 Bonyhád, Vörösmarty tér 25.</p>
          </div>
          <div className='form-contact'>
            <div>
              <img src={clock} alt='time' />
              <div className='title'>Nyitvatartás</div>
            </div>
            <p>Hétfőtől-Péntekig: 8.00 - 15.30-ig</p>
            <p>Szombat-Vasárnap: ZÁRVA</p>
          </div>
        </div>
        <div className='contact-form'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='input-block'>
              <label htmlFor='user_name'>
                Név<sup>*</sup>
              </label>
              <input
                type='text'
                name='user_name'
                id='user_name'
                placeholder=''
                required
              />
            </div>
            <div className='input-block'>
              <label htmlFor='user_email'>
                Email<sup>*</sup>
              </label>
              <input
                type='email'
                name='user_email'
                id='user_email'
                placeholder=''
                required
              />
            </div>
            <div className='input-block'>
              <label htmlFor='phone'>
                Telefonszám<sup>*</sup>
              </label>
              <input
                type='phone'
                name='phone'
                id='phone'
                placeholder=''
                required
              />
            </div>
            <div className='input-block'>
              <label htmlFor='message'>
                Üzenet<sup>*</sup>
              </label>
              <textarea
                type='text'
                name='message'
                id='text'
                placeholder=''
                required
                rows={15}
              />
            </div>

            <div className='btn-container'>
              <label className='accept-label'>
                <input
                  className='checkbox'
                  type='checkbox'
                  required
                  onChange={() => {
                    setChecked(!checked);
                  }}
                />
                <span className='accept'>
                  Elolvastam és elfogadom az{' '}
                  <a href='/adatkezelesi' target='_blank' rel='noreferrer'>
                    Adatkezelési Tájékoztatóban
                  </a>{' '}
                  foglaltakat.
                </span>
              </label>
              <button type='submit' value='send' className='btn btn-blue'>
                Küldés
              </button>
              <div className='message'>{message}</div>
            </div>
            <ReCAPTCHA
              className='captcha'
              ref={refCaptcha}
              size='invisible'
              sitekey={'6LcGEw0lAAAAAOl9NUCGWebs4mY4V-GqOqKOD3Ak'}
            />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(43, 37, 60, 0.75),
      rgba(43, 37, 60, 0.75)
    ),
    url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 900px;
  background-position: 50% 50%;
  vertical-align: middle;
  align-items: center;
  display: flex;

  .form-container {
    max-width: 1140px;
    margin: auto;
    display: flex;
    color: white;

    .form-heading {
      width: 50%;
      h4 {
        font-weight: 400;
        font-size: 3rem;
        line-height: 1.3;
        margin-bottom: 1.5rem;
      }

      .form-contact {
        margin-bottom: 3rem;
        font-size: 1.2rem;
        div {
          display: flex;
        }
        a {
          color: white;
          cursor: pointer;
          display: block;
          text-decoration: none;
        }
        img {
          height: 30px;
          margin-right: 1rem;
          margin-bottom: 1rem;
        }
        .title {
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: 1px;
          margin-top: 6px;
        }
      }
    }
    .btn {
      background-color: #f1c50e;
      color: #000;
      font-size: 1rem;
      margin-bottom: 1rem;
      letter-spacing: 1px;
      font-weight: 700;
      margin-top: 30px;
      padding: 14px 60px;
      border-radius: 50px;
      text-transform: uppercase;
      cursor: pointer;

      :hover {
        background-color: white !important;
      }
    }

    .contact-form {
      flex: 1;

      @media screen and (max-width: 1027px) {
        width: 100%;
        margin-top: 2rem;
      }

      .input-block {
        label {
          display: block;
        }
        input {
          height: 50px;
          width: 100%;
          border: none;
          margin-top: 0.5rem;
          margin-bottom: 1.6rem;
          padding-inline: 1rem;
        }
      }
    }

    .accept-label {
      display: flex;
      flex-direction: row;
      margin: 0.8rem 0 2rem;
    }
    .checkbox {
      margin-right: 16px;
      width: 20px;
      height: 20px;
    }

    textarea {
      width: 100%;
    }

    .accept {
      font-weight: 400;
      text-transform: none;

      @media screen and (max-width: 480px) {
        font-size: 0.875rem;
      }
    }

    .accept a {
      color: yellow;
      font-weight: bold;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 1140px) {
    .form-container {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 970px) {
    justify-content: center;
    padding: 2rem;
    .form-container {
      margin-right: 2rem;
      margin-left: 2rem;
      .form-heading {
        width: 100%;
        margin: 3rem 0 0 0;

        h4 {
          font-size: 2rem;
        }
      }
      .contact-form {
        .btn {
          width: 100%;
          margin-top: 0;
          margin-bottom: 3rem;
        }
      }
    }
  }
`;

export default Kapcsolat;
