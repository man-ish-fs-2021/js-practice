const inputElement = document.getElementById("input");
const defaultElement = document.getElementById("default");
const debouncedElement = document.getElementById("debounced");
const throttledElement = document.getElementById("throttled");

const handleDefault = function (text) {
  defaultElement.textContent = text;
};
function debounce(cb, delay) {
  let timer;
  const toReturn = function (...args) {
    clearInterval(timer);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };
  return toReturn;
}
function throttle(cb, delay) {
  //   let timer;
  let shouldcall = true;
  let waitingArgs;
  const toCall = () => {
    if (!waitingArgs) {
      console.log("in toCall waiting args else");

      shouldcall = true;
      return;
    } else {
      console.log("in toCall waiting args", waitingArgs);
      cb.apply(this, waitingArgs);
      waitingArgs = null;
      setTimeout(toCall, delay);
    }
  };

  const toReturn = function (...args) {
    if (shouldcall === false) {
      console.log("in should call false", args);
      waitingArgs = args;
      return;
    }
    // clearInterval(timer);

    cb.apply(this, args);
    console.log("callback apply called", args);
    shouldcall = false;

    setTimeout(toCall, delay);
  };
  return toReturn;
}
const throttle2 = function (cb, delay) {
  let timer;
  let lastTimeSinceCalled = 0;
  const toReturn = function (...args) {
    const currentTime = Date.now();
    console.log({ currentTime });
    const timeSinceLastCalled = currentTime - lastTimeSinceCalled;
    console.log({ timeSinceLastCalled });
    const delayRemaining = delay - timeSinceLastCalled;
    console.log({ delayRemaining });
    if (delayRemaining <= 0) {
      cb.apply(this, args);
      lastTimeSinceCalled = currentTime;
      console.log("in delya less than zerto", { lastTimeSinceCalled, args });
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        lastTimeSinceCalled = Date.now();
        console.log("in setTImeoit", { lastTimeSinceCalled, args });
        cb.apply(this, args);
      }, delayRemaining);
    }
  };
  return toReturn;
};
const handleDebounced = function (text) {
  debouncedElement.textContent = text;
};
const handleThrottle = function (text) {
  throttledElement.textContent = text;
};
const debounced = debounce(handleDebounced, 1000);
const throttled = throttle2(handleThrottle, 500);
inputElement.addEventListener("input", (e) => {
  handleDefault(e.target.value);
  throttled(e.target.value);
  debounced(e.target.value);
});
