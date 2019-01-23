/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Window/Global Object Binding = If this applies to the global scop the value will be equal to the  window
* 2. Implicit Binding = when using the this. it refer to the object info instead of the windows
* 3.New binding = When used inside a constructer the this refer to the value inside the object
* 4.Explict binding = is when call or apply method is used to override what the constructor is pointing to.
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

// Principle 4

// code example for Explicit Binding

jerry.speak.call(newman); newman.speak.apply(jerry);
