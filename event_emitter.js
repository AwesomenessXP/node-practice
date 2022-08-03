let events = require('events');
let eventEmitter = new events.EventEmitter();

// create an event handler:
let myEventHandler = () => console.log('I hear SOMETHING!!');

// assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

// fire the 'scream' event:
eventEmitter.emit('scream');