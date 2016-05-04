module.exports = function (originalMethod){
    return function promisified(){
         var args = [].slice.call(arguments); // might want to use smarter
         var self = this                      // promisification if performance critical
         if (!Promise) var Promise = require('bluebird');
         return new Promise(function(resolve,reject){
             args.push(resolve); 
             originalMethod.apply(self,args); // call with arguments
         });

    }
}

