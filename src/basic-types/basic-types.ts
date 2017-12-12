// BASIC TYPES

// Boolean
let inferBoolean = true;
let annotateBoolean: boolean = false;

// Number
let inferNumber = 5;
let annotateNumber: boolean = false;

// String
let inferString = true;
let annotateString: boolean = false;

// Arrays
let numberArray = [1,2,3,5];  // number[]
let mixedArray = [1,2,3,'foo'];  // (number | string)[]
let annotatedNumberArray: number[] = [1,2,3];
let annotatedStringArray: Array<string> = ['foo'];

// Tuple
let numberTuple: [number, number] = [1, 2];
let mixedTuple: [number, string] = [1, 'foo'];

// Null
let myNull: null = null;

// Undefined
let myUndefined: undefined = undefined;


// ERRORS!
// let myString = 'foo';
// myString = 5;

// let myNumbers = [1,2,3,4];
// myNumbers.push('foo');


// Inline object definitions
let myPerson: { name: string; } = { name: 'John Doe'};

// ERRORS!
// let wrongPerson: { name: string; } = { firstName: 'John' };
// let noNamePerson: { name: string; } = { };


// Function signatures
const add2 = (myNumber: number): number => myNumber + 2;
add2(3);

// ERROR!
// add2('baz');

function sayHello(name: string): string {
    return `Hello ${name}`;
};

// Type literals
const inferredNumberLiteral = 5;
const annotatedNumberLiteral: 5 = 5;

const objectLiteral: { name: 'john' } = { name: 'john' };



