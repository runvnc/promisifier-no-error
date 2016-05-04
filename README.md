
# Usage

var Promise = require('bluebird');

horseObj = { drink: function(cb) { cb('slurp'); } };

var horse = Promise.promisifyAll(horseObj, { promisifier: require('promisifier-no-error') });

horse.drinkAsync().then(function(data){
  console.log(data);
     // Can use here, now promisified normally.
});
