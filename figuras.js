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

const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;

console.log(`Los lados del cuadrado miden :
    ${triangleSide1} cm
    ${triangleSide2} cm
    ${triangleBase} cm`);

console.log(`La altura del triangulo es de : ${triangleHeight} cm`);

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
console.log(`El perimetro del triangulo es : ${trianglePerimeter} cm`);

const triangleArea = (triangleBase * triangleHeight) / 2;
console.log(`El area del triangulo es : ${triangleArea} cm^2`);

console.groupEnd();



//codigo del circulo
console.group('CIRCULO');

const circleRadio = 4;
const circleDiameter = circleRadio * 2;
const PI = Math.PI;
const circlePerimeter = PI;

pCirculo = circleDiameter * PI;
// Circunferencia
const circleCircumference = pCirculo;

// Area
const circleArea = ( circleRadio * circleRadio ) * PI;

console.log(`El radio del circulo es : ${circleRadio} cm`);
console.log(`El diametro del circulo es : ${circleDiameter} cm`);
console.log(`El perimetro del circulo es : ${pCirculo} cm`);
console.log(`El area del circulo es : ${circleArea} cm^2`);

console.groupEnd();