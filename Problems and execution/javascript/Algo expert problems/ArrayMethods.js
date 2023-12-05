Array.prototype.myMap = function (callback) {
    // Write your code here.
    console.log("called my map");
    const outputArray = [];
    const currentArray = this;
    const currentArrayLength = currentArray.length;
    for(let i=0; i<currentArrayLength; i++){
      const currentElement = currentArray[i];
      const returnFromCallback = callback(currentElement, i, this);
      outputArray[i] = returnFromCallback;
    }
    return outputArray;
  };
  
  Array.prototype.myFilter = function (callback) {
    // Write your code here.
    console.log("called my filter");

    const outputArray = [];
    let ouputArrayIndex = 0;
    const currentArray = this;
    const currentArrayLength = currentArray.length;
    for(let i=0; i<currentArrayLength; i++){
      const currentElement = currentArray[i];
      const returnFromCallback = callback(currentElement, i, this);
      if (returnFromCallback === true){
        outputArray[ouputArrayIndex] = currentElement;
        ouputArrayIndex = ouputArrayIndex + 1
      }
    }
    return outputArray;
  };
  
  Array.prototype.myReduce = function (callback, initialValue) {
    // Write your code here.
    console.log("called my reduce");

    const currentArray = this;
    if (!currentArray){
      return initialValue;
    }
    const currentArraylength = currentArray.length;
    let acc = initialValue !== undefined ? initialValue : currentArray[0];
    let startingIndex = initialValue !== undefined ? 0 : 1;
    // console.log({acc, startingIndex, initialValue, currentArray})
    for (let i = startingIndex; i <currentArraylength; i++ ){
      const currentElement = currentArray[i];
    //   console.log({currentElement, acc, currentArraylength, i});
      const returnFromCallback = callback(acc, currentElement, i, currentArray);
      acc = returnFromCallback;
    }
    return acc;
  };
const test = [1, 2, 3, 4, 5, 6];

const newTestMyMap = test.myMap((val) => val*2);
console.log({newTestMyMap});

const newTestMyFilter = test.myFilter((val) => val > 2);
console.log({newTestMyFilter});

const newTestMyReduce = test.myReduce((acc, val) => acc + val + 2);
console.log({newTestMyReduce});