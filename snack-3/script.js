// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno 
// la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


function lunghezzaParole(parolaNumeroUno, parolaNumeroDue) {
    let parolaNumeroUno = prompt('inserisci una parola')
    let parolaNumeroDue = prompt('inserisci una parola')
    if (parolaNumeroUno.length === parolaNumeroDue.length){
        console.log(parolaNumeroUno, parolaNumeroDue)
    } else if (parolaNumeroUno.length < parolaNumeroDue.length){
        console.log(parolaNumeroDue)
    } else {
        console.log (parolaNumeroUno)
    }

    return 
}