// console.log('Hello, world!!')

// Square code
console.group('---- SQUARE ----');

const squareSide = 5;
console.log(`Los lados del cuadrado miden : ${squareSide} cm`)

const squarePerimeter = ( side ) => {
    return side * 4;
}

squarePerimeter( 2 );

// const squarePerimeter = squareSide * 4;
// console.log(`El perimetro del cuadrado : ${squarePerimeter} cm`);

const squareArea = ( side ) => {
    return side * side;
}

squareArea( 4 );

// const squareArea = squareSide * squareSide;
// console.log(`El area del cuadrado : ${squareArea} cm^2`);

console.groupEnd();



// Triangle code
console.group('---- TRIANGLE ----');

// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleBase = 4;
// const triangleHeight = 5.5;
//
// console.log(`Los lados del cuadrado miden :
//     ${triangleSide1} cm
//     ${triangleSide2} cm
//     ${triangleBase} cm`);
//
// console.log(`La altura del triangulo es de : ${triangleHeight} cm`);

// const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
// console.log(`El perimetro del triangulo es : ${trianglePerimeter} cm`);

const trianglePerimeter = ( side1, side2, base ) => {
    return side1 + side2 + base;
}

trianglePerimeter(2, 4, 6);

// const triangleArea = (triangleBase * triangleHeight) / 2;
// console.log(`El area del triangulo es : ${triangleArea} cm^2`);

const triangleArea = ( base, height ) => {
    return ( base * height ) / 2;
}

triangleArea( 2, 7 );

console.groupEnd();



// Circle code
console.group('---- CIRCLE ----');

// const circleRadio = 4;
// const circleDiameter = circleRadio * 2;
const PI = Math.PI;
// const circlePerimeter = PI;

const circleDiameter = ( radio ) => {
    return radio * 2;
}

const circlePerimeter = ( radio ) => {
    const diameter = circleDiameter( radio );
    return diameter * PI;
}

// circlePerimeter = circleDiameter * PI;
// Circumference
// const circleCircumference = pCirculo;

// Area
// const circleArea = ( circleRadio * circleRadio ) * PI;

const circleArea = ( radio ) => {
    return (radio * radio ) * PI;
}

// console.log(`El radio del circulo es : ${circleRadio} cm`);
// console.log(`El diametro del circulo es : ${circleDiameter} cm`);
// console.log(`El perimetro del circulo es : ${pCirculo} cm`);
// console.log(`El area del circulo es : ${circleArea} cm^2`);

console.groupEnd();