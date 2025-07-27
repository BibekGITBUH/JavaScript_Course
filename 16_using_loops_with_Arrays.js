
let num =[3,2,4,5,6,7]
for (let i=0; i<num.length; i++){
    console.log(num[i])
} 
console.log("------------------------------")


//forEach loop
num.forEach((elements)=>{
    console.log(elements*elements)
})
console.log("------------------------")

// =-------- Array.from()----------
// in any website inspect element
// copy:  any classname="auto-container"
// document.getElementsByClassName("auto-container")
// display some objects
// let a= document.getElementsByClassName("auto-container")
// stored in a 
// typeof a
// a.forEach()
// cant apply foreach in object
// Array.from(a)
// convert obj to array 
// a.forEach()
// now can apply forEaach

let name= "bibek"
let arr= Array.from(name)
console.log(arr)
console.log("------------------------")

// -----------for of-------------

for (let i of num){
    console.log(i,num[i])
}
console.log("---------------------")

//-----for in ------
for (let i in num){
    console.log(num[i],i)
}
