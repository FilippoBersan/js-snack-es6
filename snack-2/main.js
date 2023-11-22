'use strict';

// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const nomiSquadre = [
  {
    'nome squadra': 'AC Milan',
    punti: 0,
    falli: 0,
  },

  {
    'nome squadra': 'Roma',
    punti: 0,
    falli: 0,
  },

  {
    'nome squadra': 'Atalanta',
    punti: 0,
    falli: 0,
  },

  {
    'nome squadra': 'Cagliari',
    punti: 0,
    falli: 0,
  },
];

console.log(nomiSquadre);
nomiSquadre.forEach((nome, punti, falli) => {
  let puntiComm = punti;
  puntiComm = Math.floor(Math.random(1) * 30);
  console.log(puntiComm, 'punti ');

  let falliComm = falli;
  falliComm = Math.floor(Math.random(1) * 10);
  console.log(falliComm, 'falli commessi');
});

// for (let i = 0; i < nomiSquadre.length; i++) {
//   let punti = nomiSquadre[i];
//   punti[i] = Math.floor(Math.random(1) * 30);
//   console.log(punti);
// }
