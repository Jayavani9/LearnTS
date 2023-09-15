/*
function log(message:any)
{
    console.log(message);
}
var message = 'Hello';

log(message);

*/

/*
function printsome(){
    for(let i = 0 ; i < 5 ; i++){
        console.log(i);
    }

    console.log('Finally' + i);
}

printsome();
*/

/*
let a:number;
let b:boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1,true,'a',false];
*/

/*
const ColorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

enum Color{Red, Green, Blue,Pink};
console.log(Color.Pink);
*/

/*
let mesg= 'abc';
console.log(mesg.startsWith('a'));
*/

/*
let log = function(message)
{
    console.log(message);
}

let dolog = (message) =>{
    console.log(message);
}

dolog('abc');
*/

/*

let dwp = (point: {x:number, y:number}) =>{

    console.log(point.x);
    console.log(point.y);

}


dwp({
    x:1,
    y:2
})

*/

/*
interface Point{
    x:number,
    y:number
}

let drp = (point: Point) =>
{
    x:1,
    y;2

}
*/

//When a function is part of a class, we call it a method.

//class creation
/*
    getX (){

        return this.x;

    }

    setX(value){
        if(value < 0) throw new Error("cannot be < 0");
        this.x = value;
    }
*/
import { Point } from "./point";
//Object creation
let point = new Point(1,2);
/*
let point = new Point();
*/
/*
point.x = 1;
point.y = 2;
*/
//point.y = 3;
//point.y = 7;
//point.draw();
point.draw();
