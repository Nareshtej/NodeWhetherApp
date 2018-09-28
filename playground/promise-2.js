var request = require('request');
var geocodeAddress = (address) => {
  
  return new Promise((resolve, reject) => {
    var encoadedAddress = encodeURIComponent(address);
    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=${encoadedAddress}', //here you have to place var inside ${}
        json: true
    }, (error, response, body) => {
      //console.log(JSON.stringify(error, undefined, 2)); //To see total body of the object we are stringifying body AND undefined means currently we are not filter out any properties AND 2 meas number spcaces between property 
       // to print other things results[0].------your property name---
      if(error) {
          reject('Unable to connect');//system errors check
      } else if (body.status === 'ZERO_RESULTS') {
          reject('Unable to find that address.'); // server error check
      } else if (body.status === 'ok') {
          resolve({
              address: body.results[0].body.status// you can give any number of properties
            //   lattitue: body.results[0].geometry.location.lat,
            //   longitude: body.results[0].geometry.location.lng
          });
          console.log(`status: ${body.status}`) //success message
      } 
    });
});  
};  

geocodeAddress('00000').then((location) => { //Here you can give anything not only res
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage)
});