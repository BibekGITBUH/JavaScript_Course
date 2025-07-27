// add numbers to orginal aarays
let arr1=[1,2,3,4,5];
const xyz=require("prompt-sync")();    //for taking i/p from user.
let a=arr1.map((value)=>{
    var ip=xyz("enter your number");
    b=Number.parseInt(ip);
    do{
    return value+b;
    }while(b!=0);
})
console.log(arr1);
console.log(a);
arr=arr1.concat(a);
console.log(arr);


// filter the number divisible by 10 in give array

let arr2=[10,2,30,40,5,6,70]
let new_arr2=arr2.filter((x)=>{
    return x%10==0;
})
console.log(arr2);
console.log(new_arr2);


//make square of given array of numbers

let ar1=[1,2,3,4]
let new_=ar1.map((x)=>{
    return x*x;
})
console.log(new_)

// factorial of n natural number store in array 
let factorial_=ar1.reduce((x,y)=>{
    return x*y
})
console.log(factorial_)