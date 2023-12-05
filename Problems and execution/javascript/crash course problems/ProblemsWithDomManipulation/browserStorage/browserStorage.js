// cookies
// oldest form of browser storage.
// document.cookie -> contains all of the cookies set for the page.
// document.cookie = "user=manish; SameSite=None;";
// to remove cookie, set the expiration
// document.cookie = `course=fexpert; expires=${new Date().toUTCString()}`;
// document.cookie = `course=fexpert; SameSite=None;`;
// other atrributes of cookies max-age, secure, samesite

// console.log("cookie", document.cookie);

// web storage -> local storage, session storage -> specific js. Cookies can be sent from the server.
//
// localStorage.setItem("user", "conner");

// indexedDB -> can store more complex data than the key:value pairs
//
const request = indexedDB.open("myDB", 1);
// fires the first time when we create a database.
// request.addEventListener("upgradeneeded", (e) => {
//   // this even is called whenever request is creating a new db or if you have a new version number
//   const db = e.target.result;
//   const store = db.createObjectStore("users", { keyPath: "id" });
//   store.createIndex("name", "name");
//   store.add({
//     id: 0,
//     name: "Manish",
//     course: "FrontendExpert",
//   });
//   store.add({
//     id: 1,
//     name: "Manish123",
//     course: "ALGOExpert",
//   });
// });
// this is to access the already created database
request.addEventListener("success", (e) => {
  const database = e.target.result;
  //   database
  //     .transaction(["users"], "readwrite")
  //     .objectStore("users")
  //     .add({ id: 2, name: "ryan", course: "Mlexpert" });
  // .delete(id)
  //   const req = database
  //     .transaction(["users"], "readwrite")
  //     .objectStore("users")
  //     .get(2);
  //   req.addEventListener("success", (e) => {
  //     console.log(e.target.result.name);
  //   });
  const req = database
    .transaction(["users"], "readwrite")
    .objectStore("users")
    .index("name")
    .get("ryan");
  req.addEventListener("success", (e) => {
    console.log(e.target.result);
  });
});
