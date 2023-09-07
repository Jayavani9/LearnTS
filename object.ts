const cars : {
    type:string,
    model: string,
    year: number
} = {
    type: "Toyota",
    model: "Yaris",
    year: 2019
};

console.log(cars);

//Type Inference 
const car = {
    type: "Toyota",
};

car.type = "Ford";
//car.type = 2; //Error
console.log(car);
console.log(car.type);
//Optional properties
const cr:{
    type:string,
    mileage?: number
} = {
    type: "Toyota"
};
cr.mileage = 2000;
console.log(cr.mileage);