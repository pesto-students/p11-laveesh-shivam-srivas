class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive() {
        console.log(`"Driving:"${this.make}${this.model}.`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}

class rideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailableRide) {
        super(make, model, year, color, numSeats)
        this.isAvailableRide = isAvailableRide;
    }
}