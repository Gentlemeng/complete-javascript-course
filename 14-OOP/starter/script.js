'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // console.log(this)
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);

///////////////////////////////////////
// Prototypes
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// console.log(Person.prototype === jonas.__proto__); // true
// console.log(Person.prototype.isPrototypeOf(jonas)) // true
// console.log(Person.prototype === jonas.prototype); // false

Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName')); // true
// console.log(jonas.hasOwnProperty('species')); // false

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
// console.log(jonas.__proto__.__proto__); // .constructor -> f Object {}
// console.log(jonas.__proto__.__proto__.__proto__); // null

// console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   // console.log(this)
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');__proto__
// console.dir(h1)
// console.dir(h1.__proto__) // HTMHEeadingElement
// console.dir(h1.__proto__.__proto__) // HTMLElement
// console.dir(h1.__proto__.__proto__.__proto__) // Element
// console.dir(h1.__proto__.__proto__.__proto__.__proto__) // Node
// console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__) // EventTarget
// console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__) // Object
// console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__) // null

console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
