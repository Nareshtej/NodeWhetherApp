var request = require('request');

var geocodeAddress = (address, callback) => {
var encoadedAddress = encodeURIComponent(address);
console.log(encoadedAddress);

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=${encoadedAddress}', //here you have to place var inside ${}
    json: true
}, (error, response, body) => {
  //console.log(JSON.stringify(error, undefined, 2)); //To see total body of the object we are stringifying body AND undefined means currently we are not filter out any properties AND 2 meas number spcaces between property 
   // to print other things results[0].------your property name---
  if(error) {
      callback('Unable to connect');
      console.log('Unable to connect'); //system errors check
  } else if (body.status === 'ZERO_RESULTS') {
      console.log('Unable to find that address.'); // server error check
  } else if (body.status === 'ok') {
      callback(undefined, {
          address: body.results[0].body.status// you can give any number of properties
      })
      console.log(`status: ${body.status}`) //success message
  } 
});
// }
// module.exports = {
//     geocodeAddress
// } you can write like below also 
module.exports = geocodeAddress;


// resopnse object give status code = 200 success, 404 Not found, 500 Server crash and all other details with big json data
//Headers are part of http protocols and contains key value pairs. They can sent request from node server to google server and get response from google server
//The headers come back from server
/*
This error comes because of url is not found  
{
    "errno": "ENOTFOUND",
    "code": "ENOTFOUND",
    "syscall": "getaddrinfo",
    "hostname": "magoogleapis.com",
    "host": "magoogleapis.com",
    "port": 443
} */

