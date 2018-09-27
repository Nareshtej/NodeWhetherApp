console.log('starting of application');

setTimeout(() => {
    console.log('this is timeout delay')
}, 2000);


setTimeout(() => {
    console.log('this is second timout dalay');
}, 0);
console.log('End of the application');

//output
// starting of application
// End of the application
// this is second timout dalay
// this is timeout delay