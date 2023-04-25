import React from 'react';
import styled from 'styled-components';

const Adatkezelesi = () => {
  return (
    <Wrapper>
      <div className='gdpr'>
        <h1>Adatkezelési tájékoztató</h1>
        <p>
          A himzobt.hu üzemeltetője ezúton tájékoztatja a honlap látogatóit a
          személyes adatok kezelése körében követett gyakorlatáról, az adatok
          védelme érdekében megtett szervezési és technikai intézkedéseiről,
          valamint a látogatók ezzel kapcsolatos jogairól, és azok
          érvényesítésének lehetőségeiről.
        </p>
        <h2>Adatkezelő neve, elérhetőségei</h2>
        <p>
          <strong>Az adatkezelő megnevezése:</strong> 2000 Hímző Bt. (a
          továbbiakban: Adatkezelő)
        </p>
        <p>
          <strong>Az adatkezelő székhelye:</strong> H-7150 Bonyhád, Vörösmarty
          tér 25.
        </p>
        <p>
          <strong>Az adatkezelő adószáma:</strong> 20783659-2-17
        </p>
        <p>
          <strong>Az adatkezelő cégjegyzékszáma:</strong> 17-06-004801
        </p>
        <p>
          <strong>Az adatkezelő telefonszáma:</strong>
          <a href='tel:06302939347'> +36-30/293-9347</a>
        </p>
        <p>
          <strong>Az adatkezelő email címe:</strong>
          <a href='mailto:himzobt@himzobt.hu'> himzobt@himzobt.hu</a>
        </p>
        <h2>Adatkezelő neve, elérhetőségei</h2>
        <p>
          Az adatkezelő megnevezése: 2000 Hímző Bt. (a továbbiakban: Adatkezelő)
        </p>
        <h2>Mi az a "süti"?</h2>
        <p>
          A süti (cookie) egy rövid szöveg, amelyet a felkeresett webhely küld
          el böngészőjébe. Segítségével a webhely megjegyzi a látogatásával
          kapcsolatos információkat, például az Ön által használt nyelvet és
          egyéb beállításokat. Ezáltal gördülékenyebbé válhat a következő
          látogatás, és könnyebb lesz a webhely használata. A sütik fontos
          szerepet játszanak. Nélkülük az internet használata sokkal nehézkesebb
          lenne.
        </p>
        <h2>A sütik jogszabályi háttere és jogalapja</h2>
        <p>
          Az adatkezelés hátterét az információs önrendelkezési jogról és az
          információszabadságról szóló 2011. évi CXII. törvény (Infotv.) és az
          elektronikus kereskedelmi szolgáltatások, valamint az információs
          társadalommal összefüggő szolgáltatások egyes kérdéseiről szóló 2001.
          évi CVIII. törvény rendelkezései jelentik. Az adatkezelés jogalapja az
          Infotv. 5. § (1) bekezdés a) pontjával összhangban az Ön
          hozzájárulása.
        </p>
        <h2>A honlap által használt sütik főbb jellemzői</h2>
        <p>
          <strong>Munkamenet süti:</strong> Ezek a sütik ideiglenesen
          aktiválódnak, amíg a böngészés folyik. Azaz, attól a pillanattól,
          amikor a felhasználó megnyitja a böngésző ablakot, addig a pillanatig,
          amíg be nem zárja azt. Amint bezárul a böngésző, minden munkamenet
          süti törlődik. Munkamenet sütiben személyes adatot nem tárolunk.
        </p>
        <p>
          <strong>Google Analytics süti:</strong> A Google Analytics a Google
          elemző eszköze, amely abban segít a weboldalak és alkalmazások
          tulajdonosainak, hogy pontosabb képet kapjanak látogatóik
          tevékenységeiről. A szolgáltatás sütiket használhat, hogy
          információkat gyűjtsön és jelentést készítsen a weboldal használatára
          vonatkozó statisztikai adatokból anélkül, hogy egyénileg azonosítaná a
          látogatókat a Google számára. A Google Analytics által használt fő
          süti a „__ga” süti. A webhelyhasználati statisztikai adatokból készülő
          jelentések mellett a Google Analytics - az előbbiekben ismertetett
          néhány hirdetési sütivel együtt - felhasználható arra is, hogy
          relevánsabb hirdetéseket jelenítsünk meg a Google-termékekben (például
          a Google Keresésben) és szerte az interneten.
        </p>
        <p>
          <strong>Facebook pixel (Facebook süti):</strong> A Facebook-képpont
          olyan kód, amelynek a segítségével a honlapon jelentés készül a
          konverziókról, célközönségek állíthatók össze, és az oldal tulajdonosa
          részletes elemzési adatokat kap a látogatók honlap használatáról. A
          Facebook remarketing pixel követőkód segítségével a weboldal
          látogatóinak személyre szabott ajánlatokat, hirdetéseket jeleníthet
          meg a Facebook felületén. A Facebook remarketing lista nem alkalmas
          személyazonosításra. A Facebook Pixellel/Facebook-képponttal
          kapcsolatosan további információt itt találhat:
          https://www.facebook.com/business/help/651294705016616
        </p>
        <p>
          Amennyiben Ön nem fogadja el a sütik használatát, akkor bizonyos
          funkciók nem lesznek elérhetőek az Ön számára. A sütik törléséről
          bővebb tájékoztatást az alábbi linkeken találhat:
          <br />
          <strong> Internet Explorer:</strong>
          <a href=' http://windows.microsoft.com/en-us/internet-explorer/delete-manage-cookies#ie=ie-11'>
            http://windows.microsoft.com/en-us/internet-explorer/delete-manage-cookies#ie=ie-11
          </a>{' '}
          <br />
          <strong>Firefox:</strong>
          <a href='https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer'>
            https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer
          </a>{' '}
          <br />
          <a href=' https://support.google.com/chrome/answer/95647?hl=en'>
            <strong>Chrome:</strong>{' '}
            https://support.google.com/chrome/answer/95647?hl=en
          </a>
        </p>
        <h3>Általunk kezelt sütik:</h3>
        <div class='table-container'>
          <table>
            <tbody>
              <tr>
                <th>Típus</th>
                <th>Hozzájárulás</th>
                <th>Leírás</th>
                <th>Cél</th>
                <th>Érvényesség</th>
              </tr>
              <tr>
                <td>rendszer sütik</td>
                <td>nem igényel</td>
                <td>
                  a webes alkalmazás tűzfalának session sütije, amely a
                  kereszthivatkozások elleni visszaélés megelőzésére szolgál
                </td>
                <td>honlap működésének biztosítása</td>
                <td>böngésző session vége</td>
              </tr>
              <tr>
                <td>nyomkövető süti (harmadik féltől származó)</td>
                <td>nem igényel</td>
                <td>
                  új session-ök és látogatók azonosítására a Google Analytics
                  webes nyomkövető szolgáltatás ment le
                </td>
                <td>
                  a weboldal látogatása során harmadik személyek (pl. Google)
                  szolgáltatásaihoz kapcsolódik
                </td>
                <td>böngésző session vége</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A harmadik féltől származó sütiről (third party süti) részletesen itt:
          <a href='https://www.google.com/policies/technologies/types/'>
            {' '}
            https://www.google.com/policies/technologies/types/
          </a>{' '}
          az adatvédelemről pedig itt:
          <a href='https://www.google.com/analytics/learn/privacy.html?hl=hu'>
            {' '}
            https://www.google.com/analytics/learn/privacy.html?hl=hu
          </a>{' '}
          olvashat
        </p>
        <h3>
          Az adatok kezelése során - ügyfeleink színvonalas kiszolgálása
          érdekében - az alábbi adatfeldolgozókat veszi figyelembe:{' '}
        </h3>
        <div class='table-container'>
          <table>
            <tbody>
              <tr>
                <th>Név</th>
                <th>Cím</th>
                <th>Tevékenység</th>
                <th>Megismert adatok köre</th>
              </tr>

              <tr>
                <td>3 in 1 Hosting Bt.</td>
                <td>2310 Szigetszentmiklós, Brassó utca 4/A.</td>
                <td>tárhelyszolgáltatás</td>
                <td>
                  himzobt.hu domain és aldomaineken található weboldalak
                  tartalma, ezen domain-ekre alapuló email címekre érkező
                  emailek
                </td>
              </tr>

              <tr>
                <td>Google INC.</td>
                <td>Mountain View, California, USA</td>
                <td>analitika</td>
                <td>
                  a himbzobt.hu látogatóinak - anonimizált, személyhez nem
                  köthető - IP címe
                </td>
              </tr>
              <tr>
                <td>Facebook INC.</td>
                <td>Menlo Park, California, USA</td>
                <td>facebook</td>
                <td>felhasználónév, hozzászólás</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Általunk kezelt adatok:</h3>
        <div class='table-container'>
          <table>
            <tbody>
              <tr>
                <th>Tevékenység megnevezése és az adatkezelés célja</th>
                <th>Jogalap</th>
                <th>Kezelt adatok</th>
                <th>Időtartam</th>
              </tr>
              <tr>
                <td>
                  <strong>Honlap látogatása</strong>
                  <br /> Cél a honlap rendeltetésszerű és színvonalas
                  működésének biztosítása,a szolgáltatásaink minőségének
                  ellenőrzése és javítása,a rosszindulatú, weboldalunkat támadó
                  látogatók beazonosítás,a látogatottság mérésére,statisztikai
                  célok
                </td>
                <td>társaságunk jogos érdeke</td>
                <td>
                  <ul>
                    <li>IP cím</li>
                    <li>A látogatás időpontja</li>
                    <li>A meglátogatott aloldalak adatai</li>
                    <li>
                      Az Ön által használt operációs rendszer és böngésző típusa
                    </li>
                  </ul>
                </td>
                <td>12 hónap</td>
              </tr>
              <tr>
                <td>
                  <strong>Ajánlatkérés</strong>
                </td>
                <td>felhasználó önkéntes hozzájárulása</td>
                <td>
                  <ul>
                    <li>Név</li>
                    <li>Cégnév</li>
                    <li>Email cím</li>
                    <li>Telefonszám</li>
                  </ul>
                </td>
                <td>Hozzájáruló nyilatkozat visszavonásáig</td>
              </tr>
              <tr>
                <td>
                  <strong>Kapcsolat</strong>
                </td>
                <td>felhasználó önkéntes hozzájárulása</td>
                <td>
                  <ul>
                    <li>Név</li>
                    <li>Cégnév</li>
                    <li>Email cím</li>
                    <li>Telefonszám</li>
                  </ul>
                </td>
                <td>Hozzájáruló nyilatkozat visszavonásáig</td>
              </tr>
              <tr>
                <td>
                  <strong>
                    Ügyintézés, panasz észrevételre, panaszra válaszadás
                  </strong>
                </td>
                <td>jogi kötelezettség</td>
                <td>
                  <ul>
                    <li>Teljes név</li>
                    <li>Email cím</li>
                    <li>Telefonszám</li>
                    <li>Levelezési cím</li>
                    <li>Egyéb személyes üzenet</li>
                  </ul>
                </td>
                <td>5 évig</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A látogatóink beazonosítása alapvetően nem célunk. Az adatkezeléssel
          kapcsolatos kérdéseivel Ön a{' '}
          <a href='mailto:himzobt@himzobt.hu'>himzobt@himzobt.hu</a> e-mail,
          illetve postacímen kérhet további tájékoztatást, válaszunkat késedelem
          nélkül, 15 napon belül (legfeljebb azonban 1 hónapon belül) megküldjük
          Önnek az Ön által megadott elérhetőségre.
        </p>
        <h3>Hozzájárulás visszavonása:</h3>
        <p>
          A személyes adatokat Ön önkéntesen bocsátja rendelkezésünkre a
          regisztráció illetve a vállalkozás kapcsolattartása során, éppen ezért
          kérjük, hogy adatai közlésekor fokozatosan ügyeljen azok valódiságára,
          helyességére és pontosságára, mert ezekért Ön felelős. A helytelen,
          pontatlan vagy hiányos adat akadálya lehet a szolgáltatásaink
          igénybevételének.
        </p>
        <p>
          Amennyiben Ön nem a saját, hanem más személy személyes adatait adja
          meg, úgy vélelmezzük, hogy Ön az ehhez szükséges felhatalmazással
          rendelkezik.
        </p>
        <p>
          Az adatkezeléshez adott hozzájárulását bármikor ingyenesen
          visszavonhatja:{' '}
        </p>
        <ul>
          <li>az adatkezeléshez hozzájárulás visszavonásával</li>
          <li>
            Facebook oldal esetén az oldal lájkolásának megszűntetésével, privát
            üzenet és komment esetén annak törlésével
          </li>
          <li>
            más, hozzájáruláson alapuló adatkezelési műveletek esetén üzenetben
            az <a href='mailto:himzobt@himzobt.hu'>himzobt@himzobt.hu</a> email
            címre
          </li>
        </ul>
        <h2>Az érintett jogai</h2>
        <p>
          <strong>Az érintett hozzáférési joga:</strong> Az érintett jogosult
          arra, hogy az adatkezelőtől visszajelzést kapjon arra vonatkozóan,
          hogy személyes adatainak kezelése folyamatban van-e, és ha ilyen
          adatkezelés folyamatban van, jogosult arra, hogy a személyes adatokhoz
          és a 2016/679/EU Rendelet (GDPR) rendelet 15. cikk (1) bekezdésében
          felsorolt információkhoz ingyenesen hozzáférést kapjon.
        </p>
        <p>
          <strong>A helyesbítéshez való jog:</strong>Az érintett jogosult arra,
          hogy kérésére az adatkezelő helyesbítse a rá vonatkozó pontatlan
          személyes adatokat. Figyelembe véve az adatkezelés célját, az érintett
          jogosult arra, hogy kérje a hiányos személyes adatok kiegészítését.
        </p>
        <p>
          <strong>A törléshez való jog:</strong>Az érintett jogosult arra, hogy
          kérésére az adatkezelő indokolatlan késedelem nélkül törölje a rá
          vonatkozó személyes adatokat, az adatkezelő pedig köteles arra, hogy
          az érintettre vonatkozó személyes adatokat indokolatlan késedelem
          nélkül törölje, ha a 2016/679/EU Rendelet (GDPR) rendelet 17. cikk (1)
          bekezdésében felsorolt indokok valamelyike fennáll. Ha az adatkezelő
          nyilvánosságra hozta a személyes adatot, és azt törölni köteles, az
          elérhető technológia és a megvalósítás költségeinek
          figyelembevételével megteszi az ésszerűen elvárható lépéseket -
          ideértve technikai intézkedéseket - annak érdekében, hogy tájékoztassa
          az adatokat kezelő adatkezelőket, hogy az érintett kérelmezte tőlük a
          szóban forgó személyes adatokra mutató linkek vagy e személyes adatok
          másolatának, illetve másodpéldányának törlését.
        </p>
        <p>
          <strong>Az adatkezelés korlátozásához való jog:</strong> Az érintett
          jogosult arra, hogy kérésére az adatkezelő korlátozza az adatkezelést,
          ha a 2016/679/EU Rendelet (GDPR) 18. cikk (1) bekezdésében felsorolt
          feltételek valamelyike teljesül.
        </p>
        <ul>
          <li>tájékoztatást kérhet,</li>
          <li>
            kérheti az általunk kezelt személyes adataik helyesbítését,
            módosítását, kiegészítését,
          </li>
          <li>
            tiltakozhat az adatkezelés ellen és kérheti adatai törlését valamint
            zárolását (a kötelező adatkezelés kivételével),
          </li>
          <li>bíróság előtt jogorvoslattal élhet,</li>
          <li>
            a felügyelő hatóságnál panaszt tehet, illetve eljárást
            kezdeményezhet{' '}
            <a href='https://naih.hu/panaszuegyintezes-rendje.html'>
              (https://naih.hu/panaszuegyintezes-rendje.html).
            </a>
          </li>
        </ul>
        <div class='gdpr-naih'>
          <p>
            <strong>Panaszkezelés lehetősége:</strong>Az érintett a jogainak
            megsértése esetén az adatkezelő ellen bírósághoz vagy az adatvédelmi
            hatósághoz fordulhat.
          </p>
          <p>
            Jogorvoslati lehetőséggel, panasszal a következő elérhetőségeken
            lehet élni:
          </p>
          <p>
            <strong>Nemzeti Adatvédelmi és Információszabadság Hatóság</strong>
          </p>
          <p>Székhely: 1125 Budapest, Pf.:5.</p>
          <p>Telefon: +36-1/391-1400</p>
          <p>Fax: +36-1/391-1410</p>
          <p>
            Email:{' '}
            <a href='mailto:ugyfelszolgalat@naih.hu'>ugyfelszolgalat@naih.hu</a>
          </p>
          <p>
            Honlap: <a href='https://naih.hu'>https://naih.hu</a>
          </p>
          <p class='date'>
            <strong>Bonyhád, 2023.03.20.</strong>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 7rem;
  padding-bottom: 5rem;

  .gdpr {
    margin: 3rem auto;
    max-width: 1140px;
    width: 90%;
  }

  h1 {
    padding-top: 3rem;
    margin-bottom: 1rem;
  }

  h2 {
    margin: 2rem 0 1rem 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    margin-bottom: 1rem;
    overflow-wrap: break-word;
  }

  table,
  th,
  td {
    border: 1px solid #000;
  }

  table {
    margin: 1rem 0 2.5rem 0;

    li {
      list-style-type: none;
    }
  }

  .gdpr-naih {
    margin-bottom: 2rem;
    p {
      margin-bottom: 0;
    }
  }

  td,
  th {
    padding: 1rem;
  }

  ul {
    margin-left: 2rem;
    margin-bottom: 1rem;
  }

  .date {
    margin-top: 2rem;
  }

  .table-container {
    overflow-x: auto;
  }
`;

export default Adatkezelesi;
