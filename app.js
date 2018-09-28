const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const wether = require('./wether/wether');

const argv = yargs
.options({  //Here in this options property you can pass any number of json objects
  a:{ //a is the alias name 
    demand: true,
    alias: 'address',
    describe: 'Address to fetch for wether',
    string: true // this gives the result in description format not in true or false    
    }
})
.help() // This provides help for first user 
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {

  if(errorMessage) {
      // actual object
   console.log(errorMessage);
    } else {
      // This is call back variable result
      console.log(results.address);

wether.getWether(results.latitude, results.longitude, (errorMessage, wetherResults) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(`It's currently ${wetherResults.temperature}. It feels like ${wetherResults.apparentTemperature}`);
    //console.log(JSON.stringify(wetherResults, undefined, 2));
  }
});
      
    } 
});

// console.log(argv);

// The app.js only knows that passing address to the function and doing something with that data . That's it you need not provide any functionality to the app.js
 
//224bb9e3252afe292a7ac7d6ed6b7ebd

 // var lat=72.8777;
 // var lnt=19.0760;

 //wether.getWether(72.8777,19.0760, (errorMessage, wetherResults) => {
