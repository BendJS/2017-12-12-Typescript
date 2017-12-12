// ANY TYPE

let foo: any = 'whatever I want';
foo = 5;
foo.split(',');  // no error!

type Dictionary = {
    [key: string]: any
}


// Type assertions
const aNumber: number = 5;

// error:
// aNumber.split(',')

(aNumber as any).split(',');
(<any>aNumber).split(',');

const json = JSON.parse("{ foo: 5 }") as number;