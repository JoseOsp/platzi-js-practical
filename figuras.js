// console.log('Hello, world!!')

// Codigo del cuadrado
console.group('CUADRADO');

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden : ${ladoCuadrado} cm`)

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado : ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado : ${areaCuadrado} cm^2`);

console.groupEnd();



//codigo del triangulo
console.group('TRIANGULO');

const l1Triangulo = 6;
const l2Triangulo2 = 6;
const bTriangulo = 4;
const hTriangulo = 5.5;

console.log(`Los lados del cuadrado miden :
    ${l1Triangulo} cm
    ${l2Triangulo2} cm
    ${bTriangulo} cm`);

console.log(`La altura del triangulo es de : ${hTriangulo} cm`);

const pTriangulo = l1Triangulo + l2Triangulo2 + bTriangulo;
console.log(`El perimetro del triangulo es : ${pTriangulo} cm`);

const aTriangulo = (bTriangulo * hTriangulo) / 2;
console.log(`El area del triangulo es : ${aTriangulo} cm^2`);

console.groupEnd();



//codigo del circulo
console.group('CIRCULO');

const rCirculo = 4;
const dCirculo = rCirculo * 2;
const PI = Math.PI;
const piCirculo = PI;

pCirculo = dCirculo * PI;
// Circunferencia
const cICirculo = pCirculo;

// Area
const aCirculo = ( rCirculo * rCirculo ) * PI;

console.log(`El radio del circulo es : ${rCirculo} cm`);
console.log(`El diametro del circulo es : ${dCirculo} cm`);
console.log(`El perimetro del circulo es : ${pCirculo} cm`);
console.log(`El area del circulo es : ${aCirculo} cm^2`);

console.groupEnd();