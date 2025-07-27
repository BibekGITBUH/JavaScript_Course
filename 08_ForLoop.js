/*let sum=0;
const xyz=require("prompt-sync")();    //for taking i/p from user.
var n=xyz("enter the number you want ");
console.log(typeof sum);
console.log(typeof n);
n =Number.parseInt(n);
for (let i=0; i<n; i++){          //var i gives i value out side of the scope of for too.
   
    console.log(i+1);
    sum += (i+1);
  

}
console.log("sum of number upto",n,"is "+sum);
console.log(typeof sum);
console.log(typeof n);
*/



/*let obj={
    bibek: 85,
    aayusha:90,
    hari:70
}
for(let a in obj){
    //console.log(a);
    //console.log(obj[a]);
    //console.log("===========");
    //console.log(obj);
    //console.log(a,obj[a]);
    console.log(a,obj.hari);
}*/
console.log("=================");
let obj1={
    b:1,
    i:2,
    v:3,
    e:4,
    k:5
}
for(let a of "bivek"){
    console.log(obj1[a],a);
   }
