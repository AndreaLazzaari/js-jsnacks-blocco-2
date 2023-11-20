// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e
// da questi due array distinti vuole generare una falsa lista di invitati con nome e cognome.

const nomiArray = ['andrea', 'luca', 'gina', 'inetta'];
const cognomiArray = ['lori', 'rossi', 'pumi', 'razo'];

let falsaArray = [];

for (let i = 0; i < nomiArray; i++){
    let primoNomeGenerato = nomiArray[ Math.floor(Math.random() * nomiArray.length)];
    let primoCognomeGenerato = cognomiArray[ Math.floor(Math.random() * cognomiArray.length)];
    let nomeCompleto = primoNomeGenerato + '' + primoCognomeGenerato
    falsaArray.push(nomeCompleto)
}

console.log(falsaArray)



