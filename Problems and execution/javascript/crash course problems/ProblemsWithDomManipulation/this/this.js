'use strict'

// const logThis = () => {
//     // arrow function will take the environment it is on.
//     console.log(this)
// }
// function logThis(){
//     console.log(this)
// }
// const button = document.querySelector('button');
// button.addEventListener('click', logThis);

// console.log(this)
// in a browser the highest level this is the window


// logThis();

// when in an object the this keyword is the object
// const obj =  {
//     num: 10,
//     logThis,
// }
// obj.logThis()



// function logThis(x, y){
//     console.log({this: this}, {x, y})
// }

// const obj = {
//     num: 10
// }

// creating a binding with this of the obj.
// const boundLogThis = logThis.bind(obj, 10, 20);

// boundLogThis();
// logThis.call(obj, 10, 20)
// logThis.apply(obj, [10, 20])

// THIS in arrya
// const arr = [1, 2, 3];

// arr.forEach(function(num){
//     console.log(this)
//     console.log(num)
// }, {num: 10})

// this in calsses

class Person {
    constructor(name){
        this.name =name;
    }

    speak() {
        console.log("Hello I am " + this.name)
    }
}

const p1 = new Person('conner')
const p2 = new Person('clement')

p1.speak()
p2.speak()

// This is a runtime binding, so it is based on the context.