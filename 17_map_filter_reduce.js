 // ----------MAP--------------
 let arr=[54,45,65]
 let a= arr.map((x,y,z)=>{     // x is value,  y=index,  z=array                               // this is same for forEach also
    console.log(x,y,z)
    return x + 1 + y    //if:x<50 give boolean    //uses operation and store updated index value after operation in new array a       // create new array in a      // above parameter xyz can be use here
 })
 console.log(a)
console.log("------------------------")

 //----------------Filter------------------
let arr1=[2,3,4,5,61,6]
let a1= arr1.filter((a)=>{
    return a<5        // uses comparators which returns booolean if true stores index value in new array ie. a1 if not dont stores
})
console.log(a1);
console.log(arr1)
console.log("-------------------------");    

// -=--------------Reduce---------
let arr2=[2,2,3,4,5,6,7,8,9] 
const reduce_func=(x,y,z)=>{    // x=first value, y=second value , z=index after 1st elements 
    console.log(x,y,z)
    return x*y*z                     // use + - etc       // (x*y)*z 
 }
 let array=arr2.reduce(reduce_func)
 console.log(array)
