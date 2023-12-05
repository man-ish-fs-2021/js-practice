function sum (a,b,c,){
    return a + b + c;
}
function subtract(a,b,c){
    return a - b - c;
}
// console.log(sum(1,4,10));

// function curriedSumFunc(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }
// console.log(curriedSum(1)(4)(10));


function curry(func){
    return function (a){
        return function(b){
            return function(c){
                return func(a, b, c);
            }
        }
    }
}
function curryArr(func){
    return  (a) =>  (b) =>  (c) =>  func(a, b, c);
}

const curriedSum = curry(sum);
const curriedSumArr = curryArr(sum);
const curriedSubtract = curry(subtract);
console.log(curriedSum(1)(4)(10));
console.log(curriedSumArr(1)(4)(10));
console.log(curriedSubtract(1)(4)(10));


// usecases.
// have a function that is a part of another function
// ex:
function add4(b,c){
    return 4 + b + c;
}
// instead
const addFour = curriedSum(4);
console.log(addFour(1)(10))
