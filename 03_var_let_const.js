const author="BIBEK";
console.log("JS 3rd : var, let and const");
{let a=45;
console.log(a);}
 // console.log(a);   this line gives an error bcz a is not defined. Defined a by let variable is inside scope which is not valide for outside scope.
let a= "x";   // here lines 5 and 6 shows we cant redeclare the memory but can be update.
a="y";
var b="bibek";
var c= 76;     // but here line 8 and 9 shows we can redeclare the memory with updating value simultaniously.
var c=56;
var d= undefined
 console.log(b);
 console.log(a);
 console.log(c);
{
  let a="hello"
  let b='this'    // here let is block scope variable but var is not block scope because if we update 
   var c="check";                       //var any where(inside any function or outside function) it gets update in all place but...
  console.log(b); // continued...Let performs friendly as it dont affect inside of seperatly made funtion with {}, 
   console.log(c);                       //inside function let is in diff dimension and outside is of diff dimension. 
   console.log(a);
}
console.log(a)
console.log(b);
console.log(c);
console.log(author);
console.log(d);
// press alt and select the lines and write simultaniously 


