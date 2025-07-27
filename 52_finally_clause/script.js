const f = () => {
    try {
            let a = 0;
            // console.log(program)
            console.log("Program ran successfully")
            return     // this terminate the try catch flow and get out of try catch and run fINALLY
    } 
    catch (err) {
            console.log("This is an error")
            console.log(p)
    }
    finally {                   // if finally is removed and then also console.log() will not execute
            console.log("I am a good boy")
            // Close the file
            // Exit the Loop   
            // Write to the log file
    }
}

f()
console.log("End") 