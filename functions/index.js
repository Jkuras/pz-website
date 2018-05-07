const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.bakerMenu = functions.https.onCall((data, context) => {
  $.ajax({
    method: "GET",
    url: "partners.trybaker.com/provider/1557/inventory",
    headers: {'x-api-key': '89YbrTMIXa5xlsTHscNPBaE15PDKzssD9b2fgZic'},
    contentType: "application/json; charset=utf-8",
    xhrFields: {
      'withCredentials' : true
    }
    crossDomain: 'true',
    success: function(data){
      console.log(data)
    },
    error: function(data){
      console.log("error")
    }
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

})
