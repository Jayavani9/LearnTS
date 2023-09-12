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

//Arrow function
var msg = function (a, b) { return console.log(a + b); };
msg(2, 3);
var dp = function (x, y, a) {
    return x + y - a;
};
var ans1 = dp(3, 2, 4);
console.log(ans1);
