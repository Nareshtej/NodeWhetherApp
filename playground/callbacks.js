var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'vikram'
}
setTimeout(() => {
  callback(user); // This callback must be in this getUser function otherwise ReferenceError: callback is not defined
}, 2000);
};


getUser(31, (userdata) => {

    console.log(userdata)
});