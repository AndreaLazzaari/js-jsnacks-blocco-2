// Crea una funzione che accetta due numeri, se il primo e' divisibile per il secondo, 
// allora ritorna vero, altrimenti ritorna falso. Micro bonus: se sono uguali ritorna il numero.

function comparaDueNumeri(numeroUno, numeroDue) {
   
   if (numeroUno === numeroDue){
      return numeroUno
   } else if (numeroUno % numeroDue === 0){
      return true
   } else {
      return false
   }
   
}

let maggiore = comparaDueNumeri(5,5)
console.log(maggiore)