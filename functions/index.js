const functions = require('firebase-functions');
const cors = require('cors');
const express = require('express');
const express = require('node-fetch')

const app = express()
app.use(cors())
// app.get("*", (request, response) => {
//   response.send("Hello from Express on Firebase!")
// })
//
// const api = functions.https.onRequest(app)
//
// module.exports = {
//   api
// }


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const baker_header = {'x-api-key': '89YbrTMIXa5xlsTHscNPBaE15PDKzssD9b2fgZic'}
const baker_init = {
  method: 'GET',
  headers: baker_header,
  mode: 'cors',
  cache: 'default'
}

// app.get('/menu/', (req, res)=> {
//   fetch('partners.trybaker.com/provider/1557/inventory', baker_init).then(response => response.json()).then(json => res.json(json)).catch(console.log('shit'))
// })
//
// app.listen(3000)
exports.bakerMenu = functions.https.onRequest((data, context) => {
  var menu = "nothing"
  fetch('https://partners.trybaker.com/provider/1557/inventory/', baker_init).then( function(response) {
    menu = response.json()
    return response.json()
  }).catch(console.log('fetch error with baker'))
  return menu
})
  // let request = new XMLHTTPRequest()
  // let url = "partners.trybaker.com/provider/1557/inventory"
  // request.setRequestHeader('x-api-key', '89YbrTMIXa5xlsTHscNPBaE15PDKzssD9b2fgZic')
  //
  // request.open("GET", url, true)
  // request.send()
  //
  // request.onload = function() {
  //   if (this.readyState === 4 && this.status === 200) {
  //     let response = JSON.parse(this.responseText)
  //     res.status(200).send(response)
  //   }
