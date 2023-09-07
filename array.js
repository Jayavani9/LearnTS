var names = [];
names.push("Anita");
names.push("Bina");
names.push("9"); // As number is given as a string
//names.push(3) // will throw an error as it is not a string
console.log(names);
console.log(typeof names);
var namer = ["Jaya"];
//push doesn't exist on type readonly string[]
//namer.push("Jack");
//Type Inference
var numbers = [1, 2, 3, 4];
numbers.push(5);
numbers.push(7);
console.log(numbers);
var head = numbers[1];
console.log(head);
