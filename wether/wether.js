const request = require('request');
// for request you need pass options object{} and one arrow function

var getWether = (lat, lng, callback) => {
      
request({
  url: `https://api.darksky.net/forecast/224bb9e3252afe292a7ac7d6ed6b7ebd/${lat},${lng}`,
  json: true // this means go and fetch the body as JSON
}, (error, response, body) => {
  //console.log(response);
  console.log(body.currently.temperature);
 
  if (error) {
    callback('unable to connect to forcast.io server');
  } else if (response.statusCode === 400) {
    callback('Unable to fetch the wether');
  } else if (response.statusCode === 200) {
    callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
    })
  }
// console.log('the result is showen below', response)
//   if(!error && response.statusCode === 200) {
    
//     console.log(body.currently.temperature);
//   } else {

//     console.log('Unable to fetch the result');
//   }
});
};

module.exports.getWether = getWether;