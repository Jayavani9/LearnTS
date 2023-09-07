//Explicit type
//Explicit - writing out the type:

let fn: string = 'Jayavani';
console.log(typeof fn);

let bool: boolean = true;
console.log(typeof bool);

let val: number = 9;
console.log(typeof val);

//Implicit type
//Implicit - TypeScript will "guess" the type, based on the assigned value:

let firstName = "Vidya";
console.log(typeof firstName);

let value = 12;
console.log(typeof value);

//Checking if it throws an error
//var num = 2;
//num = 'String'; // Throws an error

//Special types
//any 
let v : any = true;
v = "string";
console.log(Math.round(v));
//unknown
let w: unknown = 1;
w = "string"; 
console.log(typeof w);
// undefined type
let y: undefined = undefined;
//null type
let z : null = null;
