// TYPE ALIASES

type Age = number;
type Name = string;

type Person = {
    readonly firstName: Name;
    readonly lastName: Name;
    readonly age: Age;
}

const me: Person = {
    firstName: 'adam',
    lastName: 'horak',
    age: 37,
};

