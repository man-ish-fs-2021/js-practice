// important topics: classes.

class EventTarget {
    // Write your code here.
    constructor(){
      this.eventListeners = new Map();
    }
  
    addEventListener(name, callback) {
      // Write your code here.
      if (!this.eventListeners.get(name)){
        this.eventListeners.set(name, new Set())
      }
      this.eventListeners.get(name).add(callback)
    }
  
    removeEventListener(name, callback) {
      // Write your code here.
      if (!this.eventListeners.get(name)) return;
      this.eventListeners.get(name).delete(callback);
    }
  
    dispatchEvent(name) {
      // Write your code here.
      if (!this.eventListeners.get(name)) return;
      this.eventListeners.get(name).forEach((eachCallback) => eachCallback())
      
    }
}
  

const target = new EventTarget();
const onClick = () => console.log('clicked');
target.addEventListener('click', onClick);
target.dispatchEvent('click');