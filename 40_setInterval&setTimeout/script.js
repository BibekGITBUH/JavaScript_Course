document.write("Hello")

const sum = (a, b, c) => {
  console.log("Yes I am running " + (a + b + c))
  a + b
}

setTimeout(sum, 1000, 1, 2, 7)//setTimeout(sum//function, 1000//time taken to excute after line 1,  1,2,7//arguments of sum function)
// setInterval(function() {           //  every thing same just -- time taken to execute repetedly in given time
//   alert("setinterval")
// }, 3000)

// let a = setTimeout(function() {      // a stores timerId 
//   alert("I am inside of settimeout")
// }, 5000)

// let b = prompt("Do you want to run the settimout?")
// if ("n" == b) {
//   clearTimeout(a)        // cancles the setTimeout function or dont execute  , similary clearInterval(timerid Of setInterval) 
// }
// console.log(a) 