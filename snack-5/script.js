// Crea una funzione che accetta due elementi del dom,
// uno e' il parent e l'altro e' un elemento che voglio sia aggiunto al parent come figlio.

const parent = document.createElement('div');
const figlio = document.createElement('h1');

function aggiungiElemento(parent,figlio) {
   parent.appendChild(figlio)
}

const nuovaIntestazione = (figlio, parent)
