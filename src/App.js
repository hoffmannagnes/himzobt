import React, { useState, Suspense, useEffect } from 'react';
import { GlobalContext } from './utils/GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import Loading from './components/Loading';

function App() {
  const [navClicked, setNavClicked] = useState(false);
  const clickValue = {
    navClicked,
    setNavClicked
  };

  if (window.location.hash) {
    window.location.replace(window.location.href.split('#')[0]);
  }

  const Main = React.lazy(() => import('./pages/Main'));
  const Error = React.lazy(() => import('./pages/Error'));
  const Cookie = React.lazy(() => import('./pages/Cookie'));
  const Impresszum = React.lazy(() => import('./pages/Impresszum'));
  const Adatkezelesi = React.lazy(() => import('./pages/Adatkezelesi'));
  const Navbar = React.lazy(() => import('./components/Navbar'));
  const Footer = React.lazy(() => import('./components/Footer'));
  const ScrollToTop = React.lazy(() => import('./utils/ScrollToTop'));

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <GlobalContext.Provider value={clickValue}>
            <Navbar />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='*' element={<Error />} />
              <Route path='/impresszum' element={<Impresszum />} />
              <Route path='/adatkezelesi' element={<Adatkezelesi />} />
              <Route path='/sutik' element={<Cookie />} />
            </Routes>
            <CookieConsent
              location='bottom'
              buttonText='Megértettem'
              cookieName='myAwesomeCookieName2'
              style={{ background: '#5e5280', color: 'white' }}
              buttonStyle={{
                background: 'white',
                color: 'black',
                fontSize: '16px'
              }}
              expires={150}
            >
              Ez a weboldal cookie-kat használ annak biztosítására, hogy a
              lehető legjobb élményt nyújthassuk honlapunkon.
              <span>
                <a
                  style={{
                    fontSize: '16px',
                    color: 'white',
                    marginLeft: '10px'
                  }}
                  href='/sutik'
                >
                  További tudnivalók
                </a>
              </span>
            </CookieConsent>
            <Footer />
            <ScrollToTop />
          </GlobalContext.Provider>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
