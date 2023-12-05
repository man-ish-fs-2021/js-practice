# Multi Paradigm
- Event-driven: Respond to events
- Functional: Pure functions, first class functions
- Object-oriented: Custom bject with inheritance
- Imperative: Specify logic and control flow
- Declarative: Specify desired output


# Javascript browser
- Executes in the browser
- Just in time compilation (or interpreted)

# Primitive types
- Number: 25, 10.42
- BigInt: BigInt(99000000000000)
- Boolean
- String
- Symbol
- Null
- Undefined

Number functions:
Math.pow()
Math.floor()
Math.round()

String functions:
slice()
padStart()
padEnd()
trimStart()
trim()
trimEnd()
subStr()
split()


Object functions:
const person = {}
key - value pairs
JSON.stringify()
JSON.parse()


Map functions:
const map = new Map()
map.set(key, value)
map.get(key)


Set functions:
add
has 
get

functions:
function addTwo(num){
    return num + 2
}

function addTwo(num = 1){
    return num + 2
}

first class function:
function callfunc(func, param) {
    console.log(func(param))
}
callfunc(addTwo, 10)



looping:
for loop
while loop
break, continue
do while
for ...of
for...in


Conditionals:
if check
if else
if elseif else
Switch case
ternary operator: x===y ? a : b


Error Handling:

try {
    throw new Error('New error')
} catch(error) {
    console.log(error)
}

console logging:
console.log()
console.debug()
console.error()
console.table([[a,b],[b,c]])
console.count()
console.count('key')
console.countReset()
console.time()
console.time('key')
console.timeLog()
console.timeEnd()
console.trace()


