let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".class"))  // gives false bcz no any such classes
console.log(id1.matches(".box"))    // gives true bcz there is such class      
//.. in general matches match the class whether class is present or not.
console.log(sp1.closest("#sp1"))  // search within self ,if not found search in its parents and again parents until not found.          return true
console.log(id1.contains(sp1)) // search the attributes contains ie. id=sp1 inside of selected document attribute id=id1             return true
console.log(sp1.contains(sp1)) // search the atrributes contains ie. id=sp1 on id=sp1          return true
console.log(sp1.contains(id1))  // search the attributes on parents of selected odcuments


console.log(document.getElementById("id1").matches(".sp1"))
// returns fasle as matches search attributes of selected documents only