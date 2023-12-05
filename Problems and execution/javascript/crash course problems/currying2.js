// function curry(fn) {
//   if (fn.length === 0) {
//     return fn;
//   }

//   function _curried(depth, args) {
//     return function (...newArgument) {
//       if (depth - 1 === 0) {
//         return fn(...args, ...newArgument);
//       }
//       return _curried(depth - 1, [...args, ...newArgument]);
//     };
//   }

//   return _curried(fn.length, []);
// }

function curry(fn) {
  const depth = fn.length;
  function curriedFn(depth, args) {
    return function (...newArgs) {
      if (depth - 1 === 0) {
        return fn(...args, ...newArgs);
      }
      return curriedFn(depth - 1, [...args, ...newArgs]);
    };
  }
  return curriedFn(depth, []);
}
function curry2(callBack) {
  return function (...args) {
    if (args.length === 0) {
      return callBack();
    }
    const newCallBack = (...newArgs) => {
      return callBack.apply(this, [...args, ...newArgs]);
    };
    return curry(newCallBack);
  };
}

function add(a, b) {
  return a + b;
}

var curriedAdd = curry(add);
var addFive = curriedAdd(5);

var result = [0, 1, 2, 3, 4, 5].map((ele) => addFive(ele)); // [5, 6, 7, 8, 9, 10]
console.log(result);
