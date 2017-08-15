class Car {
  constructor (numOfWheels, topSpeed, color){
    this.wheels = numOfWheels;
    this.topSpeed = topSpeed;
    this.color = color;
  }

  quarterMile() {
    let time = 0;
    return time = (1/4) / this.topSpeed;
  }
}

let car1 = new Car(4, 125, 'red');
let car2 = new Car(4, 200, 'black');
console.log(car1);
console.log(car1.quarterMile());
console.log(car2);
console.log(car2.quarterMile());
