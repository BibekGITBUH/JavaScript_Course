// let a;
// Following two lines will run successfully due to JavaScript hoisting
console.log(a)
console.log(b)
great1() // swap these 5 and 6 line then observe error
greet()
var greet = function() {         // function is initialized to greet : Function Expression
  console.log("Good morning")
}
function great1() {            // function is declared 
    console.log("Good morningx")
  }
// similarly same for class and class is initialized : Class Expression
// class and function may be anonymous or not too  

var a = 9; // Declaration and initialization         // Declaration hoisted to the top but initialization is not
var b;  // Only Declaration
//console.log(a)


// if we use let x; then x is initialized 
// if we use var x; then x is declared 
// if we use var x=5; then x is declared and initialized by value 5
// similar for const too