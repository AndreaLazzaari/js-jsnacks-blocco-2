// Crea una funzione che accetta due elementi del dom,
// uno e' il parent e l'altro e' un elemento che voglio sia aggiunto al parent come figlio.

function nuoviElementiDom(parent, figlio) {
   const parent = document.createElement('')
   const figlio = document.createElement('')
   parent.appendChild(figlio)

}

const nuovaIntestazione = nuoviElementiDom(div,h1)
console.log(nuovaIntestazione)