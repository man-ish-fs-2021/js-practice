// states -> pending, fulfilled, rejected

// #1 basics
// const promise = new Promise((resolve, reject) => {
    // resolve(2) 
    // resolve sets the state of the promise to be fulfiled.

    // reject(2)
    // reject sets the state of the promise to be rejected.

    // setTimeout(() => resolve(2), 2000);
    // setTimeout(() => reject(new Error('errored out')), 2000);
// });

// console.log({promise})

// setTimeout(() => console.log({afterTimeout: promise}), 2500);
// promise.then((value) => console.log({value}), (error) => console.log('error in the promise', error ));
// promise.then((value) => console.log({value})).catch((err) => console.log('error in catch', err));


// # 2 chaining .then() calls

// const promise = Promise.resolve(3);

// console.log({promise});

// promise.then((val) => val*2)
//        .then((val) => val + 1)
//        .then(console.log);
// promise.then((val) => val*2)
//        .then((val) => val + 1)
//        .then(console.log)
//        .then(() => {
//         throw new Error('Error');
//        })
//        .catch((err) => {
//         console.log({err});
//         return 10;
//        })
//        .then(console.log);


// promise.then((val) => val*2)
//        .then((val) => val + 1)
//        .then(console.log)
//        .then(() => {
//         throw new Error('Error');
//        })
//        .catch((err) => {
//         console.log({err});
//         return 10;
//        })
//        .then(console.log)
//        .finally(() => console.log('done'));

// finally will be called at the end of the promise, either rejected or resolved.


// #3 Promise.all

// takes in an array of promises.
// it waits for all the Promises to be resolved and then returns the value.
//  if any one value is rejected, it immediately rejects all the promises.
// Promise.all([Promise.resolve(2), Promise.resolve(3), new Promise((res, rej) => {
//     setTimeout(()=> res(5), 2000)
// })]).then(console.log)


// # 4 Promise.race

// whichever promise resolves first, that value is returned
// input is an array.
// if it is rejected, works similar to all.
// but if the resolve happens before the reject, the resolved value is returned
// Promise.race([new Promise((res, rej) => {
//     setTimeout(()=> res(2), 1000)

// }), new Promise((res, rej) => {
//     setTimeout(()=> res(5), 2000)
// })]).then(console.log)

// # 5 promise.any

// similar to race, but it will wait for any one of the promises to resolve.
// if all are rejected, unique error is thrown.
// Promise.any([new Promise((res, rej) => {
//     setTimeout(()=> res(2), 1000)

// }), new Promise((res, rej) => {
//     setTimeout(()=> res(5), 2000)
// }),
// Promise.reject(4)
// ]).then(console.log)


// # 6 async await
// asynchronous function is a function that will implicitly return a promise
// await, it waits for a promise to settle before it goes ahead
// to catch errors, we can use try catch blocks
// 
// async function tester() {

//     try{
//         const val = await new Promise((res, rej) => setTimeout(() => res(3), 2000));
//         console.log({val});
//         return 3;    
//     }catch(err) {
//         console.log("error in try catch",{err});
//     }
    
// }
// console.log(tester())
// alt version
// async function tester() {

//     return await new Promise((res, rej) => setTimeout(() => res(3), 2000));
    
// }


// tester().then(console.log).catch(err => console.log('err', err));