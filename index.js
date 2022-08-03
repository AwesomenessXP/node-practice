#!/usr/bin/node

// ----------------------- THIS IS OUR SERVER!!! --------------------
// include http module
const http = require('http'); 

// // server will listen on this port and hostname
const port = process.env.PORT || 3000;

// // createServer() makes a new http server, and returns it
// // request object and response object are called
// // request: http.IncomingMessage object
// //        - we REQUEST data
// // response: http.ServerResponse object
// //        - we get a RESPONSE from the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // 200 = success
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, World!</h1>'); // close the response
});

// when server is ready, listen() is called
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

// ---------------------- GET REQUEST WITH AXIOS ----------------------
const axios = require('axios');

axios
  .get('https://example.com/todos')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });

// --------------------------- POST REQUEST WITH AXIOS -------------------

const axios = require('axios');

axios
  .post('https://whatever.com/todos', {
    todo: 'Buy the milk',
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`);
  })
  .catch(error => {
    console.error(error);
  });


// ------------------------- NODE.JS FILESYSTEM (FS) ----------------------
// allows us to access and interact with the file system
// REMEMBER: all the methods are asynchronous by default
// fs module can be synchronous by appending sync

const fs = require('fs');

// a synchronous API can be used like this!!
fs.rename('before.json', 'after.json', err => {
  if (err) {
    return console.log(err);
  }
});

// this is a promise based API
const fs2 = require('fs/promises');
async function example() {
  const fileName = '/Users/jo/test.txt';
  try {
    // read a file
    const data = await fs2.readFile(fileName, 'utf8');
    console.log(data);

    // change its content 
    const content = 'Some content!';
    await fs.writeFile(fileName, content);
    console.log('Wrote some content!');

    //read it again
    const newData = await fs.readFile(fileName, 'utf8');
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}
example();

//------------------ WRITING FILES WITH NODE.JS ------------------------
// use fs.writeFile()

//---------- RECOMMENDED VERSION ------------ (bc its asynchronous)
// REMEMBER: this will REPLACE contents of a file if it already exists!!
const fs = require('fs/promises');

async function example() {
  try {
    const content = 'Some content!';
    await fs.writeFile('/Users/joe/test.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example();

// to modify:
fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => { });
// what does a+ mean? lets look at the flags:
/**
 * r+ ---> open for reading/writing
 * w+ ---> open for read/write, position stream at the beginning
 * a ----> open the file for writing
 * a+ ---> open file for read/write, position stream @ at the end of the file
 *        - if file doesnt exist, create a new one
 */

//------------------ APPENDING TO FILES WITH NODE.JS ------------------------
// use fs.appendFile()

const fs = require('fs/promises');

async function example() {
  try {
    const content = 'Some content!';
    await fs.appendFile('/Users/joe/test.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example();

// ------------------ READING FILES IN NODE.JS -----------------------------
// use fs.readFile()
// fs.readFile(), fs.readFileSync(), and fsPromises.readFile() read full content
// in the file before returning the data
// promise version:
const fs = require('fs/promises');

// take file data as input
async function example() {
  try {
    const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();

// -------------------------------- URLS ---------------------------------------------------

// URL API:
const myURL = new URL('/foo', 'https://example.org/'); //https://exmaple.org/foo

import { EventEmitter } from 'node:stream';
// can be accessed as a module!!
import { URL } from 'node:url';
console.log(URL === globalThis.URL); // prints trueee!!

// prints a TypeError if input or base are not valid:
const myURL = new URL({ toString: () => 'https://example.org/' });

// when we dont know what input and base are, we can validate the origin
let myURL = new URL('http://Example.com/', 'https://example.org/');
// http://example.com/

myURL = new URL('https://Example.com/', 'https://example.org/');
// https://example.com/

myURL = new URL('foo://Example.com/', 'https://example.org/');
// foo://Example.com/

myURL = new URL('http:Example.com/', 'https://example.org/');
// http://example.com/

myURL = new URL('https:Example.com/', 'https://example.org/');
// https://example.org/Example.com/

myURL = new URL('foo:Example.com/', 'https://example.org/');
// foo:Example.com/

// url.hash: sets the fragment portion of URL
const myURL = new URL('https://example.org/foo#bar');
console.log(myURL.hash); // in this case, it prints #bar

myURL.hash = 'baz';
console.log(myURL.href); // prints the whole URL address

// ------------------------------------- PACKAGE.JSON ----------------------
// REMEMBER: 'dev', 'start', 'unit'... are all scripts:
// ex: npm run dev, npm run start, npm run unit
// choose "private": true so that it wont accidentally be published to npm
//
// dependencies:
// - when installing a package using npm:
// - npm install <PACKAGENAME> or yarn add <PACKAGENAME>

// devDependencies:
// - different from dependencies, are ONLY meant to be installed in a development machine

// engines: 
// - tells you what version of node you're using
"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}

//--------------------- EVENT EMITTER =------------------------------------
// its just like event listeners in JS
// IS USED TO HANDLE EVENTS
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// emit() --> triggers an event
// on () ---> adds a callback to WHEN the event will be triggered

eventEmitter.on('start', () => { // listen for an event in NODE
  console.log('started');
})

eventEmitter.emit('start'); // execute the event

// we can pass arguments to the event handler:
eventEmitter.on('start', number => {
  console.log(`started ${number}`);
})

eventEmitter.emit('start', 23); // execute this event

// we can pass MULTIPLE ARGUMENTS: 
eventEmitter.on('start', (start, end) => {
  console.error.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 100);

// once() --> event happens ONCE 
// removeListener() // remove event listener from event
// removeAllListeners() // remove ALL listeners from event

// --------------------------- EVENTS MODULE --------------------------------
const EventEmitter = require('events');

// event listener has built in events:
// newListener when a listener is added
// removeListener when listener is removed
const door = new EventEmitter();

