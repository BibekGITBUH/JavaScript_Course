// Syncronous programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + " years old and has " + c + " favorite color.");

// Asynchronous programming
// console.log("Start")
// setTimeout(function() {
//   console.log("Hey I am good");
// }, 3000)
// console.log("End")




//By Hitesh youtuber:
// https://stackblitz.com/~/github.com/hiteshchoudhary/dom-project-chaiaurcode




// //callBack function
// function calbac(a,c,d){  // a,c,d,....
//   console.log(a);
//   c(5);
//   d(6);
//   }
//   function b(x){
//       console.log("its me b",x)
//   }
//   function z(y){
//       console.log("its me b",y)
//   }
//   calbac(2,b,z);



// Callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {                 // anonymous function
      console.log("Loaded script with SRC: " + src)
      callback(obj["drink"], src);
      // callback(null,src);
    }
    script.onerror = function() {
      console.log("Error loading script with SRC: " + src);
      //callback(null,new Error("Src got some error"))      // try these two one by one
      //callback(new Error("Src got some error"),null)
      callback(new Error("Src got some error"))        // Error message, typeof is Error
    }
    document.body.appendChild(script);
  }
  
  function hello(error, src) {
    if (error) {                 //false if: 0,false,null,undefined,empty strings,nullObj...
      console.log("its me"+typeof error)  // error gives message ie. "Error"
      return
    }
    alert('Hello World!' + src);
  }
  
  function goodmorning(error, src) {
    if (error) {
      console.log("its me"+typeof error)
      sendEmergencyMessageToCeo();
      return    // avoid execution of alert and return nothing ie terminated from if
    }
    alert('Good morning' + src);
  }
  
const obj={
"food":null,
"drink":undefined
}
  loadScript("https://cdn.jxsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 