// stacks
// pop, push,

// queue
// push, shift

// Maps
// we can use traditional js object
// pr, we can use internal map
// const map = new Map();
// map.set("test", 1234);
// map.set(10, "ten");
// set, get, size, has(checks keys), delete(key), clear,
// iterating, for...of loop for [key, value] of map
// forEach((value, key) => {})
// this is an iterator function
// const iter = map.entries();
// iter.next().value;

// when to use an obj vs map
// if you want the key to be anything other than a string or a symbol, use map
// Map also hold the order
// to make it into a json, we need to use an object
// if you want to have a prototypal chain, we use objects

// initialising the map
// const map = new Map([['test', 123], [10, 'ten']]);

// SETS
// Unique values only
// add, has,
// for(value of set)
// set.forEach((value) => {})
// set also has an iterator just like map
//

// WeakSet
// works like a set,
// values of weak set can only be objects
//doesnt prevent garbage collection

// WeakMap
// works like a map,
// keys of weak map can only be objects
//

// example
// in a normal set, the object would not have been garbage collected,
// but in this case, it is, and it is removed from the weak set as well
// (function () {
//   const obj = {};
//   WeakSet.add(obj);
// })();

// cannot iterate through them

// Linked list
//
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkeList {
  constructor() {
    this.head = null;
  }

  adStart(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  addEnd(value) {
    const node = new Node(value);
    let curr = this.head;
    if (curr === null) {
      this.head = node;
      return;
    }
    while (curr !== null && curr.next !== null) {
      curr = curr.next;
    }
    curr.next = node;
  }
}

const list = new LinkeList();
list.adStart(1);
list.adStart(2);
list.addEnd(3);
console.log(list.head.value);
