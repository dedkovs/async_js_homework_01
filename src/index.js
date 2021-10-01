// 1.
// We have a “regular” function. How to call async from it and use its result?
// GOOD LUCK!
function delay(ms) {
  // your code
}

delay(3000).then(() => alert("runs after indicted time"));

// 2.
// GOOD LUCK!
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...what to write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
}

// 3.
// Resolve all promises and show in console their status and values
// HINT: Remember about usage of Promise.all(),
// there is a similar method that will help you to resolve all promises
// despite of their results
// GOOD LUCK!
const promise1 = new Promise((res) => setTimeout(() => res("done"), 1000));
const promise2 = Promise.reject("Through error");
const promise3 = 6;

const promises = [promise1, promise2, promise3];

// 4.
// You need to handle getPosts() function with Promise
// Now you need to handle getPosts() function with async/await
// receive posts and show in console, don't forget about error handling :)
// GOOD LUCK!
function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

function handleGetPostsWithPromise() {}

function handleGetPostsWithAsyncAwait() {}
