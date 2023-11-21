// Exercise 1
class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }

  removeHobby(hobbyToRemove) {
    this.hobbies = this.hobbies.filter((hobby) => hobby !== hobbyToRemove);
  }

  greeting() {
    console.log("Hello fellow person!");
  }
}

// Exercise 2
class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);

    this.occupation = "Full Stack Web Developer";
  }

  greeting() {
    console.log(
      `Hello! My name is ${this.name}, and I'm a ${this.occupation}!`
    );
  }
}

// Exercise 3
const personObj = new Person("John Doe", 1, "Fresno", ["Golfing", "Gaming"]);

personObj.addHobby("Cooking");
personObj.greeting();
console.log(personObj);

const coderObj = new Coder("Jack Smith", 0, "Silicon Valley", [
  "Coding",
  "Hiking",
]);

coderObj.addHobby("Sailing");
coderObj.greeting();
console.log(coderObj);

// Exercise 4
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(value1, value2 = 0) {
    this.result =
      arguments.length === 1 ? this.result + value1 : value1 + value2;
    return this.result;
  }

  subtract(value1, value2 = 0) {
    this.result =
      arguments.length === 1 ? this.result - value1 : value1 - value2;
    return this.result;
  }

  multiply(value1, value2 = 1) {
    this.result =
      arguments.length === 1 ? this.result * value1 : value1 * value2;
    return this.result;
  }

  divide(value1, value2 = 1) {
    if (value2 !== 0) {
      this.result =
        arguments.length === 1 ? this.result / value1 : value1 / value2;
    } else {
      console.error("cannot divide by zero");
    }
    return this.result;
  }

  displayResult() {
    console.log(`Equals: ${this.result}`);
  }
}

const myCalculator = new Calculator();

myCalculator.add(2, 7);
myCalculator.displayResult();

myCalculator.subtract(11, 4);
myCalculator.displayResult();

myCalculator.multiply(3);
myCalculator.displayResult();

myCalculator.divide(45, 5);
myCalculator.displayResult();
