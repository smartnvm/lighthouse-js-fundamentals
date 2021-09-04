const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('return John');

console.log(greeting);
