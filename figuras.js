// console.log('Hello, world!!')

// Codigo del cuadrado
console.group('---- CUADRADO ----');

const squareSide = 5;
console.log(`Los lados del cuadrado miden : ${squareSide} cm`)

const squarePerimeter = squareSide * 4;
console.log(`El perimetro del cuadrado : ${squarePerimeter} cm`);

const squareArea = squareSide * squareSide;
console.log(`El area del cuadrado : ${squareArea} cm^2`);

console.groupEnd();



//codigo del triangulo
console.group('---- TRIANGULO ----');

const lado1Triangulo = 6;
const lado2Triangulo = 6;
const baseTriangulo = 4;
const hTriangulo = 5.5;

console.log(`Los lados del cuadrado miden :
    ${lado1Triangulo} cm
    ${lado2Triangulo} cm
    ${baseTriangulo} cm`);

console.log(`La altura del triangulo es de : ${hTriangulo} cm`);

const pTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo;
console.log(`El perimetro del triangulo es : ${pTriangulo} cm`);

const aTriangulo = (baseTriangulo * hTriangulo) / 2;
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