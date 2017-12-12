// ENUMS

enum Color {
    Green = 1,
    Blue = 2,
}

const color: Color = Color.Green;
// const badColor: Color = Color.Foo;


enum County {
    Deschutes = "DESCHUTES",
    Multnomah = "MULTNOMAH"
}

const county: County = County.Deschutes;

interface IAddress {
    street: string;
    county: County;
}