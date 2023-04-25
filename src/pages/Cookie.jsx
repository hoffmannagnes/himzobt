import styled from 'styled-components';

const Cookies = () => {
  return (
    <Wrapper>
      <div className='cookie-fo-tarolo'>
        <div>
          <h1 className='hero-title'>A cookie szabályzatról</h1>
          <span>
            A 2000 Hímző Bt. weboldala sütiket használ a weboldal működtetése,
            használatának megkönnyítése, a weboldalon végzett tevékenység nyomon
            követése és releváns ajánlatok megjelenítése érdekében. Kérjük, hogy
            a dokumentumot figyelmesen olvassa el és csak akkor vegye igénybe a
            weboldal szolgáltatásait, amennyiben minden pontjával egyetért és
            azokat Önre (a továbbiakban: Felhasználó) nézve kötelező érvényűnek
            elfogadja. Felhívjuk figyelmét, hogy jelen szabályzat csak az adott
            weboldalon történő cookie-kezelésre vonatkozik.
          </span>
        </div>
        <div>
          <h2>Mi az a Cookie?</h2>
          <span>
            A cookie (magyarul 'süti') egy olyan kisméretű adatcsomag, amit az
            internetes szolgáltatások a böngészőben tárolnak el. A hatékony és
            odern felhasználói élményt nyújtó online szolgáltatás működéséhez
            lengedhetetlen technológia, amelyet manapság minden böngésző
            támogat.
          </span>
        </div>
        <div>
          <h2>Hogyan keletkezik a Cookie?</h2>
          <span>
            Először a kliens gép küld egy kérést a kiszolgáló irányába. Ekkor a
            kiszolgáló létrehoz egy egyedi azonosítót és ezt eltárolja a saját
            adatbázisában, majd az így létrehozott cookie-t az összes
            információval visszaküldi a kliensnek. Az így visszakapott
            információs cookie eltárolódik a kliens gépen.
          </span>
        </div>
        <div className='cookie-tipusok'>
          <h2>Hogyan hasznosul a Cookie?</h2>
          <span>
            Amikor a kliens gép újra kapcsolatba lép a kiszolgálóval már
            párosítja az előzőleg már létrehozott és eltárolt cookie-t. A
            kiszolgáló összehasonlítja a kapott és az általa tárolt cookie
            tartalmát. Ez által könnyedén azonosítja pl. a bejelentkezett
            regisztrált felhasználót. Enélkül például nem lehetne bejelentkezni
            egy weboldalra.
          </span>

          <h2>A sütik típusai:</h2>
          <div>
            <span className='cookie-tipus'>Alapműködést biztosító sütik: </span>
            <span>
              Ezen sütik biztosítják a weboldal megfelelő működését,
              megkönnyítik annak használatát, és látogatóink azonosítása nélkül
              gyűjtenek információt a használatáról. Ide tartozik például a
              kalkulátorhasználati értékek tárolása, a sütikezelés elfogadásának
              státusza, bejelentkezési módok és adatok megjegyzése, weboldal
              értesítési üzenetek státusza és a csökkentett funkcionalitású
              Google Analytics kód. Ne feledje, ezen sütik alkalmazása nélkül
              nem tudjuk garantálni Önnek weboldalunk kényelmes használatát.
            </span>
          </div>
          <div>
            <span className='cookie-tipus'>Teljesítményt biztosító sütik:</span>
            <span>
              Ilyen teljesítményt biztosító sütik a Google Analytics sütijei is.
              A Google Analytics sütikkel kapcsolatos további tudnivalók
              érdekében kérjük, kattintson ide:
            </span>
          </div>
          <div>
            <span className='cookie-tipus'>Célzó- és hirdetési sütik: </span>
            <span>
              Ezeknek a sütiknek az a célja, hogy általuk még inkább az Önt
              érdeklő vagy az Ön számára releváns hirdetések jelenjenek meg a
              weboldalakon. Ezek a sütik az Ön hozzájárulása nélkül nem tudják
              Önt személy szerint beazonosítani, olyan információkat gyűjtenek,
              mint pl. hogy melyik oldalt nézte meg a látogatónk, a felhasználó
              a weboldal mely részére kattintott, hány oldalt keresett fel,
              mindezt az Ön érdeklődésére számot tartó tartalmak megismerése
              érdekében. Amennyiben azonban ehhez hozzájárult, a weboldal
              használat nyomon követése során összegyűjtött információkat
              együttesen használhatjuk fel az Ön személyes adataival, annak
              érdekében, hogy marketing kommunikációnkat még jobban az Ön
              igényeihez igazíthassuk és az Ön számára minél inkább személyre
              szabott ajánlatokra hívjuk fel a figyelmét.
            </span>
          </div>
          <div>
            <h2>
              Honlapunkon az alábbi szolgáltatók hirdetési sütijeit használjuk:
            </h2>
            <div>
              <span className='bold cookie-tipus'>Google Adwords</span>
              <span className='light'>
                <a
                  href='https://policies.google.com/privacy?hl=hu'
                  rel='noreferrer'
                  target='_blank'
                >
                  A szolgáltatással kapcsolatos részletes tájékoztató
                </a>
              </span>
            </div>
            <div>
              <span className='bold cookie-tipus'>Facebook</span>
              <span className='light'>
                <a
                  href='https://www.facebook.com/policies/cookies/'
                  rel='noreferrer'
                  target='_blank'
                >
                  A szolgáltatással kapcsolatos részletes tájékoztató
                </a>
              </span>
            </div>
          </div>
          <div>
            <h2>
              Hogyan ellenőrizheti, és hogyan tudja kikapcsolnia a sütiket?
            </h2>
            <div>
              <span>
                Minden modern böngésző engedélyezi a sütik beállításának a
                változtatását. A legtöbb böngésző alapértelmezettként
                automatikusan elfogadja a sütiket, ezek a beállítások azonban
                általában megváltoztathatók, így a böngésző meg tudja
                akadályozni az automatikus elfogadást, és minden alkalommal fel
                tudja ajánlani a választás lehetőségét, hogy engedélyezi-e a
                sütiket. Felhívjuk figyelmét, hogy mivel a sütik célja
                weboldalunk használhatóságának és folyamatainak megkönnyítése
                vagy lehetővé tétele, a cookie-k alkalmazásának megakadályozása
                vagy törlése miatt előfordulhat, hogy nem tudja weboldalunk
                funkcióit teljes körűen használni, illetve hogy a weboldal a
                tervezettől eltérően fog működni böngészőjében.{' '}
              </span>
            </div>
          </div>
          <div>
            <h2>
              A legnépszerűbb böngészők süti beállításairól az alábbi linkeken
              tájékozódhat:
            </h2>
            <div>
              <span className='cookie-tipus'>
                <a
                  href='https://support.google.com/accounts/answer/61416?hl=hu'
                  rel='noreferrer'
                  target='_blank'
                >
                  Google Chrome
                </a>
              </span>
            </div>
            <div>
              <span className='cookie-tipus'>
                <a
                  href='https://support.mozilla.org/hu/kb/sutik-informacio-amelyet-weboldalak-tarolnak-szami'
                  rel='noreferrer'
                  target='_blank'
                >
                  Firefox
                </a>
              </span>
            </div>
            <div>
              <span className='cookie-tipus'>
                <a
                  href='https://support.microsoft.com/hu-hu/windows/a-microsoft-edge-a-böngészési-adatok-és-az-adatvédelem-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd'
                  rel='noreferrer'
                  target='_blank'
                >
                  Microsoft Edge
                </a>
              </span>
            </div>
            <div>
              <span className='cookie-tipus'>
                <a
                  href='https://support.apple.com/hu-hu/guide/safari/sfri11471/mac'
                  rel='noreferrer'
                  target='_blank'
                >
                  Safari
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;

  .cookie-fo-tarolo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
    width: 1140px;
    height: 100%;
    max-width: 90%;
    margin: auto;
    padding-bottom: 5rem;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }

  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    position: relative;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: var(--button-font-size);
  }

  h2::before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 5px;
    height: 100%;
    background-color: var(--banner-color);
  }

  .cookie-tipusok span {
    padding-top: 1rem;
  }

  .cookie-tipus {
    position: relative;
    display: flex;
    max-width: 500px;
    font-weight: 700;
    padding-left: 20px;
  }

  .cookie-tipus::before {
    position: absolute;
    left: 0;
    top: 0;
    content: '◼︎';
    padding-top: 1rem;
    color: var(--header-color);
  }

  .cookie-tipus ~ span {
    display: block;
    padding-block: 0.5rem;
  }

  span a {
    color: var(--banner-color);

    :hover {
      text-decoration: underline;
    }
  }
`;

export default Cookies;
