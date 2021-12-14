const list1 = [
    100,
    200,
    800,
    1000,
    20000,
    400000000,
];

console.log("un--SORT", list1);

list1.sort((a, b) => a - b);

console.log("SORT", list1);

const halflist = parseInt(list1.length / 2);

// if ( list1 es par? ) {
//     Necesitamos dos elementos
//     -> El promedio
//     -> Mediana
// } else {
//     Posicion halflist dentro de list1
//     -> Mediana
// }

const isPair = ( number ) => {
    if ( number % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}

const median = 0;

if ( isPair(list1.length) ) {
    const median = ( list1[halflist - 1] + list1[halflist] ) / 2;
    console.log(median);
} else {
    const median = list1[halflist];
    console.log(median);
}

// Solucion al RETO
// Usar .sort y crear funcion que reciba X Lista y devuelva la mediana
const calc_median = ( list ) => {
    list.sort((a, b) => a - b);
    const halflist = parseInt(list.length / 2);
    if ( isPair(list.length) ) {
        const median = ( list[halflist - 1] + list[halflist] ) / 2;
        return median;
    } else {
        const median = list[halflist];
        return median;
    }
}