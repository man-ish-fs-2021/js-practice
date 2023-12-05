// const arr =[1,2,3];
// const arr2 = new Array(1,2,3);
// const arr3 = new Array(5);
// const arr4 = new Array(5).fill(0);
// console.log({arr,arr2, arr3, arr4});
// arr.unshift(4,5,6)
// console.log({arr})


// looping
// arr.forEach(function(eachNum, idx)  {
//     console.log('foreach',{eachNum, idx, this: this})
// }, {num: 10})

// const newarr = arr.map(function(value, index)  {
//     return value + index + this.num
// }, {num: 10})
// console.log({newarr})

// reduce
// const startingValue = 0;
// const sum = arr.reduce(function(accumulator, currValue){
//     return accumulator + currValue
// }, startingValue)
// console.log({sum})
const arr =[5,2,3, 4,8, 9];

function compareNumber(first, second){
    if (first === 3){
        return -1
    }
    if(second === 3){
        return 1;
    }
    return first-second;
}

arr.sort(compareNumber)
console.log({arr})