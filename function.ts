function getTime(): number {
    return new Date().getTime();
}


console.log(getTime());

function printHello(): void{
    console.log('hello');
}

function multiply(a: number, b: number) {
    return a * b;
  }

  let ans = multiply(2,3);
  console.log(ans);
//Optional parameters
  function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }
// Default parameters
  function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }

  // Named parameters
  function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }

  