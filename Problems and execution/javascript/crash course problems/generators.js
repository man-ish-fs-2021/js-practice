// // yeild is similar to return but it can return different things at different stages of the function.
// function* genNumbers(){
//     yield 1;
//     yield 2;
//     yield 3;
//     return 4;
// } 

// const generator = genNumbers();

// console.log(generator)
// // next will run the function from yield to the next.
// console.log(generator.next())
// // { value: 1, done: false }
// console.log(generator.next())
// // { value: 2, done: false }
// console.log(generator.next())
// // { value: 3, done: false }
// console.log(generator.next())
// // { value: undefined, done: true }

// function* genNumbers(count){
//     for(let i=0;i<count;i++){
//         yield i;
//     }
// }
// const generator = genNumbers(4);

// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// for (value of generator){
//     console.log(value)
// }

// function* genNumbers(count){
//     const value = yield 0;
//     yield value + 3;
// }
// const generator = genNumbers(4);

// console.log(generator.next())
// we are setting 3 at the previously returned value, hence it gets added up.
// console.log(generator.next(3))


// generator return
// console.log(generator.return(5))
// error halts the execution.
// console.log(generator.throw(new Error('There was an error')))


function* genNumbers1(){
    yield 1;
    yield 2;

}
function* genNumbers2(){
    yield 3;
    yield 4;

}


function* genNumbers() {
    // yield* to yield another generator.
    yield* genNumbers1();
    yield* genNumbers2();

}

// when we call genNumbers, it will keep yielding until gen1 is exhausted, then it will yield gen2. (inorder)
const generator = genNumbers();
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())