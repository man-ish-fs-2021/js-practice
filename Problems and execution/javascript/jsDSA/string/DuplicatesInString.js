function replace(str = "", char, idx) {
  return str.substr(0, idx) + char + str.substr(idx + 1);
}
function removeDuplicates(string = "") {
  rp = 0;
  wp = 0;
  const set = new Set([]);
  while (rp < string.length) {
    if (!set.has(string[rp])) {
      set.add(string[rp]);
      string = replace(string, string[rp], wp);
      console.log({ string });
      wp++;
    }
    rp++;
  }
  return string.substr(0, wp);
}
// function removeDuplicates(string) {
//   let idx = 0;
//   for (let i = 0; i < string.length; i++) {
//     let j;
//   }
// }
console.log(removeDuplicates("Hello world"));
