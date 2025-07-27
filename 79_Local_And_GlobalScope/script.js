let p = 9        // automatically global scope
function ax() {  //  function scope 
  let a = 8;
  console.log(p)
  console.log(a)
}

{         // block scope
  let x=90;
}
console.log(x )

ax()
console.log(p)
console.log(a)

