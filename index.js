// Follow along with the examples here

function doNothing() {}

function sayHello() {
    console.log("Hello!")
}
sayHello()

function helloSmith() {
    console.log("Hello, Smith")
}

function helloBrian() {
    console.log("Hello, BRian")
}

function helloJay() {
    console.log("Hello, Jay")
}
helloBrian()
helloJay()
helloSmith()

function doSomething(thing) {
    console.log(thing)
}
doSomething("anything")


function sayHello(name) {
    console.log(`Hello, ${name}!`)
}
sayHello("Brian")
sayHello("Jayyy")


function say(greeting, name) {
    console.log("name: ", name)
    console.log("greeting: ", greeting)
    console.log(`${greeting}, ${name}!`)
}
say("Goodbye", "Julio")
say("Julio", "Hello")



function add(x, y) {
    return x + y;
};
console.log(add(4, 80));


function say(greeting, name) {
    // console.log("I was called")   this is if we want to use both log and return
    return `${greeting}, ${name}`
}
console.log(say("Hello", "Brian"))