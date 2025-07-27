function avg(a,b){
    return ((a+b)/2);
}

 function comment(){                  // old function making technique..
     console.log("Welcome");
     return console.log("thankyou!!");
 }

const comment1=()=>{     
    return 0;
}
const c1=()=>{                       //mordern function making technique ..
    console.log("x");
}

const xyz=require("prompt-sync")();
let c=xyz("enter the first number ");
let d=xyz("enter the second number ");
console.log("Average of given number is: ", avg(c,d));
console.log("comment is: ",comment());
console.log(comment1());
let v= c1();
console.log(v);



let sum=(aa,bb)=>{
    //console.log("hello",a+b)
 return ("sum is:", aa+bb);
}


console.log("results:",sum(1,3));



xxx=function(){    // anonymous function and its calling and assigning
    console.log("test")
return ("hello fuckers");
}
//console.log(xxx);
console.log(xxx());


// callBack function
function calbac(a,c,d){  // a,c,d,....
console.log(a);
c(5);
d(6);
}
function b(x){
    console.log("its me b",x)
}
function z(y){
    console.log("its me b",y)
}
calbac(2,b,z);



/*
enter the first number 1
enter the second number 2
Average of given number is:  6
Welcome                   =>func display     :  console.log() is function 
thankyou!!                =>return bhitra ko func display   :    console.log() is function
comment is:  undefined      console.log() is function which do not return anything so value is Undefined
0
x
undefined
results: 4
[Function: xxx]
test
hello fuckers
2
its me b 5

*/
