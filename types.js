//Explicit type
//Explicit - writing out the type:
var fn = 'Jayavani';
console.log(typeof fn);
var bool = true;
console.log(typeof bool);
var val = 9;
console.log(typeof val);
//Implicit type
//Implicit - TypeScript will "guess" the type, based on the assigned value:
var firstName = "Vidya";
console.log(typeof firstName);
var value = 12;
console.log(typeof value);
//Checking if it throws an error
//var num = 2;
//num = 'String'; // Throws an error
//Special types
//any 
var v = true;
v = "string";
console.log(Math.round(v));
//unknown
var w = 1;
w = "string";
console.log(typeof w);
// undefined type
var y = undefined;
//null type
var z = null;
