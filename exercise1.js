// Define Car class
class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    honk() {
        console.log("Tuut tuut");
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Year:", this.year);
        console.log("Color:", this.color);
        console.log("Price:", this.price);
        console.log("Gas remaining:", this.gas);
        console.log();
    }
}

// Create car instances
let cars = [
    new Car("Honda", "CR-V", 2023, "Red", 50000, 45),
    new Car("Ford", "F-150", 2020, "Black", 25000, 30),
    new Car("BMW", "X5", 2022, "Green", 60000, 65),
    new Car("Mazda", "CX-5", 2019, "White", 15000, 60),
    new Car("Audi", "Q7", 2018, "Silver", 52000, 47),
    new Car("Kia", "Forte", 2020, "Blue", 21000, 56)
];

// Simulate the race for 7 turns
let raceResults = [];
for (let turn = 1; turn <= 7; turn++) {
    console.log("Turn", turn);
    let results = [];
    cars.forEach(car => {
        let gasLoss = 5;
        if (car.year < 2024) {
            gasLoss += 2024 - car.year;
        }
        car.gas -= gasLoss;
        results.push({ 
            brand: car.brand, 
            model: car.model, 
            year: car.year, 
            color: car.color, 
            price: car.price, 
            gas: car.gas 
        });
        car.honk();
    });
    raceResults.push(results);
}

// Displaying race results
raceResults.forEach((result, turn) => {
    console.log("Turn", turn + 1);
    result.forEach(car => {
        console.log(car.brand, car.model, car.year, car.color, car.price, "Gas Remaining:", car.gas);
    });
});

