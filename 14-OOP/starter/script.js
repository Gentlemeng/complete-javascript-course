'use strict';
/*
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

// console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1
*/

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/* 
// const Car = function(make, speed) {
//   this.make = make
//   this.speed = speed
// }

// Car.prototype.accelerate = function() {
//   this.speed += 10
//   console.log('speed', this.speed)
// }

// Car.prototype.brake = function() {
//   this.speed -= 5
//   console.log('speed', this.speed)
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
*/

///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();
/*

// 1. Classes are NOT hosited
// 2. Classes are first class citizens
// 3. Class are executed in strict mode

///////////////////////////////////////
// Setters and Getters
// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

///////////////////////////////////////
// Object.create 手动设置对象的原型
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
 */

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
class Car {
  constructor(mark, speed) {
    this.mark = mark
    this.speed = speed
  }
  accelerate() {
    this.speed += 10
    console.log('speed', this.speed)
  }
  brake() {
    this.speed -= 5
    console.log('speed', this.speed)
  }
  get speedUS() {
    return this.speed / 1.6
  }
  set speedUS(speedUS) {
    this.speed = speedUS * 1.6
  }
}

const ford = new Car('Ford', 120)
*/

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__ === Student.prototype); // true
// console.log(Student.prototype.__proto__ === Person.prototype); // true
// console.log(mike.__proto__.__proto__); 
*/

// instanceof 检测构造函数是否在实例
// console.log(mike instanceof Student); // true
// console.log(mike instanceof Person); // true
// console.log(mike instanceof Object); // true

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
function Car (mark, speed) {
  this.mark = mark
  this.speed = speed
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

function EV (make, speed, charge) {
  Car.call(this, make, speed)
  this.charge = charge
}
// link the prototypes
EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo
}

EV.prototype.accelerate = function () {
  this.speed += 20
  this.charge --
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`)
}

const Tesla = new EV('Tesla', 120, 23)
Tesla.accelerate()
*/

///////////////////////////////////////
// Inheritance Between "Classes": Object.create

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto); // 继承calcAge init方法
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  // BUG in video:
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);
  
  // FIX:
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

/*
class Account {
  // public fields (instances)
  locale = navigator.language

  // private fields
  #movements = []
  #pin
  constructor(owner, currency, pin) {
    // prototype
    this.owner = owner
    this.currency = currency
    this.#pin = pin
    console.log(`welcome register account, ${this.owner}`)
  }
  // public method
  cunqian(val) {
    this.#movements.push(val)
  }
  quqian(val) {
    this.cunqian(-val)
  }
  requestLoad(val) {
    // if (this.#approve(val)) {
    if (this._approve(val)) {
      this.cunqian(val)
      console.log(`Loan approved`);
    } else {
      console.log(`not approve`)
    }
  }
  getMovements() {
    return this.#movements
  }

  // private method
  // #approve(val) {
  _approve(val) {
    return true
  }
  // static
}

const acc = new Account('John', '$', 1111)
acc.cunqian(100)
acc.quqian(10)
acc.requestLoad(1000)
console.log(acc.getMovements())
// console.log(acc.#movements)
*/


///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
class CarCl{
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  constructor(make, speed, charge) {
    super(make, speed)
    this.charge = charge
  }
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    return this
  }
  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
    );
    return this
  }
}
const Rivian = new EVCl('Rivian', 120, 23)
*/


