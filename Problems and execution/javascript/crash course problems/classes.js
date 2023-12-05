// prototype, prototypal inheritance, prototype chain.
// Objects are able to inherit from other instantiated objects.
// 
// ******************* PROTOTYPAL INHERITANCE. *********************
// const person = {
//     ishuman: true,
// }
// person is the prototype for the child, and the child is going to inherit from the obj
// const child = Object.create(person);
// console.log({person, child})
// console.log({isChild: child.ishuman}) // true

// child.[[Prototype]]
// prototype.
// child.__proto__ = person;

// const child = Object.create(person);

// child.maxAge = 18;
// console.log(person.maxAge)
// console.log(child.maxAge)
// Assign will take an object and and apply the properties.
// const child = Object.assign(Object.create(person), {maxAge: 21});
// console.log(person.maxAge)
// console.log(child.maxAge)
// const child = {
//     maxAge: 18,
// }
// Object.setPrototypeOf(child, person);
// console.log(person.maxAge)
// console.log(child.ishuman)



// alternatively we can just do object assign to achieve the same thing.
// const child = Object.create(person, {
//     maxAge: {
//         value: 18,
//         writable: true,
//         configurable: true,
//         enumerable: true
//     }
// });

// console.log(child.maxAge)
// console.log(child.ishuman)

// const john = Object.create(child);
// john.name = 'John';
// console.log(john);
// john has access to all the prototypes of child and person.
// console.log(john.__proto__);
// console.log(john.__proto__.__proto__);

// console.log(Object.getPrototypeOf(john))

// child.maxAge = 21;
// **************they are references to another object and not a copy.
// console.log(john.maxAge)

// const funcProto = Object.getPrototypeOf(() => {});
// console.log(Object.getOwnPropertyNames(funcProto))

// const arrProto = Object.getPrototypeOf( []);
// console.log(Object.getOwnPropertyNames(arrProto))


// ********* Function constructors. *************
// function Person(name) {
//     this.name = name;
// }

// Person.prototype => this is different from __proto__.
// Person.prototype = {
//     constructor: Person,
//     isHuman: true,
// }

// const conner = new Person('conner');
// const clement = new Person('clement');
// console.log(conner.__proto__)
// console.log(Object.getPrototypeOf(conner))
// new -> 
// properties that we set in the construtor are the instance properties.

// they share the same prototype object.
// if you change the prototype Person, the objects which has this as the prototype can also have access.
// console.log(Object.getPrototypeOf(conner) === Object.getPrototypeOf(clement))
// const conner = new Person('conner');
// const clement = new conner.constructor('clement')
// console.log({clement});

// Person.prototype.speak = function(){
//     console.log('Hello this is ' + this.name);
// }
// const conner = new Person('conner');
// conner.speak()

// console.log(conner instanceof Person)
// console.log(conner instanceof Object)



// this is an example of a polyfill.
// Array.prototype.myPush = function(value) {
//     this[this.length] = value;
// }

// ******** Class ************
class Person {
    // this is a field in a calss.
    // isHuman = true;
    // static property - property of the person class, not a property of instances of Person.
    static isHuman = false;
    constructor(name){
        this.name = name;
    }
    static greet() {
        console.log('hello');
    }
    speak(){
        console.log('This is ' + this.name)
    }
    // getters and setters
    // get name() {
    //     return this.name;
    // }
    // set setName(name){
    //     this.name = name;
    // }
}
const conner = new Person('Conner');
// const clement = new Person('Clement');
// conner.speak();
// conner.isHuman = false;
// these are instance based.
// console.log(conner.isHuman);
// console.log(clement.isHuman);
// console.log(Person.greet())
// console.log(conner.greet())



// ***** inheritance

class Child extends Person {
    // private variable
    #age;
    constructor(name, age){
        super(name);
        this.#age = age;
    }
}

const child = new Child('John', 10);
child.speak()
console.log(child.age)
console.log(child instanceof Person); // true