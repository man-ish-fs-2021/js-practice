// for (let i = 0; i < 5000000000; i++) {
//   1 + 2;
// }

// connecting worker to the main thread

// self.addEventListener("message", (e) => {
//   console.log(e.data);
// });

// alternative

// onmessage = function (event) {
//   console.log(event.data);
// };

addEventListener("message", (e) => {
  console.log("in worker", e.data);

  //   connecting with the main file
  postMessage(e.data * 10);
});
console.log("slow operation finished");
