// let p =fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((response) => {
//         console.log(response.status)  // object of response
//         console.log(response.ok)       // object of response
//         console.log(response.headers)  
//        // console.log(response.text())    // we will not get json but rather :TypeError: Failed to execute 'json' on 'Response': 
//                                                            // body stream already read at script.js:7:25
//         return response.json()
// }).then((value2) => {
//         console.log(value2)
// })


// let p1 = fetch("https://goweather.herokuapp.com/weather/Ny")
// p1.then((response) => { 
//         return response.json()
// }).then((response) => {
//         console.log(response)
// })


// const params = {
//         method:"GET",
// 	"latitude": 28.3974,
// 	"longitude": 84.1258,
// 	"hourly": ["temperature_2m", "weather_code", "wind_speed_10m", "soil_temperature_0cm"]
// };    // this is called request headers

// let p =fetch("https://api.open-meteo.com/v1/forecast",params)
// p.then((response) => {
//         console.log(response.status)  // object of response
//         console.log(response.ok)       // object of response
//         console.log(response.headers)   // response header
//        // console.log(response.text())    // we will not get json but rather :TypeError: Failed to execute 'json' on 'Response': 
//                                                            // body stream already read at script.js:7:25
//         return response.json()
// }).then((value2) => {
//         console.log(value2)
// })
