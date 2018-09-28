var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

asyncAdd(5, 7).then((res) => {
// success case
  console.log('Result',res)

  //Promise chaining (promise hell)
  return asyncAdd(res, '20'); 
})
/*
, (errorMessage) => {
// error case
  console.log(errorMessage)
})
  */

.then((res) => {
   console.log(res);
})
/*
, (errorMessage) => {
   console.log(errorMessage)
});
 */

 .catch((errorMessage) => {   // This avoids a little cofusion in promise hell
  console.log(errorMessage);
 });


// var somePromise = new Promise((resolve, reject) => { // unonymous normal callback function
  
//   setTimeout(() => {
//   resolve('Hey. it worked'); // you can do only one of action once i.e., either resolve or reject once   
//   //resolve(); // It won't print the above same message again
//   //reject('Error: Unable to fulfill promise');
//   }, 2500);
// }); // Here we created instance for promise

// // This only calls when our conditions satisfies 
// somePromise.then((message) => {   // Then is a callback function it also used in success cases and failure cases
//   console.log('Success', message);  // In case of database we use "user" in argument
// }, (errorMessage) => {
//     console.log(errorMessage);
// });


/*
1. why promises not call backs
   Here you can call promise only once either resolve or reject . In callbacks you can add any number
of callbacks in your code then it will create more complex code.
exP: callback('Unable to fetch the wether');
      callback()
      callback()-------n (Call back hell)

      resolve()
      reject()
      Therse are called only once
     
2. why return infront of the promise?

If you pass function with arguments then you need to add return to write the result using Promise
var addition = (a, b) => { return new Promise((resolve, reject) =>{
  write your logic init
}) }
      */
