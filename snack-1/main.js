'use strict';
// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// 1) creo array oggetti con nome e peso bici
const arrayOggetti = [
  {
    nome: 'Bici uno',
    peso: 10,
  },

  {
    nome: 'Bici due',
    peso: 20,
  },

  {
    nome: 'Bici tre',
    peso: 30,
  },

  {
    nome: 'Bici quattro',
    peso: 40,
  },
];

console.log(arrayOggetti);

// 2) selezione classe nell'html dove stampare col template literal
const biciElement = document.querySelector('.bici');
// template literal

// 3. seleziono bici con meno peso
const obj = { nome: 'Bici Uno', peso: 10 };
// 4. copio l'oggetto bici con meno peso
const objCopy = { ...obj };

// 5. creo html con template literal
const div = `
      <div>nome: ${objCopy.nome}</div>
        
         <p>peso:  ${objCopy.peso}</p>
     `;

//  6. stampo con inner html

biciElement.innerHTML += div;
