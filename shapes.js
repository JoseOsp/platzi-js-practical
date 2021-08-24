
console.group('---- SQUARE ----');

const squareSide = 5;
console.log(`Los lados del cuadrado miden : ${squareSide} cm`)

const squarePerimeter = ( side ) => {
    return side * 4;
}

squarePerimeter( 2 );

const squareArea = ( side ) => {
    return side * side;
}

squareArea( 4 );

console.groupEnd();




console.group('---- TRIANGLE ----');

const trianglePerimeter = ( side1, side2, base ) => {
    return side1 + side2 + base;
}

trianglePerimeter(2, 4, 6);

const triangleArea = ( base, height ) => {
    return ( base * height ) / 2;
}

triangleArea( 2, 7 );

console.groupEnd();




console.group('---- CIRCLE ----');

const PI = Math.PI;

const circleDiameter = ( radio ) => {
    return radio * 2;
}

const circlePerimeter = ( radio ) => {
    const diameter = circleDiameter( radio );
    return diameter * PI;
}

const circleArea = ( radio ) => {
    return (radio * radio ) * PI;
}

console.groupEnd();