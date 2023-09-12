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


//Arrow function
let msg = (a:any, b:any) => console.log(a+b);

msg(2,3);

let dp = (x:any, y:any, a:any) =>{


    return x+y-a;
}

let ans1 = dp(3,2,4);
console.log(ans1);

interface Point{
    x: number,
    y: number
}

let drpnt = (point: Point) =>{
    console.log(point.x-point.y);
}

drpnt({
    x:1,
    y:2
})
