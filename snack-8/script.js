// Crea 10 oggetti che rappresentano una zucchina,
// indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.


const listaZucchine = [
    {
        varieta : 'nera',
        peso : 3,
        lunghezza : 6
    },

    {
        varieta : 'romanesca',
        peso : 2,
        lunghezza : 9
    },

    {
        varieta : 'fiorentino',
        peso : 31,
        lunghezza : 48
    },

    {
        varieta : 'napopletana',
        peso : 71,
        lunghezza : 86
    },

    {
        varieta : 'tonde',
        peso : 4,
        lunghezza : 9
    },

    {
        varieta : 'trombetta',
        peso : 2,
        lunghezza : 7
    },

    {
        varieta : 'gialla',
        peso : 3,
        lunghezza : 7
    },

    {
        varieta : 'rugoso',
        peso : 45,
        lunghezza : 66
    },

    {
        varieta : 'friulano',
        peso : 78,
        lunghezza : 44
    },

    {
        varieta : 'crookneck',
        peso : 777,
        lunghezza : 885
    },



];

console.log(listaZucchine)

let somma = 0

for (let index = 0; index < listaZucchine.length; index++) {
    const zucchinaAttuale = listaZucchine[index];
    somma += zucchinaAttuale.peso
    console.log(zucchinaAttuale)
}

console.log(somma)