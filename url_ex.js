// url module splits a URL into readable parts
let url = require('url');
let addr = 'https://www.youtube.com/watch?v=WCNwof3_SIw&list=UUYS9RzMYwz1-RVVXzR4HvlQ&index=3';
let q = url.parse(addr, true);

console.log(q.host); // returns www.youtube.com
console.log(q.pathname); // returns /watch
console.log(q.search); // returns ?v=WCNwof3_SIw&list=UUYS9RzMYwz1-RVVXzR4HvlQ&index=3

let qData = q.query;
console.log(qData.index); // returns 3
console.log(qData.list); // returns UUYS9RzMYwz1-RVVXzR4HvlQ