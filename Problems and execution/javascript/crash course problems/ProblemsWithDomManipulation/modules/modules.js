// frontendexpert();

// const conner = new Person("conner");
// conner.sayHello();
// these variables are available globally, eventhough defined in another file.

// solution
// function myModule() {
//   frontendexpert();

//   const conner = new Person("conner");
//   conner.sayHello();
// }
// here, myModule can be called globally. Which is a problem.

// sol
// IIFE
// (function () {
//   frontendexpert();

//   const conner = new Person("conner");
//   conner.sayHello();
// })();
// import { frontendexpert } from "./helpers";
// import { Person } from "./persons";
// frontendexpert();

// const conner = new Person("conner");
// conner.sayHello();

// we can await bigger modules this way
const helperObj = await import("./helpers");
helperObj.frontendexpert();
