// Follow along with the examples here
function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  } 
  //sayHelloToIsabel();

  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  } 
  //sayHelloToSofia();

  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  } 
  //sayHelloToBrendan();

  function doSomething(math) {
    console.log(1+2);
  }
  
  //doSomething('anything');

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  } 
  //say("Julio", "hello"); 

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  } 

  function add(x, y) {
    return x + y;
  } 
  //console.log(add(80,900)); 

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  } 
  //console.log(say("Hello", "Sofia"));
  
  function say(greeting, firstName) {
    console.log('I was called!');
    return `${greeting}, ${firstName}!`;
  } 
  console.log(say("Howdy", "partner")); 
