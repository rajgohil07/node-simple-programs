//first call the module
const event_getter = require("events");
const eemit = new event_getter.EventEmitter();

function first_emit() {
  console.log("from first function");
}

function second_emit() {
  //emit insde the function
  eemit.emit("another_event");
  console.log("function call from 2nd function");
}

function nested_function() {
  console.log("calling from inside function");
}

//adding events
eemit.on("first", first_emit);
eemit.addListener("another_event", nested_function);
eemit.on("second_event", second_emit);

//emiting events
eemit.emit("first");
eemit.emit("second_event");

//count the events
let counter = eemit.listenerCount("first");
console.log(`\nTotal event with 'first' is: ${counter}`);
