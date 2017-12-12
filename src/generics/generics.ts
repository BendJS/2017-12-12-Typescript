// Generics

const identity = <T>(arg: T): T => arg;

identity('foo');
identity(['foo']);
identity(123455);

const addedTwo = [1,2,3,4,5].map((arg) => arg + 2 );


// Generic constraints

const printAge = <T extends { age: number }>(livingThing: T) => { console.log(livingThing.age)};

printAge({ name: 'adam', age: 37 });
// printAge({ name: 'adam' });  // NOPE!
