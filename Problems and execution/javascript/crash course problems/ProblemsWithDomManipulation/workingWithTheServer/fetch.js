// const BASE_URL = '';
// const url='';
// fetch returns a promise.
// in then, we get the response.
// by default it is get method.
// 
// const url = new URL(BASE_URL);
// url.searchParams.set('firstName', 'conner');
// fetch(url).then((res) => res)

// using xml req
// const request = new XMLHttpRequest();
// request.addEventListener('load', function() {
//     console.log(this.responseText);
// });

// request.open('GET', BASE_URL);
// request.send();


// response.status
// response.ok

// post
// const data = {};
// const headers = new Headers();
// headers.append('Content-Type', 'application/json; charset=utf-8');
// fetch(BASE_URL, {
//     body: JSON.stringify(data),
//     method: 'POST',
//     headers
// });
// const form = document.querySelector('form');

// const formData = new FormData(form)

// if the API is too slow, use abort controller to stop fetching.

// const SLOW_API = ''

// function main() {
//     const abort = new AbortController();
//     setTimeout(()=> abort.abort(), 2000);
//     fetch(SLOW_API, {
//         signal: abort,
//     })
// }