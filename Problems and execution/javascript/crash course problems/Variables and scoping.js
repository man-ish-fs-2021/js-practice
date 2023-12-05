// Hoisting:

console.log("above",{ varNum});

let letNum = 0
var varNum = 0

console.log("below",{letNum, varNum});


Scoping

function test(){
    // let letNum = 0
    // var varNum = 0
    if (true){
        let letNum = 0
        var varNum = 0
    }
console.log("throws an error, as let num is not defined, var is hoisted to the top of the FUNCTION",{letNum, varNum});

}

test()

