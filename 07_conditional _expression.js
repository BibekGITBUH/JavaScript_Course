
console.log("conditional expression in java script");

const prompt=require("prompt-sync")();
 let a =prompt("hey whats your age?:"); // it takes any thing in the form of string.
 //let b=alert("hello ");  //in browser console it shows the message. while prompt ask the data.
 console.log(typeof a);
 b=Number.parseInt(a); // this converts "a" datatype in Number bcz we wrote Number.parseInt.
 console.log(typeof b);

 // if ,else if, else....
if(b<0){
    console.log("age cant be negative please enter the proper age");
}
 else if (b<18){
    console.log("you are not valid for drive.");
}
else if(b>18 && b>50){  
  console.log("Must be varified by medical.");
}
else{
    console.log("you are valid for drive.");
}
// ternary operator....
console.log("you can", (b<18? "not drive" : "drive"));


      //  a=confirm();if(a==true){alert("good");}alert("bad");
  


       // MDN are docs of js given by Mozilla. 

        

 // About Switch 

 const expr=prompt("what you need?");
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}



// chap 8 is ntg jst practise
