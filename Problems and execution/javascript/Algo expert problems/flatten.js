function flattenArray(arr) {
    if (!arr){
      return arr;
    }
    const flat = [];
    for (ele of arr){
      if (Array.isArray(ele)){
        const op = flattenArray(ele)
        flat.push(...op)
      } else if (typeof ele === 'object'){
        const op = flattenObject(ele);
        flat.push(op)
      } else {
        flat.push(ele)
      }
    }
    return flat;
  }
  function flattenObject(obj) {
    if (!obj){
      return {};
    }
    let outputObject = {}
    for (let key in obj){
      const currentElement = obj[key];
      if (!Array.isArray(currentElement) && currentElement !== null && typeof currentElement === 'object'){
        const flatObj = flattenObject(currentElement);
        outputObject ={ ...outputObject,  ...flatObj};
      } else {
        if (Array.isArray(currentElement)){
          outputObject[key] = flattenArray(currentElement);
          
        } else {
          outputObject[key] = currentElement;
          
        }
      }
      // if (Array.isArray(currentElement)){
        // outputObject[key] = flattenArray(currentElement);
      // } else if (typeof currentElement === 'object') {
        // const flatObj = flattenObject(currentElement);
        // delete outputObject[key]
        // outputObject ={ ...outputObject,  ...flatObj};
      // } else {
        // outputObject[key] = currentElement;
      // }
    }
    return outputObject;
  }
  
  function flatten(value) {
    // Write your code here.
    console.log("initial value", value)
    if (!value) {
      return value;
    }
    if (typeof value !== 'object'){
      return value;
    }
    let finalOutput;
    if (Array.isArray(value)){
      finalOutput = flattenArray(value);
    } else {
      finalOutput = flattenObject(value);
    }
    console.log({finalOutput});
    return finalOutput;
  }
  
  const test = [1,2,3, [5,6,7,[{a: '1', b:"2", c: [10, 12, [20, 30, [50]]]}]]]
  const op = flatten(test)
  console.log(op)
