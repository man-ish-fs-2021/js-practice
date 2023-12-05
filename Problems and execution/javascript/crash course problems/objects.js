// const website = {
//     name: "abc",
//     rating: 5,
//     founders: ['clem', "anto"]
// }

// function Website(name, rating, founders) {
//     this.name = name;
//     this.rating = rating;
//     this.founders = founders;
// }

// const frontendExpert = new Website("FrontEndExpert", 5, "Manish");
// console.log({frontendExpert})

// const id = Symbol('id')
// const obj = {
//     [id]: 1234
// }
// console.log({obj})
// xxxxxx getters and setters.

// const website = {
//     name: "abc",
//     rating: 5,
//     founders: ['clem', "anto"],
//     sayHello(){
//         console.log("Hello")
//     },
//     get getRating(){
//         rating = this.rating;
//         console.log({rating});
//         return rating;
//     },
//     set setRating(value){
//         this.rating = value;
//     }
// }

// console.log(website.sayHello())
// console.log(website.getRating)
// website.setRating = 6
// console.log(website.rating)

// const websitex = {
//     name: "abc",
//     rating: 5,
//     founders: ['clem', "anto"]
// }

//xxxxxxxxxx inheriting objects.
// const obj = {
//     foo: 'bar',
//     hello: 'world',
//     [Symbol('id')]: 0,
//     __proto__: websitex
// }
// console.log(obj.name)
// console.log(obj)
// xxxxxxx iterating over the object
// excludes: symbol, inherited keys
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// Includes the inherited websites, excludes non-inumerable keys & symbols
// for (key in obj){
//     console.log(key)
// }



// xxxxx copy an object 
// const newObj = {
//     original: 123
// }
// copies everything except for the non - inumerable values
// Object.assign(newObj, obj);

// console.log(newObj)

// freeze vs seal, seal allows to change the already existing properties only.


// xxxxx Converting to primitives
// const website = {
//     name: "abc",
//     rating: 5,
//     founders: ['clem', "anto"]
// }


const website = {
    name: "abc",
    rating: 5,
    founders: ['clem', "anto"],
    // [Symbol.toPrimitive](hint){
    //     if (hint ==='string'){
    //         return 'Hello'
    //     } else if (hint === 'number'){
    //         return 5
    //     }
    //     return 'abc'
    // }
}

website.toString = function(){
    return 'abcd'
}
website.valueOf = function(){
    return 52
}

// console.log(Number(website))
// console.log(String(website))
console.log(10-website)
console.log(10+website)