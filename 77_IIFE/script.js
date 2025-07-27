let a = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(456)
      }, 4000)
    })
  }


//   let func=()=>{
//     async () => {
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)
//   }}
//   func()
// show here we need to call function seperatly even we want immediatly after function is made
//  rather than we want in according to need. 



// We use IIFE (Immediatly Invoked Function Expression) 
  (async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
  })()  // without function name and () is immediatly invoked function
  

  // And this IIF will release all the variable occupied inside the function like: b,c,d 
  // so d will show d is not defined error
 // console.log(d) // Throws error





 