const curry =
  (fn) =>
  (...args) =>
    fn.bind(null, ...args);

const pipe = (...fns) => {
  return (x) => {
    return fns.reduce((v, f) => f(v), x);
  };
};

const trace = curry((label, x) => {
  console.log(`== ${label}:  ${x}`);
  return x;
});

const fn1 = (s) => s.toLowerCase();
const fn2 = (s) => s.split("").reverse().join("");
const fn3 = (s) => s + "!";
const newFunc = pipe(fn1, fn2, fn3);
const result = newFunc("Time");
console.log({ result });

const toSlug = pipe(
  trace("input"),
  split(" "),
  map(toLowerCase),
  trace("after map"),
  join("-"),
  encodeURIComponent
);
console.log(toSlug("JS Cheerleader"));

const tap = curry((fn, x) => {
  fn(x);
  return x;
});

const trace2 = (label) => {
  return tap((x) => console.log(`== ${label}:  ${x}`));
};
