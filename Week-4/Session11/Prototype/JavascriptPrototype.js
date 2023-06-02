// Vehicle object constructor
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Adding getDetails method to the Vehicle prototype
Vehicle.prototype.getDetails = function () {
    return "Make: " + this.make + ", Model: " + this.model + ", Year: " + this.year;
};

// Car subclass that extends Vehicle
function Car(make, model, year, numDoors) {
    Vehicle.call(this, make, model, year);
    this.numDoors = numDoors;
}

// Inheriting from the Vehicle prototype
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Overriding the getDetails method in Car
Car.prototype.getDetails = function () {
    return Vehicle.prototype.getDetails.call(this) + ", Number of Doors: " + this.numDoors;
};

// Creating instances of Vehicle and Car
var myVehicle = new Vehicle("Toyota", "Camry", 2022);
var myCar = new Car("Honda", "Civic", 2023, 4);

// Calling getDetails method on each instance
console.log(myVehicle.getDetails()); // Output: Make: Toyota, Model: Camry, Year: 2022
console.log(myCar.getDetails()); // Output: Make: Honda, Model: Civic, Year: 2023, Number of Doors: 4