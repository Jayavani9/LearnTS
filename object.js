var cars = {
    type: "Toyota",
    model: "Yaris",
    year: 2019
};
console.log(cars);
//Type Inference 
var car = {
    type: "Toyota",
};
car.type = "Ford";
//car.type = 2; //Error
console.log(car);
console.log(car.type);
//Optional properties
var cr = {
    type: "Toyota"
};
cr.mileage = 2000;
console.log(cr.mileage);
