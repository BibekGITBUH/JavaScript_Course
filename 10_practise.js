let marks={
    hari:98,
    sham:54,
    ram:80
}

// using only for loop
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("the marks of "+Object.keys(marks)[i] +" is " + marks[Object.keys(marks)[i]]);
}
  //  using for in loop..
for (let a in marks){
    console.log("the marks of"+a,"is", marks[a]);
}

//demostrating obj print problem of for in...in for loop...
for (let i=0; i<Object.keys(marks).length; i++){
    console.log(marks);
}



// question: Guess the correct number...\
const xyz=require("prompt-sync")();
let numx=56;
let  i;
i=xyz("Guess the number  :")
i=Number.parseInt(i);
while(i != numx){
    
i=xyz("your guess is worng try again!!!  :")
}
console.log("Congrats.. you found the number.") 
console.log(typeof i);


/*soln by do while ... But here is problem ..try entering correct value at 1st
const xyz=require("prompt-sync")();
let numx=56;
let  i;
i=xyz("Guess the number  :");
do{
    i=xyz("your guess is worng try again!!!  :");
}while(i != numx);
console.log("Congrats.. you found the number.");
*/