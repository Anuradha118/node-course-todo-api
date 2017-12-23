var mongoose=require('mongoose');


mongoose.Promise=global.Promise;
mongoose.connect('mongodb://anuradha:todo@ds163836.mlab.com:63836/todoapp');

module.exports={mongoose};