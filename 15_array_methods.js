let num=5;
console.log(typeof num);
num=num.toString();
console.log(typeof num);

// similarly    for array :

let arr1=[1,2,3,4,5];
console.log(typeof arr1,arr1); 

let b=arr1.toString();
console.log(typeof b,b);    // give the result seperated by comma...    

let c=arr1.join(" ");      // just replace the comma by given ""     if we write join without parameter it works as toString....
console.log(typeof c,c);


let d=arr1.pop();      // pop the last or top value of array and store to it in d and also update arr1 after poped...
console.log(arr1,d);


let e=arr1.push(90,91);    // push returns new array length       if push is written without parameter it works as length.....
console.log(arr1,e);



let f=arr1.shift();     // remove 1st element from array and update array and also store removed element to f ...
console.log(arr1,f);  


let g=arr1.unshift(1,1);
console.log(arr1,g);

delete arr1[0];
console.log(arr1,arr1.push(),arr1.length);

let arr2=[100, 101, 102, 103];
let arr3=[200, 201, 202, 203];
arr1=arr1.concat(arr2,arr3);
console.log(arr1);  

// arr1.sort();    --> it short the array and update the orginal array..
arr1.sort();
console.log(arr1);   // this will sort the array according to this:  1xyz , 1abc, 2..., 2..., 3, 4.. , 5 .. and so on

let compare =(a,b)=>{
 return a-b;     // b-a for accending order..
}
arr1.sort(compare);
console.log(arr1);
arr1.reverse();
console.log(arr1);
let delValue=arr1.splice(2                          ,3                             ,  999,1000,1001);
         // yo index dekhi----------3 ota element remove gar -----------ani yo yo element rakh xxx if elements are more or less then also it will replace.
console.log(typeof delValue,delValue,arr1);         
// arr1.slice();       check ur self.