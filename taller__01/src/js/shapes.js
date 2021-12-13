
console.group('---- SQUARE ----');

const squarePerimeter = ( side ) => {
    return side * 4;
}

const squareArea = ( side ) => {
    return side * side;
}

console.groupEnd();




console.group('---- TRIANGLE ----');

const trianglePerimeter = ( side1, side2, base ) => {
    return side1 + side2 + base;
}

const triangleArea = ( base, height ) => {
    return ( base * height ) / 2;
}

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



// Conect JS con HTML

const input = document.getElementById( 'squareInput' );
const value = input.value;

const handlePerimeterCalc = () => {
    const perimeter = squarePerimeter( value );
    alert( perimeter );
}

const handleAreaCalc = () => {
    const area = squareArea( value );
    alert( area );
}