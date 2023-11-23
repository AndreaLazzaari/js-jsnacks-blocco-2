// Chiedo all'utente un numero e genero attraverso una funzione un numero di 
// quadrati equivalente al numero inserito dall'utente nel DOM, in qualsiasi forma. 

const numeroUtente = parseInt(prompt('inserisci un numero'))

const wrapper = document.querySelector('article.square')

for (let index = 0; index < numeroUtente; index++){
  wrapper.appendChild(creazioneQuadrati());
}

function creazioneQuadrati() {
   const elementoDiv = document.createElement ('article')
   elementoDiv.classList.add('square')
   return elementoDiv
}

