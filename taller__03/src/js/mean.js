// const list1 = [
//     100,
//     200,
//     300,
//     500
// ];
//
// let list1Sum = 0;
// for (let i = 0; i < list1.length; i++) {
//     list1Sum += list1[i];
// }
//
// const meanLis1 = list1Sum / list1.length;

const calcArithmeticMean = (list) => {
    // let sumList = 0;
    // for (let i = 0; i < list.length; i++) {
    //     sumList += list[i];
    // }


    // const sumList = list.reduce((valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento);
    const sumList = list.reduce((acc, curr) => acc + curr);

    const meanList = sumList / list.length;

    return  meanList;
};