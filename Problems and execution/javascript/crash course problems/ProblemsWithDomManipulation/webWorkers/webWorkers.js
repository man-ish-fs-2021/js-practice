// web workers are APIS within the browser.
// It let's us run a piece of code in another thread.
// we cannot do any dom manipulation from a worker. It runs separately from the main js file.
const slowButton = document.getElementById("slow");
const sayHelloButton = document.getElementById("say-hello");

slowButton.addEventListener("click", slowOperation);
sayHelloButton.addEventListener("click", sayHello);

function slowOperation() {
  const worker = new Worker("worker.js");
  // connecting a worker to the main thread
  worker.postMessage(10);
  //   listening from the web worker
  worker.addEventListener("message", (e) => {
    console.log("from worker", e.data);
  });
}

function sayHello() {
  console.log("Hello world");
}
