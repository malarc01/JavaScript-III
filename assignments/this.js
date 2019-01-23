/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If this applies to the global scop the value will be equal to the  window
* 2. when using the this. it refer to the object info instead of the windows
* 3.When used inside a constructer the this refer to the value inside the object
* 4.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
  console.log(this);
  return name;
}
sayName("D'Artagnan");


// Principle 2

// code example for Implicit Binding

const myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello('Ryan');


// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding








const sayNameFunc = obj => {
  obj.sayName = function() {
    console.log(`Hello my name is ${this.name}`);
    console.log(this);
  };
};

const me = { name: 'Ryan' };
const you = { name: 'Freddy' };
sayNameFunc(me);
sayNameFunc(you);




function CordialPerson(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

newman.speak();
newman.speak();
