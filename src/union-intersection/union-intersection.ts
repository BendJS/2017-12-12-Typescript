// UNION TYPES

type nullableNumber = number | null;

const isAge: nullableNumber = 5;
const nullAge: nullableNumber = null;

const stringOrNumberOrBoolean: string | number | boolean = 'foo';

// INTERSECTION TYPES
type Cat = {
    name: string;
}

type Furry = {
    furColor: 'BLACK' | 'WHITE' | 'TAN'
}

type FurryCat = Cat & Furry;

const myFurryCat: FurryCat = {
    name: 'Cuddles',
    furColor: 'WHITE',
}