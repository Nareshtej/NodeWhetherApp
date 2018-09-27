const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    } 
});

// console.log(argv);
