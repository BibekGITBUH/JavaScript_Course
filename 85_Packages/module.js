// to use module features we must add "type": "module" in package.json file

//------------------ // commonjs ---------------------//

// const hello=require("./module1.js")       // must contain any function name
// hello.ahello("Shivani")
// hello.ahello("Garima")
// hello.ahello("Nitika")
// hello.ahello("Aishwarya")
// hello.nameDS()
// hello.nameD()


// const {hello, ahello,nameDS,nameD} = require("./module1") 
// ahello("Shivani")
// ahello("Garima")
// ahello("Nitika")
// ahello("Aishwarya")
// nameDS()
// nameD()






//------------------ // Es6 ---------------------//

// import harry, {hello, ahello} from "./module2.js"     // export const are placed inside {}  and export default are place outside.
// harry()
// hello()
// ahello("anita")