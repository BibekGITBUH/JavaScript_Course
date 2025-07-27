// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name); // uses variable declared in the parent function
//     return "BuG";
//   }
//   name = "Harry"
//   return displayName;  // displayName => call entier function normally and BuG is not seen
//                        // displayName(); => call return function immediately ie. directly call container of and stores return to init().
//                        // As we know return contains string. So, init() containing string is not callable. so calling c() get "not a function" error.
// }

// // so simmilary if we call any function in return then contains of that function is seen and then "not a function" error  will seen.
// // so for its solution we use :
//    // return function(){
//    //          displayName()} 
//    //   It prevents error and show undefined for "not a function" error


// //init();
// let  c = init();
// console.log(c()) // only c() will show containner of function not return.






function returnFunc() {
    const x = () => {
      let a = 1
      console.log(a)
      const y = () => {
        // let a = 2
        console.log(a)
        const z = () => {
          // let a = 3
          console.log(a)
        }
        z()
      }
      y()
      a = 999
      y()
    }
    return x
  }
  
  let a = returnFunc()
  a() 





// function dummy(){
//   console.log("hello")
//   //let word="world"
//   function dm(){
//     console.log("world")
//     return console.log("xyz")
//   }
//   return function(){ dm();}
// }

// let xz=dummy();
// console.log(xz());

//console.log(console.log("xyz"))  