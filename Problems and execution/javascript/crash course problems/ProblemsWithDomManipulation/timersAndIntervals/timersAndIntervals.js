const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');


start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);

let timerId;

// interval
// function startTime() {
//     timerId=  setInterval(() => {
//         count.textContent++;
//     }, 500)
// }
// function stopTime() {
//     clearInterval(timerId);
// }

// timeout
// const timeout = setTimeout(() => {
//     console.log('timeout')
// }, 1000);

// animation frames -> similar to setinterval, run once per frame in thr browser.
//  Everytime the page repaints
// 
let aniFrameId;
function startTime() {
    // timerId=  setInterval(() => {
    //     count.textContent++;
    // }, 500)
    count.textContent++;
    aniFrameId =  requestAnimationFrame(startTime);
}
function stopTime() {
    // clearInterval(timerId);
    cancelAnimationFrame(aniFrameId)
}

// Date.now()
// performance.now()
// const date = new Date(2025, 0, 10, 9, 25, 10, 30);
// console.log({date})
// date.getMonth()
// date.getHours()
// date.getDay()
// date.setMonth(9)