'use strict';

// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const nomiSquadre = [
  {
    nome: 'AC Milan',
    punti: 0,
    falli: 0,
  },

  {
    nome: 'Roma',
    punti: 0,
    falli: 0,
  },

  {
    nome: 'Atalanta',
    punti: 0,
    falli: 0,
  },

  {
    nome: 'Cagliari',
    punti: 0,
    falli: 0,
  },
];

// nomiSquadre.forEach((punti, falli) => {
//   let puntiComm = punti;
//   puntiComm = Math.floor(Math.random(1) * 30);
//   console.log(puntiComm, 'punti ');

//   let falliComm = falli;
//   falliComm = Math.floor(Math.random(1) * 10);
//   console.log(falliComm, 'falli commessi');
// });

// genera punti e falli con numeri a random
nomiSquadre.forEach((team) => {
  team.falli = Math.floor(Math.random(1) * 10);
  team.punti = Math.floor(Math.random(1) * 30);
});

console.log(nomiSquadre);

// modi per destrutturare

// const result = nomiSquadre.map((team) => {
//   const { nome, falli } = team;

//   return {
//     nome,
//     falli,
//   };
// });

const result = nomiSquadre.map(({ nome, falli }) => {
  return {
    nome,
    falli,
  };
});

console.log(result);
