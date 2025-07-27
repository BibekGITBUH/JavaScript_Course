const express = require('express')
const path=require("path")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req)
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,"./index.html")); // serving html in res.send  And path is require and path is inbuilt
    //res.send('About')
  })
  
  app.get('/contact', (req, res) => {
    res.send('Contacts')
  })
   
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


// 3000/?name=bibek in server locahost 