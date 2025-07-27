console.log(document.body.childNodes[0])  //=== console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)    // === console.log(document.body.childNodes[documents.childNodes.length -1])
console.log(document.body.hasChildNodes())
let arr =Array.from(document.body.childNodes)    //converting childNodes collection to array 
console.log(arr)