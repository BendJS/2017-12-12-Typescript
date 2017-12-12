// INTERFACES

interface IPerson {
    firstName: string;
    lastName: string;
}

const adam: IPerson = {
    firstName: 'Adam',
    lastName: 'Horak',
};

// ERROR!
// const badPerson: IPerson = {
//     firstName: 2,
//     lastName: 'Horak',
// };

// Function types
interface IFullName {
    (firstName: string, lastName: string): string;
}

const buildFullName: IFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const myFullName = buildFullName('adam', 'horak');

// const noworky = buildFullName(1, 2);


// OPTIONAL PROPERTIES
interface IManyNamedPerson {
    firstName: string;
    middleName?: string;
    lastName: string;
}

let dontNeedNoMiddle: IManyNamedPerson = {
    firstName: 'john',
    lastName: 'doe',
};

// READONLY PROPERTIES
interface IReadOnlyPerson {
    readonly name: string;
}

let joe: IReadOnlyPerson = { name: 'joe' };
// NOPE!
// joe.name = 'jim';

// INDEX SIGNATURES
interface INumberDictionary {
    [key: string]: number;
}

const dictionary: INumberDictionary = {};
const key = 'foo';
dictionary[key] = 5;

// NOPE!
// dictionary[key] = true;

// EXTEND
interface IPersonWithAge extends IPerson {
    age: number;
}

const adamWithAge: IPersonWithAge = {
    firstName: 'adam',
    lastName: 'horak',
    age: 37
};

