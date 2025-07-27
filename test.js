// let check=(a)=>{
//     return p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let x=55;
//       if (x!=a){
//            return reject(new Error("hello i am error "));
//               }else{
//                 return resolve("sucess guess:"+a);
//                   }
//      },5000);
// })}






//  check(55).then((value)=>{
//     console.log(value);
//     return value;
//  })
// .then((value0)=>{
//     setTimeout(()=>{
//     value0=value0+"1";
//     console.log(value0);
//     return value0;
// },6000);
// })
// .then((value1)=>{
//     value1=value1+"2";
//     console.log(value1);
//     return value1;
// })
// .then((value2)=>{
//     value2=value2+"3";
//     console.log(value2);
//     return value2;
// ;}),(error)=>{
//     console.log(error)
// }





// // Here a date has been assigned
// // while creating Date object
// let dateobj = new Date();

// // date of the month from above Date Object is
// // being extracted using getDate()
// let B = dateobj.getDay();
// let days={
//     0:"sunday",
//     1:"monday",
//     2:"tuesday",
//     3:"wednesday",
//     4:"thursday",
//     5:"friday",
//     6:"saturday"
// }
// // Printing date of the month
// console.log(days[B]);
// console.log(dateobj);




// async function xyz(){
// console.log("hello");

// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("world")
//     },2000);
//         }
// )

// let r=await p;
// console.log(r);
// console.log("how are you");
// }
// xyz();








// console.log(setTimeout(function(){}),500)

let contentx="hello world"
console.log({contentx})