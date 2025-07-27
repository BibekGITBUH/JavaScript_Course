console.log("hello world");
// npm install prompt-sync    : for using prompt-sync lib
const xyz=require("prompt-sync")();    //for taking i/p from user.
var fname=xyz("enter your name:");
var lname=xyz("enter your last name:");
console.log("your full name is:",fname,lname);
var x=xyz("whats your age: ");
var y=xyz("whats your address: ");
console.log("hello!",fname,lname,"your detials are:");
console.log("# Address:",y);
console.log("# Age:",x);

function add3num(a,b,c){
    return (a+b+c);
}
let c=add3num(1,2,3);
console.log("you line 16 given values sum is:",c);
