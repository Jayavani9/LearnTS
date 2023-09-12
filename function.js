function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function printHello() {
    console.log('hello');
}
function multiply(a, b) {
    return a * b;
}
var ans = multiply(2, 3);
console.log(ans);

var msg = function (a, b) { return console.log(a + b); };
msg(2, 3);
