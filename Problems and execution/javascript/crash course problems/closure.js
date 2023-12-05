// let globalNum = 5;

// function logNum() {
//     const localNum = 1;
//     console.log(globalNum+localNum);
// }
// globalNum = 10;
// logNum();

// lexical scoping -> functions have access to their parent scoping.
// closure, it means there is access of outer scope to the inner function. 
// This is created when the function is defined.
// When the function is executed it is going to find the local first, then it looks in the parent environment.
// 


// function example(){
//     const num = 5;
//     // log num is within the lexical scope of the example.
//     return function logNum(){
//         console.log(num)
//     }
//     // logNum(10)
// }
// // log num has its local scope as 10.
// const innerFunction = example()
// // lognum keeps access to it's parent scop even after the example function has run.
// innerFunction()

// APPLICATION OF CLOSURES.
// private field using closures.
// function makeFunctions() {
// let privateNum = 10;
//     function privateIncrement() {
//         privateNum++;
//     }
//     return {
//         logNum: () => console.log(privateNum),
//         increment: () => {
//             privateIncrement();
//             console.log('incremented!')
//         }
//     }
// }
// const {logNum, increment} = makeFunctions();
// const {logNum:logNum2, increment: increment2} = makeFunctions();
// logNum();
// increment();
// logNum();
// // both return different numbers because they were created in diferent calls.
// logNum2();
// increment2();
// logNum2();
// this cannot be accessed as it is out of scope.
// console.log(privateNum)
// interview question example
for(let i = 0; i< 3;i++){
    setTimeout(()=> {
        console.log(i)
    }, 500)
    // console.log(i)
}
// let is block scoped.
// when we have let, we create a new version of the let with each iteration.
// each time we iterate, we are creating a loop.
// when it is var, it is global scoped so we get the same variable each time.
for(var i = 0; i< 3;i++){
    setTimeout(()=> {
        console.log(i)
    }, 500)
    // console.log(i)
}
