import React from 'react';
import { css } from '@emotion/core';

const Character = ({ name, imgVar }) => {
  return (
    <div
      css={css`
        width: 100px;
        height: 130px;
        box-shadow: 10px 10px 25px black;
        margin: 1rem;
        text-align: center;
        background-color: black;
        color: white;
        border: solid 1px black;

        p {
          margin-top: 0;
        }
      `}
    >
      <div
        css={css`
          margin: auto;
        `}
      >
        <img alt={name} src={`../images/dark/${imgVar}.png`} width="100px" />
      </div>
      <p>{name}</p>
    </div>
  );
};

const DarkChart = () => {
  const charactersData = [
    {
      name: 'Charlotte',
      ageIntroduced: '40',
      families: { paternal: 'Noah', maternal: 'Doppler', marriage: 'Doppler' },
      spouse: 'Peter',
      children: ['Elisabeth', 'Franziska'],
      father: 'Noah',
      mother: 'Elisabeth',
      naturalEra: [2019],
      raisedBy: 'Tannhaus',
      romanticTie: null,
      siblings: null,
      travels: false,
      missing: false,
      sigMundus: false,
      associations: ['investigation'],
      nemisis: null,
    },

    {
      name: 'Jonas',
      ageIntroduced: 16,
      families: { given: 'Kahnwald', maternal: '', paternal: 'Nielsen' },
      spouse: null,
      children: null,
      father: 'Mikkel',
      mother: 'Hannah',
      naturalEras: [2019],
      raisedBy: '',
      romanticTie: 'Martha',
      sibings: null,
      travels: true,
      missing: true,
      sigMundus: true,
      associations: ['plant', 'caves'],
      nemisis: null,
    },

    {
      name: 'Katharina',
      ageIntroduced: 40,
      families: { maternal: '', paternal: '' },
      spouse: 'Ulrich',
      children: ['Magnus', 'Martha', 'Mikkel'],
      father: '',
      mother: '',
      naturalEras: [2019, 1986],
      raisedBy: '',
      romanticTie: '',
      siblings: null,
      travels: true,
      missing: false,
      sigMundus: false,
      associations: ['cave'],
      nemisis: ['Hannah'],
    },
    {
      name: 'Hannah',
      ageIntroduced: 40,
      families: { marriage: 'Kahnwald', paternal: '', maternal: '' },
      spouse: 'Mikkel',
      children: ['Jonas'],
      father: '',
      mother: '',
      naturalEras: [2019, 1986],
      romanticTie: 'Ulrich',
      raisedBy: '',
      travels: true,
      missing: false,
      sigMundus: false,
      associations: null,
      nemisis: ['Katharina'],
    },
    {
      name: 'Peter',
      ageIntroduced: 40,
      families: { paternal: 'Doppler', maternal: '', marriage: 'Noah' },
      spouse: 'Charlotte',
      children: ['Elisabeth', 'Franziska'],
      father: 'Helge',
      mother: '',
      naturalEras: [2019],
      romanticTie: 'Bernadette',
      raisedBy: '',
      siblings: null,
      travels: false,
      missing: false,
      sigMundus: false,
      associations: ['bunker'],
      nemisis: null,
    },
    {
      name: 'Ulrich',
      ageIntroduced: 40,
      families: { paternal: 'Nielsen', maternal: '', marriage: '' },
      spouse: 'Katharina',
      children: ['Magnus', 'Martha', 'Mikkel'],
      father: 'Tronte',
      mother: 'Jana',
      naturalEras: [2019, 1986],
      romanticTie: 'Hannah',
      raisedBy: '',
      siblings: null,
      travels: true,
      missing: true,
      sigMundus: false,
      associations: null,
      nemisis: ['Egon'],
    },
    {
      name: 'Magnus',
      ageIntroduced: 40,
      families: { paternal: 'Nielsen', maternal: null, marriage: null },
      spouse: null,
      children: null,
      father: 'Ulrich',
      mother: 'Katharina',
      naturalEras: [2019],
      romanticTie: 'Franziska',
      raisedBy: null,
      siblings: ['Martha', 'Mikkel'],
      travels: true,
      missing: false,
      sigMundus: false,
      associations: null,
      nemisis: null,
    },
    {
      name: 'Aleksander',
      ageIntroduced: 40,
      families: { paternal: null, maternal: null, marriage: 'Tiedemann' },
      spouse: 'Regina',
      children: ['Bartosz'],
      father: null,
      mother: null,
      naturalEras: [1986, 2019],
      romanticTie: null,
      raisedBy: null,
      siblings: null,
      travels: true,
      missing: false,
      sigMundus: false,
      associations: ['waldhotel', 'plant'],
      nemisis: null,
    },
    {
      name: 'Regina',
      ageIntroduced: 40,
      families: { paternal: null, maternal: 'Tiedemann', marriage: null },
      spouse: 'Aleksander',
      children: ['Bartosz'],
      father: null,
      mother: null,
      naturalEras: [1986, 2019],
      romanticTie: null,
      raisedBy: null,
      siblings: null,
      travels: false,
      missing: false,
      sigMundus: false,
      associations: ['waldhotel'],
      nemisis: null,
    },
    {
      name: 'Martha',
      ageIntroduced: 16,
      families: { paternal: 'Nielsen', maternal: null, marriage: null },
      spouse: null,
      children: null,
      father: 'Ulrich',
      mother: 'Katharina',
      naturalEras: [2019],
      romanticTie: ['Jonas', 'Bartosz'],
      siblings: ['Magnus', 'Mikkel'],
      raisedBy: null,
      travels: true,
      missing: false,
      sigMundus: false,
      associations: null,
      nemisis: null,
    },
    {
      name: 'Bartosz',
      ageIntroduced: 16,
      families: { paternal: null, maternal: 'Tiedemann', marriage: null },
      spouse: null,
      children: ['Bartosz'],
      father: 'Aleksander',
      mother: 'Regina',
      naturalEras: [2019],
      romanticTie: 'Martha',
      raisedBy: null,
      sbilings: null,
      travels: true,
      missing: false,
      sigMundus: true,
      associations: ['Noah'],
      nemisis: null,
    },

    {
      name: 'Franziska',
      ageIntroduced: '40',
      families: { paternal: 'Doppler', maternal: 'Noah', marriage: null },
      spouse: null,
      children: null,
      father: 'Peter',
      mother: 'Charlotte',
      naturalEra: [2019],
      raisedBy: null,
      romanticTie: 'Magnus',
      siblings: ['Elisabeth'],
      travels: true,
      missing: false,
      sigMundus: false,
      associations: null,
      nemisis: null,
    },

    {
      name: 'Mikkel',
      ageIntroduced: '10',
      families: {
        paternal: 'Nielsen',
        maternal: null,
        marriage: null,
        given: 'Kahnwald',
      },
      spouse: 'Hannah',
      children: ['Jonas'],
      father: 'Ulrich',
      mother: 'Katherina',
      naturalEra: [2019],
      raisedBy: 'Ines',
      romanticTie: null,
      siblings: ['Magnus', 'Martha'],
      travels: true,
      missing: true,
      sigMundus: false,
      associations: null,
      nemisis: null,
    },
    {
      name: 'Noah',
      ageIntroduced: '40',
      families: { paternal: null, maternal: null, marriage: null, given: null },
      spouse: null,
      siblings: ['Agnes'],
      children: ['Charlotte'],
      father: '',
      mother: '',
      naturalEra: [1921, 1953],
      raisedBy: null,
      romanticTie: 'Elisabeth',
      travels: true,
      missing: false,
      sigMundus: true,
      associations: ['Helge', 'Adam'],
      nemisis: null,
    },

    {
      name: 'Elisabeth',
      ageIntroduced: '10',
      families: {
        paternal: 'Doppler',
        maternal: 'Noah',
        marriage: null,
        given: null,
      },
      spouse: null,
      siblings: ['Franziska'],
      children: ['Charlotte'],
      father: '',
      mother: 'Charlotte',
      naturalEra: [2019, 2053],
      raisedBy: null,
      romanticTie: 'Noah',
      travels: false,
      missing: false,
      sigMundus: true,
      associations: null,
      nemisis: null,
    },
    {
      name: 'Claudia',
      ageIntroduced: 40,
      families: { paternal: 'Tiedemann', maternal: null, marriage: null },
      spouse: null,
      children: ['Regina'],
      father: 'Egon',
      mother: 'Doris',
      naturalEras: [1953, 1986, 2019],
      romanticTie: null,
      raisedBy: null,
      siblings: null,
      travels: true,
      missing: false,
      sigMundus: false,
      associations: ['bootstrap'],
      nemisis: ['Adam', 'Sig Mundus'],
    },
    {
      name: 'Ines',
      ageIntroduced: 40,
      families: { paternal: null, maternal: null, marriage: null },
      spouse: null,
      children: null,
      father: 'Daniel',
      mother: null,
      naturalEras: [1986, 2019],
      romanticTie: null,
      raisedBy: null,
      siblings: null,
      adoptsChild: 'Mikkel',
      travels: false,
      missing: false,
      sigMundus: false,
      associations: null,
      nemisis: null,
    },

    {
      name: 'Jana',
      ageIntroduced: 60,
      families: { paternal: null, maternal: null, marriage: 'Nielsen' },
      spouse: 'Tronte',
      children: ['Ulrich', 'Mads'],
      father: null,
      mother: null,
      naturalEras: [1986, 2019],
      romanticTie: null,
      raisedBy: null,
      siblings: null,
      travels: false,
      missing: false,
      sigMundus: false,
      associations: null,
      nemisis: null,
    },

    {
      name: 'Tronte',
      ageIntroduced: 60,
      families: { paternal: 'Nielsen', maternal: null, marriage: null },
      spouse: 'Jana',
      children: ['Ulrich', 'Mads'],
      father: null,
      mother: 'Agnes',
      naturalEras: [1953, 1986, 2019],
      romanticTie: null,
      raisedBy: null,
      siblings: null,
      travels: false,
      missing: false,
      sigMundus: false,
      associations: null,
      nemisis: null,
    },

    {
      name: 'Tannhaus',
      ageIntroduced: 60,
      families: { paternal: 'Nielsen', maternal: null, marriage: null },
      spouse: null,
      children: null,
      father: null,
      mother: 'Agnes',
      adoptsChild: 'Charlotte',
      naturalEras: [1953, 1986],
      romanticTie: null,
      raisedBy: null,
      siblings: null,
      missing: false,
      travels: false,
      sigMundus: false,
      associations: ['bootstrap'],
      nemisis: null,
    },

    {
      name: 'Helge',
      ageIntroduced: 60,
      families: { paternal: 'Doppler', maternal: null, marriage: null },
      spouse: null,
      children: ['Peter'],
      father: 'Bernd',
      mother: 'Greta',
      naturalEras: [1953, 1986, 2019],
      romanticTie: null,
      raisedBy: null,
      siblings: null,
      travels: true,
      missing: false,
      sigMundus: false,
      associations: ['Noah', 'plant'],
      nemisis: null,
    },

    {
      name: 'Adam',
      ageIntroduced: 60,
      families: { paternal: 'Nielsen', maternal: null, marriage: null },
      spouse: null,
      children: null,
      father: 'Mikkel',
      mother: 'Agnes',
      naturalEras: null,
      romanticTie: null,
      raisedBy: null,
      siblings: null,
      travels: true,
      sigMundus: true,
      missing: false,
      associations: ['Noah', 'plant'],
      nemisis: ['Claudia'],
    },
  ];
  return (
    <div>
      <h2>Dark Charts</h2>
      <section
        css={css`
          h3 {
            border-bottom: solid;
          }

          .flex-wrap {
            display: flex;
            flex-wrap: wrap;
          }
        `}
      >
        <div>
          <h3>Travelers</h3>
          <div className="flex-wrap">
            {charactersData.map(d => {
              return (
                <>
                  {d.travels === true && (
                    <Character name={d.name} imgVar={d.name} />
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div>
          <h3>Members of Sig Mundus</h3>
          <div className="flex-wrap">
            {charactersData.map(d => {
              return (
                <>
                  {d.sigMundus === true && (
                    <Character name={d.name} imgVar={d.name} />
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div>
          <h3>The Missing</h3>
          {charactersData.map(d => {
            return <p>{d.missing === true && d.name}</p>;
          })}
        </div>
        <Character name={'Peter'} imgVar={'Peter'} />
      </section>
    </div>
  );
};

export default DarkChart;
