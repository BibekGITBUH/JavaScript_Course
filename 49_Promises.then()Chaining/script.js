// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//             let script = document.createElement("script")
//             script.type = "text/javascript"
//             script.src = src
//             document.body.appendChild(script)
//             script.onload = (script) => {
//                     resolve("Script has been loaded sir")
//             }
//             script.onerror = () => { reject(0) }
//     })
// }

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// p1.then((value) => {
//     console.log(value)
//     return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
// }).then((value) => {
//     console.log("Second script ready")
// }).catch((error) => {
//     console.log("We are sorry but we are having problems loading this script")
// })



let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            console.log("Resolved after 2 seconds")
            resolve(56)
    }, 2000)
})

p1.then((value) => {
    console.log(value)
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve("Promise 2") }, 2000)
    }) 
}).then((value) => {
    console.log("We are done")
    return 2
}).then((value)=>{
    console.log("Now we are pakka done")
})
//.then(success, error); then can also hold two values or use catch individually



// Multihandellers of promises
// let p1 = new Promise((resolve, reject) => {
//     // alert("Hey I am not resolved")
//     setTimeout(() => {
//             resolve(1);
//     }, 2000)
// })

// p1.then(() => {
//     console.log("Hurray")
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     resolve(4)
//             }, 6000)
//     })
// }).then((value) => { console.log(value) })

// p1.then(() => {
//     console.log("Congratulations this promise is now resolved")
// })





// Promises APis

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             resolve("Value 1");
//     }, 11000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             // resolve("Value 2");
//             reject(new Error("Error"));
//     }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             resolve("Value 3");
//     }, 3000);
// });

// // p1.then((value) => {
// //         console.log(value)
// // })

// // p2.then((value) => {
// //         console.log(value)
// // })

// // p3.then((value) => {
// //         console.log(value)
// // })

// // let promise_all = Promise.all([p1, p2, p3])
// // let promise_all = Promise.allSettled([p1, p2, p3])
// // let promise_all = Promise.race([p1, p2, p3])
// // let promise_all = Promise.resolve(6)
// let promise_all = Promise.reject(new Error("Hey"))
// promise_all.then((value) => {
//     console.log(value)
// })





//async and await in promises
// async function harry() {
//     let delhiWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     resolve("27 Deg")
//             }, 2000)
//     })

//     let bangaloreWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     resolve("21 Deg")
//             }, 5000)
//     })

//     // delhiWeather.then(alert)
//     // bangaloreWeather.then(alert)
//     console.log("Fetching Delhi Weather Please wait ...")
//     let delhiW = await delhiWeather
//     console.log("Fetched Delhi Weather: " + delhiW)
//     console.log("Fetching Bangalore Weather Please wait ...")
//     let bangaloreW = await bangaloreWeather
//     console.log("Fetched Bangalore Weather: " + bangaloreW)
//     return [delhiW, bangaloreW]
// }

// const cherry = async () => {
//     console.log("Hey I am cherry and I am waiting ")
// }

// const main1 = async () => {
//     console.log("Welcome to weather control room")
//     let a = await harry()
//     let b = await cherry()

// }
// main1()


