//A tuple is a typed array with a pre-defined length and types for each index.

let tup : [number, boolean, string];
tup = [5,true,'Tuple Array'];

//read only tuple
let tupr: [number, boolean, string];
tupr = [6,false,'read only tuple'];
console.log(tupr);
console.log(typeof tupr);

//named tuple
const gr: [x: number, y: number] = [55.2, 41.3];
console.log(gr);
console.log(typeof gr);

